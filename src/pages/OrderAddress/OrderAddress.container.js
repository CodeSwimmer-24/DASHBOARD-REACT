/* @flow */
import { connect } from 'react-redux';
import { addDataRequest } from 'redux/OrderManagment/action';

import { setAddressRequest } from '../../redux/OrderAddress/action';

import OrderAddress from './OrderAddress.component';

const mapStateToProps = (state: StoreType) => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  setAddressRequest: addressData => dispatch(addDataRequest(addressData)),
});

export default (connect(mapStateToProps, mapDispatchToProps)(OrderAddress): any);
