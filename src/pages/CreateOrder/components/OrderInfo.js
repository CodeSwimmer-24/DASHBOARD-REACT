import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SuiBox from 'components/SuiBox';
import FormField from './FormField';

function UserInfo({ formData }) {
  const { formField, values, errors, touched, handleChange } = formData;
  const { phoneNumber, email } = formField;
  const { phoneNumber: phoneNumberV, email: emailV } = values;
  return (
    <SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={phoneNumber.type}
              label={phoneNumber.label}
              name={phoneNumber.name}
              value={phoneNumberV}
              placeholder={phoneNumber.placeholder}
              error={errors.phoneNumber && touched.phoneNumber}
              success={phoneNumberV.length > 0 && !errors.phoneNumber}
              onChange={handleChange}
              maxLength={10}
            />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
