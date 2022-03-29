/* @flow */

import { CREATE_STORE_SUCCESS, SET_ERROR_MESSAGE } from './constant';

const initialState = {
  storeCreationError: null,
};

export default function reducer(
  state: ShopStoreType = initialState,
  action: ActionType
): any | ShopStoreType {
  switch (action.type) {
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        storeCreationError: true,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        [action.payload.errorType]: action.payload.message,
      };
    default:
      return state;
  }
}
