import { combineReducers } from 'redux';
import profileReducer from './home/reducer';

export default combineReducers({
    home: profileReducer
});
