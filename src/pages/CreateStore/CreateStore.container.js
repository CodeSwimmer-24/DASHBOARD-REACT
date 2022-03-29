import { connect } from 'react-redux';

import { createStoreRequest } from 'redux/Stores/action';
import { getStoreOwners } from 'redux/User/selector';
import { fetchStoreOwnerRequest } from 'redux/User/action';
import CreateStore from './CreateStore.component';
import type { StatePropsType, DispatchPropsType } from './CreateStore.component';

const mapStateToProps = (state: StoreType): StatePropsType => ({
  storeOwners: getStoreOwners(state),
});

const mapDispatchToProps = (dispatch: Function): DispatchPropsType => ({
  createStoreRequest: store => dispatch(createStoreRequest(store)),
  fetchStoreOwners: () => dispatch(fetchStoreOwnerRequest()),
});

export default (connect(mapStateToProps, mapDispatchToProps)(CreateStore): any);
