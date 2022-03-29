// @flow
import React, { Component } from 'react';
import SuiBox from 'components/SuiBox';
import LoginWrapper from 'pages/SignIn/components/LoginWrapper';
import chat from 'assets/illustrations/chat.png';
import SignInForm from './components/SignInForm';

export type StateProps = {|
  errorMessage: string,
  successMessage: string,
|};
export type DispatchProps = {|
  userAuthentionRequest: Function,
|};

class SignIn extends Component<StateProps & DispatchProps> {
  render(): React$Element<*> {
    const { errorMessage, successMessage, userAuthentionRequest } = this.props;
    return (
      <LoginWrapper
        title="Sign In"
        description="Enter your email and password to sign in"
        illustration={{
          image: chat,
          title: '"Attention is the new currency"',
          description:
            'The more effortless the writing looks, the more effort the writer actually put into the process.',
        }}
      >
        <SuiBox>
          <SignInForm
            errorMessage={errorMessage}
            successMessage={successMessage}
            userAuthentionRequest={userAuthentionRequest}
          />
        </SuiBox>
      </LoginWrapper>
    );
  }
}

export default SignIn;
