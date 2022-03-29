// @flow

import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { makePostRequest, makeGetRequest } from 'services/networking/request';
import { addressInfoSuccess, setAddressSuccess } from './action';
import { SET_ADDRESS_REQUEST, ADDRESS_INFO_REQUEST } from './constant';
import { UPLOAD_REQUEST } from './constant';

export function* setAddressRequest(orderManagment): Saga<*> {
  console.log('SAGA2222');
  try {
    const {
      payload: { addressData },
    } = orderManagment;
    const response = yield call(makePostRequest, `/addresses`, { ...addressData[1] });
    const json = yield response.json();
    if (json.error) {
      throw new Error(json.error.statusCode);
    }
    yield put(setAddressSuccess(true));
  } catch (error) {
    // console.error(error);
  }
}

export function* addressInfoRequest(): Saga<*> {
  try {
    const response = yield call(makeGetRequest, `/addresses`);
    if (response.statusCode === 200) {
      yield put(addressInfoSuccess(response.body));
    }
  } catch (err) {
    // console.error(err)
  }
}

export default function* entitySagas(): Saga<*> {
  // yield takeEvery(SET_ADDRESS_REQUEST, setAddressRequest);
  // yield takeEvery(UPLOAD_REQUEST, setAddressRequest);
  yield takeEvery(ADDRESS_INFO_REQUEST, addressInfoRequest);
}
