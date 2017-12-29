import { combineReducers } from 'redux';
import agencies from './agencyReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  agencies,
  distance: mapReducer
});

export default rootReducer;
