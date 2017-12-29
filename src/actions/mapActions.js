import * as types from './actionTypes';

export function saveRange(distance) {
  return {type: types.UPDATE_RANGE, distance};
}

export function toggleMenu(toggleState) {
  return {type: types.MENU_TOGGLED, toggleState};
}
