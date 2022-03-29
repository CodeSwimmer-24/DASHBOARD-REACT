/* @flow */
import { takeEvery, put, call } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { CREATE_STORE_REQUEST } from './constant';
import { createStoreSuccess, setErrorMessage } from './action';
import { makePostRequest } from '../../services/networking/request';

export function* createStoreRequest(storeCreatePayload: StoreCreationType): Saga<*> {
  try {
    const {
      payload: { name, addressLine1, addressLine2, city, state, postalCode, location, userId },
    } = storeCreatePayload;
    const response = yield call(makePostRequest, `/addresses`, {
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      location,
    });
    if (response.statusCode === 200) {
      yield call(makePostRequest, `/stores`, {
        name,
        addressId: response.body.id,
        userId,
      });
    }
    yield put(createStoreSuccess(true));
    yield put(setErrorMessage('storeCreationError', null));
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
    yield put(setErrorMessage('storeCreationError', message));
  }
}

export default function* entitySagas(): Saga<*> {
  yield takeEvery(CREATE_STORE_REQUEST, createStoreRequest);
}
