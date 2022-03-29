/* @flow */

import { SET_ADDRESS_REQUEST, SET_ADDRESS_SUCESS, ADDRESS_INFO_SUCCESS } from './constant';

const initialState = {
  addressSuccess: null,
};

export default function reducer(
  state: AddressStoreType = initialState,
  action: ActionType
): any | AddressStoreType {
  switch (action.type) {
    case SET_ADDRESS_SUCESS:
      return {
        ...state,
        addressSuccess: true,
      };
    case SET_ADDRESS_REQUEST:
      return {
        ...state,
        addressData: action.payload,
      };
    case ADDRESS_INFO_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        addresstInfo: payload,
      };
    }
    default:
      return state;
  }
}
