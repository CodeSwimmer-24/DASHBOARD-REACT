// @flow

export function setErrorMessageSelector(state: StoreType, component: string): any {
  return state.user[component];
}

export function getStoreOwners(state: StoreType, component: string): any {
  return state.user.storeOwners ?? [];
}

const selectors = {
  setErrorMessageSelector,
  getStoreOwners,
};

export default selectors;
