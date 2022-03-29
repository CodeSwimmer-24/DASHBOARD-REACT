/* @flow */

import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { makePostRequest, makeGetRequest } from 'services/networking/request';
import { orderItemInfoSuccess, setOrderItemsSuccess } from './action';
import {
  SET_ORDERITEM_REQUEST,
  ORDERITEM_INFO_REQUEST,
  ADD_REQUEST,
  UPLOAD_REQUEST,
} from './constant';

export function* setOrderManagmentRequest(orderManagment): Saga<*> {
  console.log(orderManagment, 'ssssssssssssssssssss');
  try {
    const {
      payload: { data },
    } = orderManagment;
    console.log(orderManagment, 'dddddddddddd');
    const response = yield call();
    const json = yield response.json();
    if (json.error) {
      throw new Error(json.error.statusCode);
    }
    yield put();
  } catch (error) {
    // console.log(error);
  }
}

export default function* entitySagas(): Saga<*> {
  yield takeEvery(UPLOAD_REQUEST, setOrderManagmentRequest);
}
