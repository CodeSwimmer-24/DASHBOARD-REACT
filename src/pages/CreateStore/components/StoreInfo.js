import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SuiBox from 'components/SuiBox';
import FormField from './FormFields';

function StoreInfo({ formData }) {
  const { formField, values, errors, touched, handleChange, storeOwners } = formData;
  const { name, addressLine1, addressLine2, state, city, postalCode, location, userId } = formField;
  const {
    name: nameV,
    userId: userIdV,
    addressLine1: addressLine1V,
    addressLine2: addressLine2V,
    city: cityV,
    state: stateV,
    postalCode: postalCodeV,
    location: locationV,
  } = values;
  const autofileAddressFields = (address, setFieldValue) => {
    if (address.location) setFieldValue(location.name, address.location);
    if (address.city) setFieldValue(city.name, address.city);
    if (address.state) setFieldValue(state.name, address.state);
    if (address.postalCode) setFieldValue(postalCode.name, address.postalCode);
  };
  return (
    <SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              error={errors.name && touched.name}
              success={nameV.length > 0 && !errors.name}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={userId.type}
              label={userId.label}
              name={userId.name}
              value={userIdV}
              placeholder={userId.placeholder}
              error={errors.userId && touched.userId}
              success={userIdV.length > 0 && !errors.userId}
              onChange={handleChange}
              storeOwners={storeOwners.map(owner => {
                return {
                  label: `${owner.firstName} ${owner.lastName} (${owner.email})`,
                  value: owner.id,
                };
              })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={addressLine2.type}
              label={addressLine2.label}
              name={addressLine2.name}
              value={addressLine2V}
              placeholder={addressLine2.placeholder}
              error={errors.addressLine2 && touched.addressLine2}
              success={addressLine2V.length > 0 && !errors.addressLine2}
              autofileAddressFields={autofileAddressFields}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={addressLine1.type}
              label={addressLine1.label}
              name={addressLine1.name}
              value={addressLine1V}
              placeholder={addressLine1.placeholder}
              error={errors.addressLine1 && touched.addressLine1}
              success={addressLine1V.length > 0 && !errors.addressLine1}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={city.type}
              label={city.label}
              name={city.name}
              options={city.options}
              defaultValue={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={state.type}
              label={state.label}
              name={state.name}
              options={state.options}
              value={stateV}
              placeholder={state.placeholder}
              error={errors.state && touched.state}
              success={stateV.length > 0 && !errors.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={postalCode.type}
              label={postalCode.label}
              name={postalCode.name}
              value={postalCodeV}
              placeholder={postalCode.placeholder}
              error={errors.postalCode && touched.postalCode}
              success={postalCodeV.length > 0 && !errors.postalCode}
              onChange={handleChange}
            />
            <input type={location.type} name={location.name} value={locationV} />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for UserInfo
StoreInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default StoreInfo;
