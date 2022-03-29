/* @flow */
import { connect } from 'react-redux';

import SignIn from './SignIn.component';
import { userAuthentionRequest } from '../../redux/Account/action';
import { setErrorMessageSelector, setSuccessMessageSelector } from '../../redux/Account/selector';

import type { StateProps, DispatchProps } from './SignIn.component';

const mapStateToProps = (state: StoreType): StateProps => ({
  errorMessage: setErrorMessageSelector(state, 'loginError'),
  successMessage: setSuccessMessageSelector(state, 'loginSuccess'),
});

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  userAuthentionRequest: credentials => dispatch(userAuthentionRequest(credentials)),
});

export default (connect(mapStateToProps, mapDispatchToProps)((SignIn: any)): any);
