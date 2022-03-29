// @flow

import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { makePostRequest, makeGetRequest } from 'services/networking/request';
import { customerInfoSuccess, setCustomerSuccess, setErrorMessage } from './action';
import { SET_CUSTOMER_REQUEST, CUSTOMER_INFO_REQUEST, UPLOAD_REQUEST } from './constant';

export function* setCustomerRequest(orderManagment): Saga<*> {
  console.log(orderManagment,'saga1111');
  try {
    const {
      payload: { userData },
    } = orderManagment;
    console.log(orderManagment.payload[0],'ooooooooo')
    const response = yield call(makePostRequest, `/customers`, { ...orderManagment.payload[0] });
    const json = yield response.json();
    if (json.error) {
      throw new Error(json.error.statusCode);
    }
    yield put(setCustomerSuccess(true));
    yield put(setErrorMessage('storeCreationError', null));
  } catch (error) {
    let message = 'Something Went Wrong!';
    switch (+error.statusCode) {
      case 401:
        message = 'Oops! Unauthorize access. Please contact your admin.';
        break;
      case 403:
        message = 'Please verify your email address!';
        break;
      case 404:
        message = 'Email does not exists!';
        break;
      default:
        break;
    }
    yield put(setErrorMessage('loginError', message));
  }
}

export function* customerInfoRequest(): Saga<*> {
  try {
    const response = yield call(makeGetRequest, `/customers`);
    if (response.statusCode === 200) {
      yield put(customerInfoSuccess(response.body));
    }
  } catch (err) {
    // console.error(err)
  }
}

export default function* entitySagas(): Saga<*> {
  // yield takeEvery(SET_CUSTOMER_REQUEST, setCustomerRequest);
  yield takeEvery(UPLOAD_REQUEST, setCustomerRequest);
  yield takeEvery(CUSTOMER_INFO_REQUEST, customerInfoRequest);
}
