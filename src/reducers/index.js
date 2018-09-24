import {combineReducers} from 'redux';
import Tasks from './taskReducer';
import AjaxCalls from './ajaxStatusReducer';

const rootReducer = combineReducers({
    Tasks,
    AjaxCalls
});

export default rootReducer;