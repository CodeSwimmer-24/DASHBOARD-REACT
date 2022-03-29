/* @flow */

import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { makePostRequest, makeGetRequest } from 'services/networking/request';
import { orderItemInfoSuccess, setOrderItemsSuccess } from './action';
import { SET_ORDERITEM_REQUEST, ORDERITEM_INFO_REQUEST } from './constant';

export function* setOrderItemRequest(orderItemsPayload: OrderItemsRequestType): Saga<*> {
  try {
    const {
      payload: { orderItems },
    } = orderItemsPayload;
    const response = yield call(makePostRequest, `/order-items`, { ...orderItems });
    const json = yield response.json();
    if (json.error) {
      throw new Error(json.error.statusCode);
    }
    yield put(setOrderItemsSuccess(true));
  } catch (error) {
    // console.log(error);
  }
}

export function* orderItemInfoRequest(): Saga<*> {
  try {
    const response = yield call(makeGetRequest, `/order-items`);
    if (response.statusCode === 200) {
      yield put(orderItemInfoSuccess(response.body));
    }
  } catch (err) {
    // console.error(err)
  }
}

export default function* entitySagas(): Saga<*> {
  yield takeEvery(SET_ORDERITEM_REQUEST, setOrderItemRequest);
  yield takeEvery(ORDERITEM_INFO_REQUEST, orderItemInfoRequest);
}
