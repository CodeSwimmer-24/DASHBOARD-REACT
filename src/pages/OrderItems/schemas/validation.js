import * as Yup from 'yup';
import checkout from './form';

const {
  formField: { productId, quantities, pricePerEach },
} = checkout;

export default Yup.object().shape({
  [productId.name]: Yup.string().required(productId.errorMsg),
  [quantities.name]: Yup.string().required(quantities.errorMsg),
  [pricePerEach.name]: Yup.string().required(pricePerEach.errorMsg),
});
