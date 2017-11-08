import { combineReducers } from 'redux';
import courses from './agencyReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
