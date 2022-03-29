// @flow

import {
  ACCOUNT_INFO_REQUEST,
  SET_ERROR_MESSAGE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SEND_SET_PASSWORD,
  ACCOUNT_INFO_SUCCESS,
} from './constant';

export function setErrorMessage(errorType: string, message: ?string): SetErrorMessageActionType {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { errorType, message },
  };
}

export function userAuthentionRequest(credentials: LoginCredentials): UserAuthentionRequestType {
  return {
    type: LOGIN_REQUEST,
    payload: { credentials },
  };
}

export function userAuthentionSuccess(isLoginSucces: boolean): UserAuthentionSuccessType {
  return {
    type: LOGIN_SUCCESS,
    payload: { isLoginSucces },
  };
}

export function sendSetPasswordRequest(setPasswordForm: any): any {
  return {
    type: SEND_SET_PASSWORD,
    payload: { ...setPasswordForm },
  };
}

export function accountInfoRequest(): AccountInfoRequestType {
  return {
    type: ACCOUNT_INFO_REQUEST,
  };
}

export function accountInfoSuccess(accountInfo: AccountInfoType): AccountInfoSuccessType {
  return {
    type: ACCOUNT_INFO_SUCCESS,
    payload: accountInfo,
  };
}
