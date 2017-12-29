import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.agencies, action) {
  switch (action.type) {
    case types.ADD_AGENCY:
      return [...state, Object.assign({}, action.agency)];
    case types.DELETE_AGENCY:
      return [...state].filter(agency => agency.title != action.agencyTitle);
    case types.MENU_TOGGLED:
      return [...state, Object.assign({}, action.toggleState)];
    default:
      return state;
  }
}
