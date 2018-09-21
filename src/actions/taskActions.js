import * as types from './actionTypes';

export function createTask(task) {
    return {type:types.CREATE_TASK, task:task};
}

export function removeTask(index) {
    return {type:types.REMOVE_TASK, index:index};
}