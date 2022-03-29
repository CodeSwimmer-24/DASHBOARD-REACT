import checkout from './form';

const {
  formField: { email, phoneNumber, storesId },
} = checkout;

export default {
  [phoneNumber.name]: '',
  [email.name]: '',
  [storesId.name]: '',
};
