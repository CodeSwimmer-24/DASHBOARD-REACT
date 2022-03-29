// @flow
import React from 'react';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Formik, Form } from 'formik';
import SuiButton from 'components/SuiButton';
import initialValues from './schemas/initialValue';
import validation from './schemas/validation';
import form from './schemas/form';
import OrderInfo from './components/OrderInfo';

export type DispatchProps = {|
  setCustomerRequest: Function,
  handleOrderNext: Function,
|};

class CreateOrder extends React.Component<DispatchProps> {
  render(): React$Element<'div'> {
    const { setCustomerRequest } = this.props;
    const { handleOrderNext } = this.props;
    return (
      <SuiBox pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <SuiBox p={2}>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={8}>
                    <SuiBox mt={2} mb={1} textAlign="left">
                      <SuiBox mb={1}>
                        <SuiTypography variant="h3" fontWeight="bold">
                          Create Customer
                        </SuiTypography>
                      </SuiBox>
                    </SuiBox>
                    <SuiBox mb={2}>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={async (values, actions) => {
                          console.log(values, 'vvvvvvvvvvvv');
                          try {
                            setCustomerRequest(values);
                            handleOrderNext();
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
                            <OrderInfo
                              formData={{
                                values,
                                touched,
                                formField: form.formField,
                                errors,
                                handleChange,
                              }}
                            />
                            <SuiBox mt={4} width="100%" display="flex" justifyContent="right">
                              <SuiButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                              >
                                Next
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

export default CreateOrder;
