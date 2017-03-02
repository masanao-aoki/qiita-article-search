'use strict';

const initialState = {
    detailContent: []
}

export default function article(state = initialState, action) {
    switch(action.type) {
        case 'SUCCESS_ARTICLE_REQUESR': {
            return Object.assign({}, state, {
                detailContent: action.result
                })
            }
        default:
            return state
    }
}
