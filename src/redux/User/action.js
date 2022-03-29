// @flow

import {
  FETCH_STORE_OWNER_REQUEST,
  FETCH_STORE_OWNER_SUCCESS,
  SET_ERROR_MESSAGE,
  INVITE_USER_REQUEST,
  INVITE_USER_SUCCESS,
} from './constant';

export function setErrorMessage(errorType: string, message: ?string): SetErrorMessageActionType {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { errorType, message },
  };
}

export function inviteUserRequest(inviteUser: InviteUser): InviteUserRequestType {
  return {
    type: INVITE_USER_REQUEST,
    payload: { ...inviteUser },
  };
}

export function inviteUserSuccess(): any {
  return {
    type: INVITE_USER_SUCCESS,
    payload: {},
  };
}

export function fetchStoreOwnerRequest(): any {
  return {
    type: FETCH_STORE_OWNER_REQUEST,
    payload: {},
  };
}

export function fetchStoreOwnerSuccess(storeOwners: any[]): any {
  return {
    type: FETCH_STORE_OWNER_SUCCESS,
    payload: { storeOwners },
  };
}
