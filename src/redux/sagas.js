// @flow
import { all } from "redux-saga/effects"; // eslint-disable-line
import type { Saga } from 'redux-saga';

import { sagas as accountSagas } from './Account';
import { sagas as storeSagas } from './Stores';
import { sagas as orderSagas } from './CreateCustomer';
import { sagas as userSagas } from './User';
import { sagas as orderAddress } from './OrderAddress';
import { sagas as orderItems } from './OrderItems';
import { sagas as orderManagment } from './OrderManagment';

const sagas = () => {
  return [
    accountSagas(),
    storeSagas(),
    userSagas(),
    orderSagas(),
    orderAddress(),
    orderItems(),
    orderManagment(),
  ];
};

// single entry point to start all Sagas at once
export default function* rootSaga(): Saga<*> {
  // $FlowFixMe
  yield all(sagas());
}
