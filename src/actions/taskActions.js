import * as types from './actionTypes';
import taskApi from '../api/mockTaskApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function updateTaskSuccess(tasks) {
    return {type:types.UPDATE_TASK_SUCCESS, tasks};
}

export function taskListSuccess(tasks) {
    return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function taskCreateSuccess(task) {
    return {type:types.CREATE_TASK_SUCCESS, task};
}

export function removeTaskSuccess(tasks) {
    return {type:types.REMOVE_TASK_SUCCESS, tasks};
}

export function updateTask(index) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return taskApi.updateTask(index).then((tasks) => {
            dispatch(updateTaskSuccess(tasks));
        }).catch(err => {
            throw err;
        });
    };
}

export function removeTask(index) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return taskApi.deleteTask(index).then((tasks) => {
            dispatch(removeTaskSuccess(tasks));
        }).catch(err => {
            throw err;
        });
    };
}

export function loadTasks() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return taskApi.getAllTasks().then(taskList => {
            dispatch(taskListSuccess(taskList));
        }).catch(err => {
            throw err;
        });
    };
}

export function createTask(task) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return taskApi.saveTask(task).then(newTask => {
            dispatch(taskCreateSuccess(newTask));
        }).catch(err => {
            throw err;
        });
    };
}