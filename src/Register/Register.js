import React, { useState } from 'react';
import IntroContent from './IntroContent';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import ProgressBar from './ProgressBar';
import NavBar from '../HomePage/Navbar';
import './Register.scss';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    address: '',
    dob: '',
    ssn: '',
    phone: '',
    email: '',
    terms: false,
    notifications: false,
    idCardNumber: '', 
    idExpirationDate: '', 
    stateIdType: '', 
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStart = () => {
    setCurrentStep(1); // Move to the first step of the form
  };

  const validateStep = () => {
    let newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.username || !formData.password) {
          newErrors.username = !formData.username ? 'Username is required' : '';
          newErrors.password = !formData.password ? 'Password is required' : '';
        }
        break;
      case 2:
        if (!formData.name || !formData.address) {
          newErrors.name = !formData.name ? 'Name is required' : '';
          newErrors.address = !formData.address ? 'Address is required' : '';
        }
        break;
      case 3:
        if (!formData.dob) {
          newErrors.dob = 'Date of birth is required';
        }
        break;
      case 4:
        if (!/^\d{9}$/.test(formData.ssn)) {
          newErrors.ssn = 'SSN must be exactly 9 digits';
        }
        if (!/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = 'Phone number must be exactly 10 digits';
        }
        break;
      case 5:
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.terms) {
          newErrors.terms = 'Required!';
        }
        if (!formData.notifications) {
          newErrors.notifications = 'Required!';
        }
        if (!formData.idCardNumber) {
          newErrors.idCardNumber = 'ID card number is required';
        }
        if (!formData.idExpirationDate) {
          newErrors.idExpirationDate = 'ID expiration date is required';
        }
        if (!formData.stateIdType) {
          newErrors.stateIdType = 'State ID type is required';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsLoading(true);
      try {
        const response = await fetch('https://backend-av3s.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Redirect to success page
          setTimeout(() => {
            window.location.href = '/success'; // Redirect to success page
          }, 1000);
        } else {
          const errorData = await response.json();
          setErrors({ submit: errorData.message || 'An error occurred during submission. Please try again.' });
        }
      } catch (error) {
        setErrors({ submit: 'An unexpected error occurred. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <NavBar className="NavRegister" />
      <div className="container">
        {currentStep === 0 && <IntroContent onStart={handleStart} />}
        {currentStep > 0 && <ProgressBar currentStep={currentStep} totalSteps={5} />}

        {currentStep === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            handleNextStep={handleNextStep}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 5 && (
          <StepFive
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            handleSubmit={handleSubmit}
            handlePreviousStep={handlePreviousStep}
            isLoading={isLoading}
          />
        )}
        {errors.submit && <p className="error-message">{errors.submit}</p>}
      </div>
    </>
  );
};

export default Register;
