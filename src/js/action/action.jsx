'use strict';

import request from 'superagent'
import qs from 'qs'

export function fetchArticle(articleId) {
	return dispatch => {
		const aricleDetail = () => {
			return new Promise((resolve, reject) => {
				let url = 'http://qiita.com/api/v2/items/' + articleId
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
		}).catch(function (reason) {
			// console.log('ok');
		});

	};
}

export function fetchList({queries},content) {
	return dispatch => {

		console.log(queries);

		let queryArray = {
			query: `qiita+${queries.type}:${queries.q}`,
			page: queries.page
		}

		console.log(queryArray);

		const aricleList = () => {
			return new Promise((resolve, reject) => {

				let query = qs.stringify(queryArray);
				let url = '/api/?' + decodeURIComponent(query);

				request
					.get(url)
					.withCredentials()
					.end((err, res) => {
						console.log(res.body)
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
			dispatch(returnRequest(result));
		}).catch(function (reason) {
			// console.log('ok');
		});

	};
}

export function scrollTop() {
	window.scrollTo(0, 0);
}


export const SUCCESS_ARTICLE_REQUESR = 'SUCCESS_ARTICLE_REQUESR'
export function returnArticleRequest(result) {
	// console.log(data)
	return {
		type: SUCCESS_ARTICLE_REQUESR,
		result
	}
}

export const CHANGE_PAGE_NUM = 'CHANGE_PAGE_NUM'
export function pageNumChange(currentPageNum) {
	return {
		type: CHANGE_PAGE_NUM,
		currentPageNum: parseInt(currentPageNum)+1
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
	console.log(searchType);
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
