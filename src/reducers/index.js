import { combineReducers } from 'redux';
import agencies from './agencyReducer';

const rootReducer = combineReducers({
  agencies
});

export default rootReducer;
