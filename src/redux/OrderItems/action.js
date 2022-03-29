// @flow

import {
  SET_ORDERITEM_REQUEST,
  SET_ORDERITEM_SUCCESS,
  ORDERITEM_INFO_REQUEST,
  ORDERITEM_INFO_SUCCESS,
} from './constant';

export function setOrderItemRequest(orderItems: OrderItemsDetails): OrderItemsRequestType {
  return {
    type: SET_ORDERITEM_REQUEST,
    payload: { orderItems },
  };
}

export function setOrderItemsSuccess(isOrderItemSuccess: boolean): SetOrderItemsSuccessType {
  return {
    type: SET_ORDERITEM_SUCCESS,
    payload: { isOrderItemSuccess },
  };
}

export function orderItemInfoRequest(): OrderItemInfoRequestType {
  return {
    type: ORDERITEM_INFO_REQUEST,
  };
}

export function orderItemInfoSuccess(orderItemInfo: OrderItemInfoType): OrderItemInfoSuccessType {
  return {
    type: ORDERITEM_INFO_SUCCESS,
    payload: orderItemInfo,
  };
}
