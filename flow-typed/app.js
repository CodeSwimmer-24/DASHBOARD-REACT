// @flow

declare type LoginCredentials = {
  email: string,
  password: string,
};

declare type InviteUser = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  roles: string | Array<string>,
};

declare type CreateStore = {
  name: string,
  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  postalCode: string,
  location: string,
  userId: string,
};

declare type UserData = {
  email: string,
  phoneNumber: string,
  storesId: string,
};

declare type CustomerInfoType = {
  id: String,
  email: String,
  phoneNumber: String,
  storesId: String
}

declare type AddressDetails = {
  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  postalCode: string,
  location: {
    lat: Number,
    lng: Number,
  },
};

declare type AddressInfoType = {
  id:String,
  addressLine1:String,
  addressLine2:String,
  city:String,
  state:String,
  postalCode:String,
  location:{
    lat:Number,
    lng:Number,
  }
};

declare type OrderItemsDetails = {
  productId: string,
  quantities: Number,
  pricePerEach: Number,
};

declare type ShopInfoType = {
  id: string,
  name: string,
};

declare type AccountInfoType = {
  id: string,
  firstname: string,
  lastname: string,
  roles: Array<string>,
  store: ?ShopInfoType,
};

declare type AccountStoreType = {
  loginSuccess: boolean,
  accountInfo: AccountInfoType,
  accountInfoError: null | string,
};

declare type ShopStoreType = any;

declare type OrderItemInfoType = {
  id: String,
  productId: String,
  quantities: Number,
  pricePerEach: Number,
}


declare type UserStoreType = {
  isInviteSuccess: boolean | null,
  storeOwners: any,
};

declare type ThemeStoreType = {
  miniSidenav: boolean,
  transparentSidenav: boolean,
  sidenavColor: string,
  transparentNavbar: boolean,
  fixedNavbar: boolean,
  openConfigurator: boolean,
  direction: string,
  layout: string,
};

declare type CustomerStoreType = any;
declare type AddressStoreType = any;
declare type OrderItemsStoreType = any;

declare type StoreType = {
  account: AccountStoreType,
  theme: ThemeStoreType,
  customer: CustomerStoreType,
  address: AddressStoreType,
  orderItems: OrderItemsStoreType,
  user: UserStoreType,
  shop: ShopStoreType,
};
