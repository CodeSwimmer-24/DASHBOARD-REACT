// @flow
import React from 'react';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Formik, Form } from 'formik';
import initialValues from 'pages/CreateUser/schemas/initialValues';
import validation from 'pages/CreateUser/schemas/validation';
import form from 'pages/CreateUser/schemas/form';
import UserInfo from 'pages/CreateUser/components/UserInfo';
import SuiButton from 'components/SuiButton';

export type StateProps = { ... };
export type DispatchProps = {|
  inviteUserRequest: Function,
|};

class CreateUser extends React.Component<StateProps & DispatchProps> {
  render(): React$Element<'div'> {
    const { inviteUserRequest } = this.props;
    return (
      <SuiBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SuiBox mt={6} mb={1} textAlign="center">
              <SuiBox mb={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  Invite User
                </SuiTypography>
              </SuiBox>
            </SuiBox>
            <Card>
              <SuiBox p={2}>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={8}>
                    <SuiBox mb={2}>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={async (values, actions) => {
                          try {
                            inviteUserRequest(values);
                            setTimeout(() => {
                              actions.setSubmitting(false);
                            }, 1000);
                            actions.resetForm();
                          } catch (error) {
                            // eslint-disable-next-line no-console
                            console.error(error);
                          }
                        }}
                      >
                        {({ values, errors, touched, isSubmitting, handleChange }) => (
                          <Form id={form.formId} autoComplete="off">
                            <UserInfo
                              formData={{
                                values,
                                touched,
                                formField: form.formField,
                                errors,
                                handleChange,
                              }}
                            />
                            <SuiBox mt={2} width="100%" display="flex" justifyContent="center">
                              <SuiButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                              >
                                Send an invite
                              </SuiButton>
                            </SuiBox>
                          </Form>
                        )}
                      </Formik>
                    </SuiBox>
                  </Grid>
                </Grid>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
    );
  }
}

export default CreateUser;
