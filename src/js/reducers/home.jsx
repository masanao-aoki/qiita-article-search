'use strict';

const initialState = {
	content: [],
	pageParams: {
		searchValue: '',
		searchType: '',
		currentPageNum: 1
	}

}

export default function home(state = initialState, action) {
	switch(action.type) {
		case 'CHANGE_SEARCH_VALUE': {
			return Object.assign({}, state, {
					pageParams: Object.assign({}, state.pageParams, {
						searchValue: action.searchValue
					})}
				)
			}
		case 'CHANGE_SEARCH_TYPE': {
			console.log(action)
			return Object.assign({}, state, {
					pageParams: Object.assign({}, state.pageParams, {
						searchType: action.searchType
					})}
				)
			}
		case 'SUCCESS_AJAX_REQUESR': {
			return Object.assign({}, state, {
				content: action.result,
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
