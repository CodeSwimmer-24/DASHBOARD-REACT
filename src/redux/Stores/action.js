// @flow

import { SET_ERROR_MESSAGE, CREATE_STORE_REQUEST, CREATE_STORE_SUCCESS } from './constant';

export function setErrorMessage(errorType: string, message: ?string): SetErrorMessageActionType {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { errorType, message },
  };
}

export function createStoreRequest(store: CreateStore): StoreCreationType {
  return {
    type: CREATE_STORE_REQUEST,
    payload: { ...store },
  };
}

export function createStoreSuccess(isLoginSucces: boolean): UserAuthentionSuccessType {
  return {
    type: CREATE_STORE_SUCCESS,
    payload: { isLoginSucces },
  };
}
