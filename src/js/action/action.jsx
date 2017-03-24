'use strict';

import request from 'superagent'
import qs from 'qs'

export function fetchArticle(articleId) {
	return dispatch => {
		const aricleDetail = () => {
			return new Promise((resolve, reject) => {
				let url = `/test/?id=${articleId}`;

				request
				.get(url)
				.withCredentials()
					.end((err, res) => {
					if (res.body) {
						resolve(res.body);
					} else {
						reject('nnnn');
					}
				});
			});
		};


		const aricleDetails = aricleDetail();
		aricleDetails.then((result) => {
			dispatch(returnArticleRequest(result));
			dispatch(loadingStateChange(false));
		}).catch(function (reason) {
			dispatch(loadingStateChange(false));
		});

	};
}

export function fetchList({queries},content) {
	return dispatch => {

		let queryArray = {
			query: `qiita+${queries.type}:${queries.q}`,
			page: queries.page
		}


		const aricleList = () => {
			return new Promise((resolve, reject) => {

				let query = qs.stringify(queryArray);
				let url = '/api/?' + decodeURIComponent(query);

				request
					.get(url)
					.withCredentials()
					.end((err, res) => {
						if (res.body.length) {
							let body = [...content, ...res.body];
							resolve(body);
						} else {
							reject('nnnn');
						}
					});

			});
		};
		const aricleLists = aricleList();
		aricleLists.then((result) => {
			const itemLength = result.length;
			const nextPageflg = 0 === itemLength % 10 ? true : false;
			dispatch(changeNextPageState(nextPageflg));
			dispatch(returnRequest(result));
			dispatch(loadingStateChange(false));
		}).catch(function (reason) {
			dispatch(failRequest(true));
			dispatch(loadingStateChange(false));
		});

	};
}

export function scrollTop() {
	window.scrollTo(0, 0);
}

export const SUCCESS_LOADING_COMPLATE = 'SUCCESS_LOADING_COMPLATE'
export function loadingStateChange(loadingState) {
	return {
		type: SUCCESS_LOADING_COMPLATE,
		loadingState
	}
}

export const SUCCESS_ARTICLE_REQUESR = 'SUCCESS_ARTICLE_REQUESR'
export function returnArticleRequest(result) {
	return {
		type: SUCCESS_ARTICLE_REQUESR,
		result
	}
}

export const CHANGE_NEXT_PAGE_FLAG = 'CHANGE_NEXT_PAGE_FLAG'
export function changeNextPageState(state) {
	return {
		type: CHANGE_NEXT_PAGE_FLAG,
		nextPageFlg: state
	}
}

export const CHANGE_PAGE_NUM = 'CHANGE_PAGE_NUM'
export function pageNumChange(currentPageNum) {
	return {
		type: CHANGE_PAGE_NUM,
		currentPageNum: parseInt(currentPageNum)+1
	}
}

const FAIL_AJAX_REQUESR = 'FAIL_AJAX_REQUESR'
export function failRequest(requestState) {
	return {
		type: FAIL_AJAX_REQUESR,
		requestState
	}
}

const SUCCESS_AJAX_REQUESR = 'SUCCESS_AJAX_REQUESR'
export function returnRequest(result) {
	return {
		type: SUCCESS_AJAX_REQUESR,
		result
	}
}

export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE'
export function changeType(searchType) {
	return {
		type: CHANGE_SEARCH_TYPE,
		searchType
	}
}

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE'
export function changeValue(searchValue) {
	return {
		type: CHANGE_SEARCH_VALUE,
		searchValue
	}
}
