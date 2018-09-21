import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_TASK:
            return [...state, Object.assign({},action.task)];

        default:
            return state;
    }
}