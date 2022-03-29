/* @flow */
import { connect } from 'react-redux';

import { addDataRequest } from 'redux/OrderManagment/action';
import CreateOrder from './CreateOrder.component';

// import { setCustomerRequest } from '../../redux/CreateCustomer/action';

const mapStateToProps = (state: StoreType) => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  setCustomerRequest: userData => dispatch(addDataRequest(userData)),
});

export default (connect(mapStateToProps, mapDispatchToProps)(CreateOrder): any);
