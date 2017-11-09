import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_AGENCY:
      return [...state, Object.assign({}, action.agency)];
    case types.DELETE_AGENCY:
      return [...state].filter(agency => agency.title != action.agencyTitle);
    default:
      return state; // fdfsfdfdfdsfds
  }
}
