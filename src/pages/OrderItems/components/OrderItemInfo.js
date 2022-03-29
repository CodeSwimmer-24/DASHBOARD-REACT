import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SuiBox from 'components/SuiBox';
import FormField from './FormField';

function StoreInfo({ formData }) {
  const { formField, values, errors, touched, handleChange } = formData;
  const { quantities, pricePerEach, productId } = formField;
  const { productId: productIdV, quantities: quantitiesV, pricePerEach: pricePerEachV } = values;
  return (
    <SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={productId.type}
              label={productId.label}
              name={productId.name}
              value={productIdV}
              placeholder={productId.placeholder}
              error={errors.productId && touched.productId}
              success={productIdV.length > 0 && !errors.productId}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={quantities.type}
              label={quantities.label}
              name={quantities.name}
              value={quantitiesV}
              placeholder={quantities.placeholder}
              error={errors.quantities && touched.quantities}
              success={quantitiesV.length > 0 && !errors.quantities}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={pricePerEach.type}
              label={pricePerEach.label}
              name={pricePerEach.name}
              value={pricePerEachV}
              placeholder={pricePerEach.placeholder}
              error={errors.pricePerEach && touched.pricePerEach}
              success={pricePerEachV.length > 0 && !errors.pricePerEach}
              onChange={handleChange}
            />
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
