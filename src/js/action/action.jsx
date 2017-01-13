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

export function fetchList({querys},content) {
	return dispatch => {

		let queryArray = {
			query: `qiita+title:${querys.q}`,
			page: querys.page
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
							let test = [...content, ...res.body];
							console.log(test);
							resolve(res.body);
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
		currentPageNum: parseInt(currentPageNum)
	}
}

const SUCCESS_AJAX_REQUESR = 'SUCCESS_AJAX_REQUESR'
export function returnRequest(result) {
	return {
		type: SUCCESS_AJAX_REQUESR,
		result
	}
}

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE'
export function valueChange(searchValue) {
	return {
		type: CHANGE_SEARCH_VALUE,
		searchValue
	}
}
