// @flow

export function setErrorMessageSelector(state: StoreType, component: string): any {
  return state.shop[component];
}

export function setSuccessMessageSelector(state: StoreType, component: string): any {
  return state.shop[component];
}

const selectors = {
  setErrorMessageSelector,
  setSuccessMessageSelector,
};

export default selectors;
