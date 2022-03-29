// @flow

import {
  DIRECTION,
  FIXED_NAVBAR,
  LAYOUT,
  MINI_SIDENAV,
  OPEN_CONFIGURATOR,
  SIDENAV_COLOR,
  TRANSPARENT_NAVBAR,
  TRANSPARENT_SIDENAV,
} from './constant';

const initialState = {
  miniSidenav: false,
  transparentSidenav: true,
  sidenavColor: 'info',
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  direction: 'ltr',
  layout: 'dashboard',
};

export default function reducer(
  state: ThemeStoreType = initialState,
  action: ActionType
): any | ThemeStoreType {
  switch (action.type) {
    case MINI_SIDENAV: {
      return { ...state, miniSidenav: action.value };
    }
    case TRANSPARENT_SIDENAV: {
      return { ...state, transparentSidenav: action.value };
    }
    case SIDENAV_COLOR: {
      return { ...state, sidenavColor: action.value };
    }
    case TRANSPARENT_NAVBAR: {
      return { ...state, transparentNavbar: action.value };
    }
    case FIXED_NAVBAR: {
      return { ...state, fixedNavbar: action.value };
    }
    case OPEN_CONFIGURATOR: {
      return { ...state, openConfigurator: action.value };
    }
    case DIRECTION: {
      return { ...state, direction: action.value };
    }
    case LAYOUT: {
      return { ...state, layout: action.value };
    }
    default: {
      return state;
    }
  }
}
