import checkout from './form';

const {
  formField: { name, addressLine1, addressLine2, state, city, postalCode, location, userId },
} = checkout;

export default {
  [name.name]: '',
  [addressLine1.name]: '',
  [addressLine2.name]: '',
  [state.name]: '',
  [city.name]: '',
  [postalCode.name]: '',
  [location.name]: '',
  [userId.name]: '',
};
