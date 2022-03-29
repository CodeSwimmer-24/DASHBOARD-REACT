// @flow
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import SuiInput from 'components/SuiInput';
import SuiButton from 'components/SuiButton';
import { Alert } from '../SignIn.styled';

function SignInForm({
  errorMessage,
  userAuthentionRequest,
  successMessage,
}: any): React$Element<any> {
  const history = useHistory();

  useEffect(() => {
    if (successMessage) {
      history.push('/dashboard');
    }
  }, [history, successMessage]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        password: Yup.string()
          .max(255)
          .required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          userAuthentionRequest({ email: values.email, password: values.password });
        } catch (error) {
          const message = error.message || 'Something went wrong';
          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <Form autoComplete="off">
          {errors.submit && !errorMessage && (
            <Alert mt={2} mb={1} severity="warning">
              {errors.submit}
            </Alert>
          )}
          {errorMessage && !errors.submit && (
            <Alert mt={2} mb={1} severity="error">
              {errorMessage}
            </Alert>
          )}
          <SuiBox mb={2}>
            <SuiInput
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </SuiBox>
          <SuiBox mb={2}>
            <SuiInput
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </SuiBox>
          <SuiBox>
            <SuiTypography
              component={Link}
              to="/auth/reset-password"
              variant="button"
              fontWeight="regular"
              sx={{ cursor: 'pointer', userSelect: 'none' }}
            >
              Forgot Password?
            </SuiTypography>
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton
              variant="gradient"
              color="info"
              size="large"
              fullWidth
              disabled={isSubmitting}
              type="submit"
            >
              sign in
            </SuiButton>
          </SuiBox>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
