import checkout from './form';

const {
  formField: { quantities, pricePerEach, productId },
} = checkout;

export default {
  [productId.name]: '',
  [pricePerEach.name]: '',
  [quantities.name]: '',
};
