import React, { useState } from 'react';
// @mui material components
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// Soft UI Dashboard PRO React components
import SuiBox from 'components/SuiBox';
import { CreateOrder, OrderAddress, OrderItems } from 'pages';

function getSteps() {
  return ['1. Create Customer', '2. Order Address', '3. Order Items', '4. Pricing'];
}

function getStepContent(stepIndex, handlePrevious, handleNext) {
  switch (stepIndex) {
    case 0:
      return <CreateOrder handleOrderNext={handleNext} />;
    case 1:
      return <OrderAddress handleAddressPrevious={handlePrevious} handleAddressNext={handleNext} />;
    case 2:
      return <OrderItems handleOrderItemPrevious={handlePrevious} />;
    default:
      return null;
  }
}

function Orders() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () =>
    setActiveStep(prev => {
      return prev === 2 ? prev : prev + 1;
    });
  const handleBack = () =>
    setActiveStep(prev => {
      return activeStep - 1;
    });

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <SuiBox p={2}>
        <SuiBox>{getStepContent(activeStep, handleBack, handleNext)}</SuiBox>
      </SuiBox>
    </>
  );
}

export default Orders;
