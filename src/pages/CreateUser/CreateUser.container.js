import { connect } from 'react-redux';

import { inviteUserRequest } from 'redux/User/action';
import CreateUser from './CreateUser.component';
import type { StateProps, DispatchProps } from './CreateUser.component';

const mapStateToProps = (state: StoreType): StateProps => ({});

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  inviteUserRequest: inviteUser => dispatch(inviteUserRequest(inviteUser)),
});

export default (connect(mapStateToProps, mapDispatchToProps)(CreateUser): any);
