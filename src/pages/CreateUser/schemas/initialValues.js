import checkout from './form';

const {
  formField: { firstName, lastName, email, phoneNumber, roles },
} = checkout;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [phoneNumber.name]: '',
  [email.name]: '',
  [roles.name]: '',
};
