import * as Yup from 'yup';
import checkout from './form';

const {
  formField: { addressLine1, addressLine2, state, city, postalCode },
} = checkout;

export default Yup.object().shape({
  [addressLine1.name]: Yup.string()
    .max(255)
    .required(addressLine1.errorMsg),
  [addressLine2.name]: Yup.string()
    .max(255)
    .required(addressLine2.errorMsg),
  [state.name]: Yup.string()
    .max(255)
    .required(state.errorMsg),
  [city.name]: Yup.string()
    .max(255)
    .required(city.errorMsg),
  [postalCode.name]: Yup.string()
    .max(255)
    .required(postalCode.errorMsg),
});
