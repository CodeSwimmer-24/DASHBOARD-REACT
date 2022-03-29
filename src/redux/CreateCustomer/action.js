// @flow

import {
  SET_CUSTOMER_SUCESS,
  SET_CUSTOMER_REQUEST,
  SET_ERROR_MESSAGE,
  CUSTOMER_INFO_REQUEST,
  CUSTOMER_INFO_SUCCESS,
} from './constant';

export function setCustomerRequest(userData: UserData): CreateCustomerRequestType {
  return {
    type: SET_CUSTOMER_REQUEST,
    payload: { userData },
  };
}

export function setCustomerSuccess(isCustomerSuccess: boolean): SetCustomerSuccessType {
  return {
    type: SET_CUSTOMER_SUCESS,
    payload: { isCustomerSuccess },
  };
}

export function customerInfoRequest(): CustomerInfoRequestType {
  return {
    type: CUSTOMER_INFO_REQUEST,
  };
}

export function customerInfoSuccess(customerInfo: CustomerInfoType): CustomerInfoSuccessType {
  return {
    type: CUSTOMER_INFO_SUCCESS,
    payload: customerInfo,
  };
}

export function setErrorMessage(errorType: string, message: ?string): SetErrorMessageActionType {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { errorType, message },
  };
}
