import except from 'expect';
import taskReducer from './taskReducer';
import * as actions from '../actions/taskActions';

describe('Task reducer', () => {
    const initialState = {
        tasks: [
            {
                name: 'Test task',
                done:false
            }
        ],
        ajaxCallsInProgress:0
    };

    it('should add task to state when passed CREATE_TASK_SUCCESS', () => {
        const newTask = {
            task: {
                name:'New test task', done: false
            }
        };
        const action = actions.taskCreateSuccess(newTask);

        const newState = taskReducer(initialState.tasks, action);
        except(newState.length).toEqual(2);
    });
});