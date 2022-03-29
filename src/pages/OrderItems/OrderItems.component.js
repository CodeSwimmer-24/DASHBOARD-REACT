// @flow
import React from 'react';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Formik, Form } from 'formik';
import SuiButton from 'components/SuiButton';
import initialValues from './schemas/initialValues';
import validation from './schemas/validation';
import form from './schemas/form';
import OrderItemInfo from './components/OrderItemInfo';

export type DispatchPropsType = {|
  setOrderItemRequest: Function,
  handleOrderItemPrevious: Function,
|};

class OrderItems extends React.Component<DispatchPropsType> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log(this.props.allData, 'jjjjjjjjjjjjjjjj');
    if (this.state.loading) {
      this.props.setUploadRequest(this.props.allData);
      this.setState({ loading: false });
    }
  }

  render(): React$Element<'div'> {
    const { setOrderItemRequest } = this.props;
    const { handleOrderItemPrevious } = this.props;
    const { setUploadRequest } = this.props;
    console.log(this.props);
    return (
      <SuiBox pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <SuiBox p={2}>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={8}>
                    <SuiBox mt={2} mb={1}>
                      <SuiBox mb={1}>
                        <SuiTypography variant="h3" fontWeight="bold" textAlign="left">
                          Order Items
                        </SuiTypography>
                      </SuiBox>
                    </SuiBox>
                    <SuiBox mb={2} pt={1}>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={async (values, actions) => {
                          try {
                            setOrderItemRequest(values);
                            // setUploadRequest(values)
                            this.setState({ loading: true });
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
                            <OrderItemInfo
                              formData={{
                                values,
                                touched,
                                formField: form.formField,
                                errors,
                                handleChange,
                              }}
                            />
                            <SuiBox
                              mt={4}
                              width="100%"
                              display="flex"
                              justifyContent="space-between"
                            >
                              <SuiButton
                                variant="gradient"
                                color="dark"
                                onClick={handleOrderItemPrevious}
                              >
                                prev
                              </SuiButton>

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

export default OrderItems;
