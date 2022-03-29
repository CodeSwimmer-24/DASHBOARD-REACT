import PropTypes from 'prop-types';
import SuiBox from 'components/SuiBox';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { accountInfoRequest } from 'redux/Account/action';
import { getRoles, setErrorMessageSelector } from 'redux/Account/selector';
import NavBar from './NavBar';

function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  const messageAccountInfo = useSelector(state =>
    setErrorMessageSelector(state, 'accountInfoError')
  );

  const userRoles = useSelector(getRoles);

  useEffect(() => {
    if (userRoles.length !== 0) {
      setRoles(userRoles);
    }
  }, [userRoles]);

  useEffect(() => {
    const isAccountInfoStarted = messageAccountInfo === null;
    if (isAccountInfoStarted && userRoles.length === 0 && roles.length === 0) {
      dispatch(accountInfoRequest());
    }
  }, [dispatch, roles, userRoles, messageAccountInfo]);

  return (
    <SuiBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: 'relative',

        [breakpoints.up('xl')]: {
          //   marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {!Cookies.get('auth') && <Redirect to="/auth/sign-in" />}
      <NavBar />

      {roles.length > 0 ? children : []}
    </SuiBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
