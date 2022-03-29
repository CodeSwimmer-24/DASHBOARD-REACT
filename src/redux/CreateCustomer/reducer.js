/* @flow */

import { SET_CUSTOMER_REQUEST, SET_CUSTOMER_SUCESS, CUSTOMER_INFO_SUCCESS } from './constant';

const initialState = {
  customerSuccess: null,
};

export default function reducer(
  state: CustomerStoreType = initialState,
  action: ActionType
): any | CustomerStoreType {
  switch (action.type) {
    case SET_CUSTOMER_SUCESS:
      return {
        ...state,
        customerSuccess: true,
      };
    case SET_CUSTOMER_REQUEST:
      return {
        ...state,
        userData: action.payload,
      };
    case CUSTOMER_INFO_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        customertInfo: payload,
      };
    }
    default:
      return state;
  }
}
