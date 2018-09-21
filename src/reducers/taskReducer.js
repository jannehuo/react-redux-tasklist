import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_TASK:
            return [...state, Object.assign({},action.task)];
        case types.REMOVE_TASK:
            return [...state.slice(0,action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    }
}