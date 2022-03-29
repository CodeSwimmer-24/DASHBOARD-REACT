import { connect } from 'react-redux';
import { setOrderItemRequest } from 'redux/OrderItems/action';
import { uploadReq, addDataRequest } from '../../redux/OrderManagment/action';
import OrderItems from './OrderItems.component';

const mapStateToProps = (state: StoreType) => {
  return { allData: state.orderManagment };
};

const mapDispatchToProps = (dispatch: Function) => ({
  setOrderItemRequest: orderItems => dispatch(addDataRequest(orderItems)),
  setUploadRequest: data => dispatch(uploadReq(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);
