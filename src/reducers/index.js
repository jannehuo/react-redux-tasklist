import {combineReducers} from 'redux';
import Tasks from './taskReducer';

const rootReducer = combineReducers({
    Tasks
});

export default rootReducer;