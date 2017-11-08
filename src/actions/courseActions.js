import * as types from './actionTypes';

export function saveAgency(agency) {
  return {type: types.ADD_AGENCY, agency};
}
