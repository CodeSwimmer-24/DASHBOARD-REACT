// @flow

export function setErrorMessageSelector(state: StoreType, component: string): any {
  return state.account[component];
}

export function setSuccessMessageSelector(state: StoreType, component: string): any {
  return state.account[component];
}

export function getAccountInfo(state: StoreType): ?AccountInfoType {
  return state.account.accountInfo || null;
}

export function getRoles(state: StoreType): Array<string> {
  const accountInfo = getAccountInfo(state);
  return accountInfo && accountInfo.roles ? accountInfo.roles : [];
}

const selectors = {
  setErrorMessageSelector,
  setSuccessMessageSelector,
};

export default selectors;
