import {combineReducers} from 'redux';
import tasks from './taskReducer';
import ajaxCalls from './ajaxStatusReducer';

const rootReducer = combineReducers({
    tasks,
    ajaxCalls
});

export default rootReducer;