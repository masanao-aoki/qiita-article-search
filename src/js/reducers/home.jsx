'use strict';

const initialState = {
    content: [],
    searchValue: '',
    currentPageNum: 1
}

export default function home(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_SEARCH_VALUE': {
            return Object.assign({}, state, {
                searchValue: action.searchValue
                })
            }
        case 'SUCCESS_AJAX_REQUESR': {
            return Object.assign({}, state, {
                content: action.result,
                })
            }
        case 'CHANGE_PAGE_NUM': {
            return Object.assign({}, state, {
                currentPageNum: action.currentPageNum,
                })
            }
        default:
            return state
    }
}
