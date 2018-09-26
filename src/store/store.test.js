import except from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as taskActions from '../actions/taskActions';

describe('Store tests', () => {
    it('should add a task', () => {
        const store = createStore(rootReducer, initialState);
        const task = {
            task: {
                name: 'Test task',
                done: false
            }
        };
        const action = taskActions.taskCreateSuccess(task);
        store.dispatch(action);
        const actual = store.getState().tasks[0];
        const excepted = {
            name: 'Test task',
            done: false
        };
        except(actual).toEqual(excepted);
    });
});