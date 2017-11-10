import * as types from './actionTypes';

export function saveAgency(agency) {
  return {type: types.ADD_AGENCY, agency};
}

export function deleteAgency(agencyTitle) {
  return {type: types.DELETE_AGENCY, agencyTitle};
}
