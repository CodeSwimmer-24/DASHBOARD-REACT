/* @flow */

import { LOGIN_SUCCESS, SET_ERROR_MESSAGE, LOGIN_REQUEST, ACCOUNT_INFO_SUCCESS } from './constant';

const initialState = {
  loginSuccess: false,
  accountInfo: {
    id: '',
    firstname: '',
    lastname: '',
    roles: [],
    store: {
      id: '',
      name: '',
    },
  },
  accountInfoError: null,
};

export default function reducer(
  state: AccountStoreType = initialState,
  action: ActionType
): any | AccountStoreType {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        credentials: action.payload,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        [action.payload.errorType]: action.payload.message,
      };
    case ACCOUNT_INFO_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        accountInfo: payload,
      };
    }
    default:
      return state;
  }
}
