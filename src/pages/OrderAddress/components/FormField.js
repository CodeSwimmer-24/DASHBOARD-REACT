import PropTypes from 'prop-types';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import SuiInput from 'components/SuiInput';
import { ErrorMessage, Field } from 'formik';
import AddressAutoComplete from './AddressAutoComplete';

function FormField({ label, name, type, ...rest }) {
  return (
    <>
      <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <SuiTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      {type !== 'select' ? (
        <Field {...rest} name={name} as={SuiInput} />
      ) : (
        <Field {...rest} name={name} component={name === 'userId' ? null : AddressAutoComplete} />
      )}
      <SuiBox mt={0.75}>
        <SuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </SuiTypography>
      </SuiBox>
    </>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
