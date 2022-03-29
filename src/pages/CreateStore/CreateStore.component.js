// @flow
import React from 'react';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Formik, Form } from 'formik';
import initialValues from 'pages/CreateStore/schemas/initialValues';
import validation from 'pages/CreateStore/schemas/validation';
import form from 'pages/CreateStore/schemas/form';
import SuiButton from 'components/SuiButton';
import StoreInfo from './components/StoreInfo';

type StateProps = {};
export type StatePropsType = {
  storeOwners: Array<*>,
};
export type DispatchPropsType = {|
  createStoreRequest: Function,
  fetchStoreOwners: Function,
|};

type OwnPropsType = StatePropsType & DispatchPropsType;
class CreateStore extends React.Component<OwnPropsType, StateProps> {
  componentDidMount() {
    const { fetchStoreOwners } = this.props;
    fetchStoreOwners();
  }

  render(): React$Element<'div'> {
    const { createStoreRequest, storeOwners } = this.props;
    return (
      <SuiBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SuiBox mt={6} mb={1} textAlign="center">
              <SuiBox mb={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  Create Store
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
                            createStoreRequest(values);
                            setTimeout(() => {
                              actions.setSubmitting(false);
                              actions.resetForm();
                            }, 1000);
                          } catch (error) {
                            // eslint-disable-next-line no-console
                            console.error(error);
                          }
                        }}
                      >
                        {({ values, errors, touched, isSubmitting, handleChange }) => (
                          <Form autoComplete="off">
                            <StoreInfo
                              formData={{
                                values,
                                touched,
                                formField: form.formField,
                                errors,
                                handleChange,
                                storeOwners,
                              }}
                            />
                            <SuiBox mt={2} width="100%" display="flex" justifyContent="center">
                              <SuiButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                              >
                                Create
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

export default CreateStore;
