import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rangeReducer(state = initialState.distance, action) {
  switch (action.type) {
    case types.UPDATE_RANGE:
      return action.distance;
    default:
      return state;
  }
}
