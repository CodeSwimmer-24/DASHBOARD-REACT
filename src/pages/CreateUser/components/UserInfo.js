import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SuiBox from 'components/SuiBox';
import FormField from './FormFields';

function UserInfo({ formData }) {
  const { formField, values, errors, touched, handleChange } = formData;
  const { firstName, lastName, phoneNumber, email, roles } = formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    phoneNumber: phoneNumberV,
    email: emailV,
    roles: rolesV,
  } = values;
  return (
    <SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstNameV}
              placeholder={firstName.placeholder}
              error={errors.firstName && touched.firstName}
              success={firstNameV.length > 0 && !errors.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastNameV}
              placeholder={lastName.placeholder}
              error={errors.lastName && touched.lastName}
              success={lastNameV.length > 0 && !errors.lastName}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <FormField
              type={roles.type}
              label={roles.label}
              name={roles.name}
              options={roles.options}
              defaultValue={rolesV}
              placeholder={roles.placeholder}
              error={errors.roles && touched.roles}
              success={rolesV.length > 0 && !errors.role}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
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
