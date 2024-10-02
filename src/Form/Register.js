import React, { useState } from 'react';
import './Register.scss';
import Navbar from '../HomePage/Navbar';
import ProgressBar from './ProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix.js';
import Error from './Error.js';
import IntroContent from './IntroContent';
import validator from 'validator';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    street: '',
    apt: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
    phone: '',
    idNumber: '',
    issueState: '',
    expirationDate: '',
    employment: '',  
  occupation: '',
    email: '',
    ssn: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  
  const totalSteps = 6;

  const stepMessages = [
    "Personal Information",
    "Residential Address",
    "Digital Banking Registration",
    "Let's verify your ID",
    "Employment Status",
    "Review and Confirm",
  ];

  // Age calculation function
  const calculateAge = (dob) => {
    if (!dob) return null; 
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateStep(currentStep);
  };

  const validateStep = (step) => {
    const validationErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) validationErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) validationErrors.lastName = 'Last name is required';
      
      const age = calculateAge(formData.dob);
      if (age === null || age < 18) validationErrors.dob = 'You must be at least 18 years old';
      
      if (!validator.isLength(formData.ssn, { min: 9, max: 9 })) validationErrors.ssn = 'SSN must be 9 digits';
    }

    if (step === 2) {
      if (!formData.street.trim()) validationErrors.street = 'Street address is required';
      if (!formData.city.trim()) validationErrors.city = 'City is required';
      if (!validator.isAlpha(formData.city)) validationErrors.city = 'City must contain only letters';
      if (!formData.state.trim() || !validator.isLength(formData.state, { min: 2, max: 2 })) {
        validationErrors.state = "Please enter a valid 2-letter state code (e.g., 'NY')";
      }
      if (!validator.isPostalCode(formData.zipCode, 'US')) validationErrors.zipCode = 'Invalid zip code';
    }

    if (step === 3) {
      if (!validator.isLength(formData.username, { min: 4 })) 
        validationErrors.username = 'Username must be at least 4 characters long';
      if (!/^[a-zA-Z0-9]*$/.test(formData.username)) 
        validationErrors.username = 'Username can only contain alphanumeric characters';
      if (!validator.isStrongPassword(formData.password, { minLength: 6, minSymbols: 1, minNumbers: 1 })) {
        validationErrors.password = 'Password must be at least 6 characters and include a number and special character';
      }
      if (!validator.isMobilePhone(formData.phone, 'en-US')) 
        validationErrors.phone = 'Invalid phone number';
    }

    if (step === 4) {
      if (!formData.idNumber.trim()) validationErrors.idNumber = 'ID number is required';
      if (!formData.issueState.trim()) validationErrors.issueState = 'Issuing state is required';
      if (!validator.isDate(formData.expirationDate)) validationErrors.expirationDate = 'Invalid expiration date';
    }

    if (step === 6) {
      if (!validator.isEmail(formData.email)) validationErrors.email = 'Enter a valid email';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleNext = async () => {
    // Validate current step before proceeding
    if (validateStep(currentStep)) {
      if (currentStep === 3) {
        // Username availability check
        try {
          const response = await fetch(`https://backend-av3s.onrender.com/api/auth/check-username`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: formData.username }),
          });
          const result = await response.json();
  
          if (result.success === false) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              username: result.message,
            }));
            return;
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              username: null,
            }));
          }
        } catch (error) {
          console.error('Error checking username:', error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: 'Error checking username availability. Please try again.',
          }));
          return;
        }
      }
      
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log('Validation failed:', errors); 
    }
  };
  
  

  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate the entire form before submitting
    if (validateStep(currentStep) && Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmissionError(null);

      try {
        const response = await fetch('https://backend-av3s.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error(`Failed to submit form: ${response.statusText}`);

        const result = await response.json();
        console.log('Success:', result);
        setSubmissionSuccess(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionError(error.message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmissionError("Please fix the errors in the form before submitting.");
    }
  };

  return (
    <>
      <Navbar className="registerNavBar" />
      <div className="multi-step-form-container">
        {submissionSuccess ? (
          <Error />
        ) : (
          <form className="multi-step-form" onSubmit={handleSubmit}>
            {currentStep > 0 && <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepMessages={stepMessages} />}
            {currentStep === 0 && <IntroContent />}
            {currentStep === 1 && <StepOne formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />}
            {currentStep === 2 && <StepTwo formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />}
            {currentStep === 3 && <StepThree formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />}
            {currentStep === 4 && <StepFour formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />}
            {currentStep === 5 && <StepFive formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 6 && <StepSix formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />}
            
            {submissionError && <div className="error-message">{submissionError}</div>}
            <div className="button-group">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  className="prev button" 
                  onClick={handlePrev} 
                  disabled={isSubmitting}
                >
                  Previous
                </button>
              )}
              {currentStep < 6 && (
                <button 
                  type="button" 
                  className="next button" 
                  onClick={handleNext} 
                  disabled={isSubmitting}
                >
                  Next
                </button>
              )}
              {currentStep === 6 && (
                <button 
                  type="submit" 
                  className="submit button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'} 
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Register;
