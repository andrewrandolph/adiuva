import * as types from './actionTypes';

export function saveRange(distance) {
  return {type: types.UPDATE_RANGE, distance};
}
