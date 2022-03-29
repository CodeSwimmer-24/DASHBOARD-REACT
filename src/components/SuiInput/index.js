import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SuiInputRoot from 'components/SuiInput/SuiInputRoot';
import SuiInputWithIconRoot from 'components/SuiInput/SuiInputWithIconRoot';
import SuiInputIconBoxRoot from 'components/SuiInput/SuiInputIconBoxRoot';
import SuiInputIconRoot from 'components/SuiInput/SuiInputIconRoot';

const SuiInput = forwardRef(({ size, icon, error, success, disabled, ...rest }, ref) => {
  let template;
  if (icon.component && icon.direction === 'left') {
    template = (
      <SuiInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <SuiInputIconBoxRoot ownerState={{ size }}>
          <SuiInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </SuiInputIconRoot>
        </SuiInputIconBoxRoot>
        <SuiInputRoot {...rest} ownerState={{ size, error, success, disabled }} />
      </SuiInputWithIconRoot>
    );
  } else if (icon.component && icon.direction === 'right') {
    template = (
      <SuiInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <SuiInputRoot {...rest} ownerState={{ size, error, success, disabled }} />
        <SuiInputIconBoxRoot ownerState={{ size }}>
          <SuiInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </SuiInputIconRoot>
        </SuiInputIconBoxRoot>
      </SuiInputWithIconRoot>
    );
  } else {
    template = <SuiInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />;
  }

  return template;
});

// Setting default values for the props of SuiInput
SuiInput.defaultProps = {
  size: 'medium',
  icon: {
    component: false,
    direction: 'none',
  },
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the SuiInput
SuiInput.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(['none', 'left', 'right']),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SuiInput;
