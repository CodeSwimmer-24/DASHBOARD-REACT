// @flow

export function setOrderItemSelector(state: StoreType, component: string): any {
  return state[component];
}

export default { setOrderItemSelector };
