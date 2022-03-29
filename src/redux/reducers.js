// @flow

import { combineReducers, type Reducer } from 'redux';
import { reducer as account } from './Account';
import { reducer as theme } from './Theme';
import { reducer as store } from './Stores';
import { reducer as user } from './User';
import { reducer as orderAddress } from './OrderAddress';
import { reducer as order } from './CreateCustomer';
import { reducer as orderItem } from './OrderItems';
import { reducer as orderManagment } from './OrderManagment';

export default function createReducer(asyncReducers: { [string]: Reducer<*, *> }): any {
  return combineReducers({
    ...asyncReducers,
    account,
    theme,
    user,
    store,
    order,
    orderAddress,
    orderItem,
    orderManagment,
  });
}
