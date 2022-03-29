// @flow

export function setCustomerSelector(state: StoreType, component: string): any {
  return state[component];
}

export function setErrorMessageSelector(state: StoreType, component: string): any {
  return state.account[component];
}

export default {
  setCustomerSelector,
  setErrorMessageSelector,
};
