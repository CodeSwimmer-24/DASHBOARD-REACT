import checkout from './form';

const {
  formField: { addressLine1, addressLine2, state, city, postalCode, location },
} = checkout;

export default {
  [addressLine1.name]: '',
  [addressLine2.name]: '',
  [state.name]: '',
  [city.name]: '',
  [postalCode.name]: '',
  [location.name]: '',
};
