import * as Yup from 'yup';
import checkout from './form';

const {
  formField: { name, addressLine1, addressLine2, state, city, postalCode, userId },
} = checkout;

export default Yup.object().shape({
  [name.name]: Yup.string().required(name.errorMsg),
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
  [userId.name]: Yup.string()
    .max(255)
    .required(userId.errorMsg),
});
