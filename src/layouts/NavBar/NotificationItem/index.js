import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import { menuItem, menuImage } from './styles';

const NotificationItem = forwardRef(({ color, image, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={theme => menuItem(theme)}>
    <SuiBox
      width="2.25rem"
      height="2.25rem"
      mt={0.25}
      mr={2}
      mb={0.25}
      borderRadius="lg"
      sx={theme => menuImage(theme, { color })}
    >
      {image}
    </SuiBox>
    <SuiBox>
      <SuiTypography variant="button" textTransform="capitalize" fontWeight="regular">
        <strong>{title[0]}</strong>
      </SuiTypography>
    </SuiBox>
  </MenuItem>
));

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: 'dark',
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NotificationItem;
