import except from 'expect';
import * as taskActions from './taskActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Task actions tests', () => {
    it('New task action', () => {
        const task = {name: 'new test task', done: false};
        const exceptedAction = {
            type: types.CREATE_TASK_SUCCESS,
            task: task
        };

        const action = taskActions.taskCreateSuccess(task);
        except(action).toEqual(exceptedAction);
    });
    it('Update task action', () => {
        const tasks = [{name: 'new test task', done: true}];
        const exceptedAction = {
            type: types.UPDATE_TASK_SUCCESS,
            tasks: tasks
        };

        const action = taskActions.updateTaskSuccess(tasks);
        except(action).toEqual(exceptedAction);
    });
    it('Delete task action', () => {
        const tasks = [{name: 'new test task', done: true}];
        const exceptedAction = {
            type: types.REMOVE_TASK_SUCCESS,
            tasks: tasks
        };

        const action = taskActions.removeTaskSuccess(tasks);
        except(action).toEqual(exceptedAction);
    });
    it('List task action', () => {
        const tasks = [{name: 'new test task', done: true}];
        const exceptedAction = {
            type: types.LOAD_TASKS_SUCCESS,
            tasks: tasks
        };

        const action = taskActions.taskListSuccess(tasks);
        except(action).toEqual(exceptedAction);
    });
});

describe('Task thunk tests', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_TASKS_SUCCESS when loading tasks', (done) => {
        const exceptedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_TASKS_SUCCESS,tasks: [{name: 'Test task', done: false}]}
        ];
        const store = mockStore({tasks:[]}, exceptedActions);
        store.dispatch(taskActions.loadTasks()).then(tasks => {
            const actions = store.getActions();
            except(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            except(actions[1].type).toEqual(types.LOAD_TASKS_SUCCESS);
            done();
        });
    });
});