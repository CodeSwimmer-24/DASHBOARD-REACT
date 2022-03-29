import React from 'react';
import AsyncSelect, { Option } from 'react-select/async';
import PropTypes from 'prop-types';
import styles from 'components/SuiSelect/styles';
import GoogleMapsSearch from 'services/address/GoogleMapsSearch';

function SelectField({ field, form, autofileAddressFields, success, error, ...rest }) {
  const googleMapsSearch = new GoogleMapsSearch();
  const filterAddress = addresses => {
    return (
      addresses.length > 0 &&
      addresses.map(address => {
        return {
          label: address.description,
          value: address.placeId,
        };
      })
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise(resolve => {
      setTimeout(() => {
        inputValue.length > 0 &&
          googleMapsSearch.search(inputValue, address => resolve(filterAddress(address)));
      }, 1000);
    });
  return (
    <AsyncSelect
      loadOptions={promiseOptions}
      name={field.name}
      onChange={(option: Option) => {
        googleMapsSearch.gecode(option.value, address => {
          form.setFieldValue(field.name, option.label);
          autofileAddressFields(address, form.setFieldValue);
        });
      }}
      onBlur={field.onBlur}
      styles={styles('medium', error, success)}
    />
  );
}

SelectField.defaultProps = {
  error: false,
  success: false,
};

// typechecking props for FormField
SelectField.propTypes = {
  field: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  error: PropTypes.bool,
  success: PropTypes.bool,
  autofileAddressFields: PropTypes.func.isRequired,
};

export default SelectField;
