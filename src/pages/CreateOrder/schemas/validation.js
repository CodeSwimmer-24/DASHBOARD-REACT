import * as Yup from 'yup';
import checkout from './form';

const {
  formField: { email, phoneNumber },
} = checkout;

export default Yup.object().shape({
  [email.name]: Yup.string()
    .required(email.errorMsg)
    .email(email.invalidMsg),
  [phoneNumber.name]: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required(phoneNumber.errorMsg)
    .min(10, 'Phone number is to short')
    .max(10, 'Phone number is to long'),
});
