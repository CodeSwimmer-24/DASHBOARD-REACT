// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';

// Images
import pattern from 'assets/images/shapes/pattern-lines.svg';

function LoginWrapper({ color, header, title, description, illustration, children }: any): any {
  return (
    <Grid container>
      <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: 'auto' }}>
        <SuiBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
          <SuiBox pt={3} px={3}>
            {!header ? (
              <>
                <SuiBox mb={1}>
                  <SuiTypography variant="h4" fontWeight="bold">
                    {title}
                  </SuiTypography>
                </SuiBox>
                <SuiTypography variant="body2" fontWeight="regular" color="text">
                  {description}
                </SuiTypography>
              </>
            ) : (
              header
            )}
          </SuiBox>
          <SuiBox p={3}>{children}</SuiBox>
        </SuiBox>
      </Grid>
      <Grid item xs={12} lg={6}>
        <SuiBox
          display={{ xs: 'none', lg: 'flex' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="calc(100% - 2rem)"
          height="calc(100vh - 2rem)"
          position="relative"
          borderRadius="lg"
          textAlign="center"
          bgColor={color}
          variant="gradient"
          m={2}
          px={13}
          sx={{ overflow: 'hidden' }}
        >
          <SuiBox
            component="img"
            src={pattern}
            alt="pattern-lines"
            width="120rem"
            position="absolute"
            topl={0}
            left={0}
            opacity={0.4}
          />
          {illustration.image && (
            <SuiBox
              component="img"
              src={illustration.image}
              alt="chat-illustration"
              width="100%"
              maxWidth="31.25rem"
            />
          )}
          {illustration.title && (
            <SuiBox mt={6} mb={1}>
              <SuiTypography variant="h4" color="white" fontWeight="bold">
                {illustration.title}
              </SuiTypography>
            </SuiBox>
          )}
          {illustration.description && (
            <SuiBox mb={1}>
              <SuiTypography variant="body2" color="white">
                {illustration.description}
              </SuiTypography>
            </SuiBox>
          )}
        </SuiBox>
      </Grid>
    </Grid>
  );
}

// Setting default values for the props of IllustrationLayout
LoginWrapper.defaultProps = {
  color: 'info',
  header: '',
  title: '',
  description: '',
  illustration: ({}: { ... }),
};

// Typechecking props for the IllustrationLayout
LoginWrapper.propTypes = {
  color: (PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
  ]): any),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  illustration: (PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }): any),
};

export default LoginWrapper;
