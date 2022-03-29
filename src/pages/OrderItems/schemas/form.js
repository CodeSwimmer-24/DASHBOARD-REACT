export default {
  formId: 'new-store-form',
  formField: {
    productId: {
      name: 'productId',
      label: 'Product',
      type: 'text',
      placeholder: 'eg. product',
      errorMsg: 'Product is required!',
    },
    quantities: {
      name: 'quantities',
      label: 'Quantities',
      type: 'number',
      placeholder: 'eg. 00',
      errorMsg: 'Quantities is required!',
    },
    pricePerEach: {
      name: 'pricePerEach',
      label: 'PricePerEach',
      type: 'number',
      placeholder: 'eg. 0000',
    },
  },
};
