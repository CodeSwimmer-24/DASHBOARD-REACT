import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Icon from '@mui/material/Icon';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
// import Breadcrumbs from 'examples/Breadcrumbs';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { getRoles } from 'redux/Account/selector';
import NotificationItem from './NotificationItem';
import { navbar, navbarContainer, navbarRow, navbarIconButton } from './styles';

function DashboardNavbar({ absolute, light, isMini }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccountMenu, setAccountMenu] = useState(false);
  const [openStoreMenu, setStoreMenu] = useState(false);
  const roles = useSelector(getRoles);

  const handleOpenMenu = event => setOpenMenu(event.currentTarget);
  const handleOpenAccountMenu = event => setAccountMenu(event.currentTarget);
  const handleOpenStoreMenu = event => setStoreMenu(event.currentTarget);

  const handleCloseMenu = () => setOpenMenu(false);
  const handleCloseAccountMenu = () => setAccountMenu(false);
  const handleCloseStoreMenu = () => setStoreMenu(false);

  const history = useHistory();

  const renderOrderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            add
          </Icon>
        }
        title={['Create Order']}
        onClick={() => {
          handleCloseMenu();
          history.push('/order/create-order');
        }}
      />
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            visibility
          </Icon>
        }
        title={['View all orders']}
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  const renderAccountMenu = () => (
    <Menu
      anchorEl={openAccountMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(openAccountMenu)}
      onClose={handleCloseAccountMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            supervisor_account
          </Icon>
        }
        title={['Invite User']}
        onClick={() => {
          handleCloseAccountMenu();
          history.push('/account/create-user');
        }}
      />
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            visibility
          </Icon>
        }
        title={['View all account']}
        onClick={handleCloseAccountMenu}
      />
    </Menu>
  );

  const renderStoreMenu = () => (
    <Menu
      anchorEl={openStoreMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(openStoreMenu)}
      onClose={handleCloseStoreMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            add
          </Icon>
        }
        title={['Create Store']}
        onClick={() => {
          handleCloseStoreMenu();
          history.push('/store/create-store');
        }}
      />
      <NotificationItem
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { dark } }) => dark.main }}>
            visibility
          </Icon>
        }
        title={['View all stores']}
        onClick={handleCloseStoreMenu}
      />
    </Menu>
  );

  const renderAdminMenu = () => {
    return roles && roles.indexOf('admin') > -1 ? (
      <>
        <IconButton
          color="inherit"
          sx={navbarIconButton}
          aria-controls="notification-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={handleOpenAccountMenu}
        >
          <Icon className={light ? 'text-white' : 'text-dark'}>supervisor_account</Icon>
          <SuiTypography variant="button" fontWeight="medium" color={light ? 'white' : 'dark'}>
            Account Management
          </SuiTypography>
        </IconButton>
        {renderAccountMenu()}
        <IconButton
          color="inherit"
          sx={navbarIconButton}
          aria-controls="notification-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={handleOpenStoreMenu}
        >
          <Icon className={light ? 'text-white' : 'text-dark'}>supervisor_account</Icon>
          <SuiTypography variant="button" fontWeight="medium" color={light ? 'white' : 'dark'}>
            Store Management
          </SuiTypography>
        </IconButton>
        {renderStoreMenu()}
      </>
    ) : (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <></>
    );
  };

  return (
    <AppBar position="static" color="inherit" sx={theme => navbar(theme, { absolute, light })}>
      <Toolbar sx={theme => navbarContainer(theme)}>
        <SuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={theme => navbarRow(theme, { isMini })}>
          <IconButton
            color="inherit"
            sx={navbarIconButton}
            aria-controls="notification-menu"
            aria-haspopup="true"
            variant="contained"
          >
            <Link to="/dashboard">
              <SuiTypography variant="h5" fontWeight="medium" color={light ? 'white' : 'dark'}>
                <b>MH</b>
                <small>deliveries</small>
              </SuiTypography>
            </Link>
          </IconButton>
          <SuiBox color="inherit" mb={{ xs: 1, md: 0 }} style={{ marginLeft: '1rem' }}>
            <IconButton
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleOpenMenu}
            >
              <Icon className={light ? 'text-white' : 'text-dark'}>shopping_cart</Icon>
              <SuiTypography variant="button" fontWeight="medium" color={light ? 'white' : 'dark'}>
                Order Management
              </SuiTypography>
            </IconButton>
            {renderOrderMenu()}
            {renderAdminMenu()}
          </SuiBox>
        </SuiBox>

        {isMini ? null : (
          <SuiBox sx={theme => navbarRow(theme, { isMini })}>
            <SuiBox color={light ? 'white' : 'inherit'}>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                // onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton>

              <IconButton
                sx={navbarIconButton}
                size="small"
                onClick={() => {
                  Cookies.remove('auth');
                  history.push('/auth/sign-in');
                }}
              >
                <Icon
                  sx={({ palette: { dark, white } }) => ({
                    color: light ? white.main : dark.main,
                  })}
                >
                  logout
                </Icon>
                <SuiTypography
                  variant="button"
                  fontWeight="medium"
                  color={light ? 'white' : 'dark'}
                >
                  Logout
                </SuiTypography>
              </IconButton>
            </SuiBox>
          </SuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
