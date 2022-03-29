// @flow
import React from 'react';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';

export type StateProps = { ... };
export type DispatchProps = { ... };

class Dashboard extends React.Component<StateProps & DispatchProps> {
  render(): React$Element<'div'> {
    return (
      <SuiBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SuiBox mt={6} mb={1} textAlign="center">
              <SuiBox mb={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  <Icon fontSize="large" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                    engineering
                  </Icon>
                  <br />
                  Under construction
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="regular" color="secondary">
                Thank you for your patience
              </SuiTypography>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    );
  }
}

export default Dashboard;
