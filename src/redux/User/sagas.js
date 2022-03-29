/* @flow */
import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { makePostRequest, makeGetRequest } from 'services/networking/request';
import { INVITE_USER_REQUEST, FETCH_STORE_OWNER_REQUEST } from './constant';
import { inviteUserSuccess, setErrorMessage, fetchStoreOwnerSuccess } from './action';

export function* inviteUserRequest(inviteUserPayload: InviteUserRequestType): Saga<*> {
  try {
    const { payload } = inviteUserPayload;
    yield call(makePostRequest, `/users/signup`, { ...payload, roles: [payload.roles] });
    yield put(inviteUserSuccess());
    yield put(setErrorMessage('inviteError', null));
  } catch (error) {
    let message = 'Something Went Wrong!';
    switch (+error.statusCode) {
      case 400:
        message = 'Wrong password';
        break;
      case 401:
        message = 'Oops! Unauthorize access. Please contact your admin.';
        break;
      case 403:
        message = 'Please verify your email address!';
        break;
      case 404:
        message = 'Email does not exists!';
        break;
      case 422:
        message = 'Invalid email and password';
        break;
      default:
        break;
    }
    yield put(setErrorMessage('loginError', message));
  }
}

export function* fetchStoreOwnerRequest(inviteUserPayload: InviteUserRequestType): Saga<*> {
  try {
    const response = yield call(makeGetRequest, `/users/store-owners`);
    yield put(fetchStoreOwnerSuccess(response.body));
    yield put(setErrorMessage('fetchStoreOwnerError', null));
  } catch (error) {
    let message = 'Something Went Wrong!';
    switch (+error.statusCode) {
      case 400:
        message = 'Wrong password';
        break;
      case 401:
        message = 'Oops! Unauthorize access. Please contact your admin.';
        break;
      case 403:
        message = 'Please verify your email address!';
        break;
      case 404:
        message = 'Email does not exists!';
        break;
      case 422:
        message = 'Invalid email and password';
        break;
      default:
        break;
    }
    yield put(setErrorMessage('fetchStoreOwnerError', message));
  }
}
export default function* entitySagas(): Saga<*> {
  yield takeEvery(INVITE_USER_REQUEST, inviteUserRequest);
  yield takeEvery(FETCH_STORE_OWNER_REQUEST, fetchStoreOwnerRequest);
}
