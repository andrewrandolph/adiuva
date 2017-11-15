import * as types from './actionTypes';

export function generateMarkers(markers) {
  return {type: types.GENERATE_MARKERS, markers};
}

export function toggleMenu(toggleState) {
  return {type: types.MENU_TOGGLED, toggleState};
}
