'use strict';

const initialState = {
	content: [],
	requestState: false,
	pageParams: {
		searchValue: '',
		searchType: '',
		currentPageNum: 1
	},
	loadingState: true,
	nextPageState: true
}

export default function home(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_NEXT_PAGE_FLAG': {
			return Object.assign({}, state, {
				nextPageState: action.nextPageFlg
			});
		}
		case 'SUCCESS_LOADING_COMPLATE': {
			return Object.assign({}, state, {
				loadingState: action.loadingState
			});
		}
		case 'CHANGE_SEARCH_VALUE': {
			return Object.assign({}, state, {
					pageParams: Object.assign({}, state.pageParams, {
						searchValue: action.searchValue
					})}
				)
			}
		case 'CHANGE_SEARCH_TYPE': {
			return Object.assign({}, state, {
					pageParams: Object.assign({}, state.pageParams, {
						searchType: action.searchType
					})}
				)
			}
		case 'SUCCESS_AJAX_REQUESR': {
			return Object.assign({}, state, {
				content: action.result
				})
			}
		case 'FAIL_AJAX_REQUESR': {
			return Object.assign({}, state, {
				requestState: action.requestState
				})
			}
		case 'CHANGE_PAGE_NUM': {
			return Object.assign({}, state, {
					pageParams: Object.assign({}, state.pageParams, {
						currentPageNum: action.currentPageNum,
					})}
				)
			}
		default:
			return state
	}
}
