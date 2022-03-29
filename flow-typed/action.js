// @flow

declare type UserAuthentionRequestType = {
  type: 'Account/LOGIN_REQUEST',
  payload: { credentials: LoginCredentials },
};

declare type InviteUserRequestType = {
  type: 'User/INVITE_USER_REQUEST',
  payload: InviteUser,
};

declare type CreateCustomerRequestType = {
  type: 'CUSTOMER/SET_CUSTOMER_REQUEST',
  payload: { userData: UserData },
};

declare type AccountInfoRequestType = {
  type: 'Account/ACCOUNT_INFO_REQUEST',
};

declare type AccountInfoSuccessType = {
  type: 'Account/ACCOUNT_INFO_SUCCESS',
  payload: AccountInfoType,
};

declare type CustomerInfoRequestType = {
  type: 'CUSTOMER/CUSTOMER_INFO_REQUEST',
}

declare type CustomerInfoSuccessType = {
  type: 'CUSTOMER/CUSTOMER_INFO_SUCCESS',
  payload: CustomerInfoType,
}

declare type CustomerAddressRequestType = {
  type: 'ADDRESS/SET_ADDRESS_REQUEST',
  payload: { addressData: AddressDetails },
};

declare type AddressInfoRequestType = {
  type: 'ADDRESS/ADDRESS_INFO_REQUEST',
};

declare type AddressInfoSuccessType = {
  type: 'ADDRESS/ADDRESS_INFO_SUCCESS',
  payload: AddressInfoType,
};

declare type OrderItemsRequestType = {
  type: 'ORDERITEM/SET_ORDERITEM_REQUEST',
  payload: { orderItems: OrderItemsDetails },
};

declare type OrderItemInfoRequestType = {
  type: 'ORDERITEM/ORDERITEM_INFO_REQUEST',
}

declare type OrderItemInfoSuccessType  = {
  type: 'ORDERITEM/ORDERITEM_INFO_SUCCESS',
  payload: OrderItemInfoType,
}

declare type StoreCreationType = {
  type: 'Store/CREATE_STORE_REQUEST',
  payload: CreateStore,
};

declare type SetErrorMessageActionType = any;
declare type UserAuthentionSuccessType = any;
declare type SetAddressSuccessType = any;
declare type SetOrderItemsSuccessType = any;
declare type SetCustomerSuccessType = any;
declare type ActionType =
  | UserAuthentionRequestType
  | UserAuthentionSuccessType
  | SetCustomerSuccessType
  | SetAddressSuccessType
  | SetOrderItemsSuccessType
  | SetErrorMessageActionType
  | any;
