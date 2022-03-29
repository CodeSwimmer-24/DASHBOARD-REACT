import React from 'react';
import Select, { Option } from 'react-select';
import PropTypes from 'prop-types';
import styles from 'components/SuiSelect/styles';

function SelectField({ options, field, form, success, error, ...rest }) {
  return (
    <Select
      options={options}
      name={field.name}
      value={options ? options.find(option => option.value === field.value) : ''}
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
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  field: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SelectField;
