import React from 'react';
import AsyncSelect, { Option } from 'react-select/async';
import PropTypes from 'prop-types';
import styles from 'components/SuiSelect/styles';

function SelectField({ field, form, success, error, storeOwners, ...rest }) {
  const filterUsers = (inputValue: string) => {
    return storeOwners.filter(user => user.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions = (inputValue: string) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterUsers(inputValue));
      }, 1000);
    });
  return (
    <AsyncSelect
      name={field.name}
      loadOptions={loadOptions}
      defaultOptions
      cacheOptions
      onChange={(option: Option) => {
        form.setFieldValue(field.name, option.value);
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
  storeOwners: PropTypes.objectOf(Array).isRequired,
};

export default SelectField;
