'use strict';

const initialState = {
    detailContent: []
}

export default function article(state = initialState, action) {
    switch(action.type) {
        case 'DETAIL': {
            return Object.assign({}, state, {
                detailContent: action.text,
                })
            }
        default:
            return state
    }
}
