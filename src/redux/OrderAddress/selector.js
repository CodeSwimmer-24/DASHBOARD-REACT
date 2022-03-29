// @flow

export function setAddressSelector(state: StoreType, component: string): any {
  return state[component];
}

export default {
  setAddressSelector,
};
