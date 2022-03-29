/* @flow */
import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import Cookies from 'js-cookie';
import { ACCOUNT_INFO_REQUEST, LOGIN_REQUEST, SEND_SET_PASSWORD } from './constant';
import { userAuthentionSuccess, setErrorMessage, accountInfoSuccess } from './action';
import { makeGetRequest, makePostRequest } from '../../services/networking/request';
import getEnvironmentVariables from '../../services/getEnvironmentVariables';

const HOST = getEnvironmentVariables('REACT_APP_HOST');

export function* loginRequest(loginRequestPayload: UserAuthentionRequestType): Saga<*> {
  try {
    const {
      payload: { credentials },
    } = loginRequestPayload;
    const response = yield call(makePostRequest, `/users/login`, credentials);
    Cookies.set('auth', response.body.token, {
      expires: new Date(response.body.expiry * 1000),
      domain: HOST,
    });
    yield put(userAuthentionSuccess(true));
    yield put(setErrorMessage('accountInfoError', null));
    yield put(setErrorMessage('loginError', null));
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

export function* sendSetPasswordRequest(setPasswordForm: any): Saga<*> {
  try {
    const {
      payload: { password },
    } = setPasswordForm;
    // TO-DO: Implement API.
    // eslint-disable-next-line no-console
    console.log(password);
    yield put(setErrorMessage('sendSetPassword', null));
  } catch (err) {
    yield put(setErrorMessage('sendSetPassword', err.message));
  }
}

export function* accountInfoRequest(): Saga<*> {
  try {
    const response = yield call(makeGetRequest, `/users/account-info`);
    if (response.statusCode === 200) {
      yield put(accountInfoSuccess(response.body));
    }
  } catch (err) {
    yield put(setErrorMessage('accountInfoError', err.message));
  }
}

export default function* entitySagas(): Saga<*> {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
  yield takeEvery(SEND_SET_PASSWORD, sendSetPasswordRequest);
  yield takeEvery(ACCOUNT_INFO_REQUEST, accountInfoRequest);
}
