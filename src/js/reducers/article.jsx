'use strict';

const initialState = {
    detailContent: [],
	loadingState: true
}

export default function article(state = initialState, action) {
    switch(action.type) {
        case 'SUCCESS_LOADING_COMPLATE': {
            return Object.assign({}, state, {
                loadingState: action.loadingState
            })
        }
        case 'SUCCESS_ARTICLE_REQUESR': {
            return Object.assign({}, state, {
                detailContent: action.result
                })
            }
        default:
            return state
    }
}
