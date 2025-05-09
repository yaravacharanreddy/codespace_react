import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './formSchema';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = [Step1, Step2, Step3];

const MultistepFrpm = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    },
    mode: 'onTouched',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const CurrentComponent = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = async (data) => {
    const isValid = await methods.trigger();
    if (!isValid) return;
    if (isLastStep) {
      console.log('Form Submitted:', data);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleNext)}>
        <CurrentComponent />
        <div style={{ marginTop: '20px' }}>
          {currentStep > 0 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          <button type="submit">
            {isLastStep ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultistepFrpm;
