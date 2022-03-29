/* @flow */

import { SET_ORDERITEM_REQUEST, SET_ORDERITEM_SUCCESS, ORDERITEM_INFO_SUCCESS } from './constant';

const initialState = {
  orderItemSuccess: null,
};

export default function reducer(
  state: OrderItemsStoreType = initialState,
  action: ActionType
): any | OrderItemsStoreType {
  switch (action.type) {
    case SET_ORDERITEM_SUCCESS:
      return {
        ...state,
        orderItemSuccess: true,
      };
    case SET_ORDERITEM_REQUEST:
      return {
        ...state,
        orderItems: action.payload,
      };
    case ORDERITEM_INFO_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        orderItemInfo: payload,
      };
    }
    default:
      return state;
  }
}
