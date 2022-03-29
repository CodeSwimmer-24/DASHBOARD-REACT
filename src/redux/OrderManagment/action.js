import { ADD_REQUEST, SET_ERROR_MESSAGE, UPLOAD_REQUEST } from './constant';

export function setErrorMessage(errorType: string, message: ?string): SetErrorMessageActionType {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { errorType, message },
  };
}

export function addDataRequest(data) {
  return {
    type: ADD_REQUEST,
    payload: data,
  };
}

export function uploadReq(data) {
  return {
    type: UPLOAD_REQUEST,
    payload: data
  };
}
