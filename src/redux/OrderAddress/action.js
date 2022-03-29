// @flow

import {
  SET_ADDRESS_REQUEST,
  SET_ADDRESS_SUCESS,
  ADDRESS_INFO_REQUEST,
  ADDRESS_INFO_SUCCESS,
} from './constant';

export function setAddressRequest(addressData: AddressDetails): CustomerAddressRequestType {
  return {
    type: SET_ADDRESS_REQUEST,
    payload: { addressData },
  };
}

export function setAddressSuccess(isAddressSuccess: boolean): SetAddressSuccessType {
  return {
    type: SET_ADDRESS_SUCESS,
    payload: { isAddressSuccess },
  };
}

export function addressInfoRequest(): AddressInfoRequestType {
  return {
    type: ADDRESS_INFO_REQUEST,
  };
}

export function addressInfoSuccess(addressInfo: AddressInfoType): AddressInfoSuccessType {
  return {
    type: ADDRESS_INFO_SUCCESS,
    payload: addressInfo,
  };
}
