/* @flow */

import { INVITE_USER_SUCCESS, SET_ERROR_MESSAGE, FETCH_STORE_OWNER_SUCCESS } from './constant';

const initialState = {
  isInviteSuccess: null,
  storeOwners: null,
};

export default function reducer(
  state: UserStoreType = initialState,
  action: ActionType
): any | UserStoreType {
  switch (action.type) {
    case INVITE_USER_SUCCESS:
      return {
        ...state,
        isInviteSuccess: true,
      };
    case FETCH_STORE_OWNER_SUCCESS: {
      const {
        payload: { storeOwners },
      } = action;
      return {
        ...state,
        storeOwners,
      };
    }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        [action.payload.errorType]: action.payload.message,
      };
    default:
      return state;
  }
}
