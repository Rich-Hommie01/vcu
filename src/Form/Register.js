import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep, setFormData, setError, setLoading, resetRegistration } from '../redux/slices/registrationSlice';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import IntroContent from './IntroContent';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import { Spinner } from 'react-bootstrap';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentStep, formData, errors, loading } = useSelector((state) => state.registration);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === 'checkbox') {
      dispatch(setFormData({ field: name, value: checked }));
    } else {
      dispatch(setFormData({ field: name, value }));
    }

    if (errors[name]) {
      dispatch(setError({ field: name, error: '' }));
    }
  };

  const checkUsernameAvailability = async () => {
    try {
      const response = await fetch('https://backend-av3s.onrender.com/api/auth/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username }),
      });
      const result = await response.json();
      return result.success;
    } catch (error) {
      return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === 3) {
      const isUsernameAvailable = await checkUsernameAvailability();
      if (!isUsernameAvailable) {
        dispatch(setError({ field: 'username', error: 'Username already exists' }));
        return;
      }
    }

    if (validateStep()) {
      dispatch(nextStep());
    }
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      dispatch(setLoading(true));
      try {
        const response = await fetch('https://backend-av3s.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            username: formData.username,
          }),
        });

        if (response.ok) {
          navigate('/error');
          dispatch(resetRegistration());
        }

      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  const validateStep = () => {
    let validationErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName?.trim()) {
        validationErrors.firstName = 'First name is required';
      }
      if (!formData.lastName?.trim()) {
        validationErrors.lastName = 'Last name is required';
      }
      if (!formData.ssn || formData.ssn.length !== 9) {
        validationErrors.ssn = 'SSN must be 9 digits long';
      }
      if (!formData.dob || !isValidDate(formData.dob)) {
        validationErrors.dob = 'Please enter a valid date of birth';
      }
    } else if (currentStep === 2) {
      if (!formData.street?.trim()) {
        validationErrors.street = 'Street address is required';
      }
      if (!formData.city?.trim()) {
        validationErrors.city = 'City is required';
      }
      const stateRegex = /^[A-Za-z]{2}$/;
      if (!stateRegex.test(formData.state)) {
        validationErrors.state = 'State must be a valid two-letter abbreviation (e.g., CA, NY)';
      }
      const zipCodeRegex = /^\d{5}$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        validationErrors.zipCode = 'ZIP code must be 5 digits';
      }
    } else if (currentStep === 3) {
      if (!formData.username?.trim()) {
        validationErrors.username = 'Username is required';
      }
      if (!formData.password || formData.password.length < 8) {
        validationErrors.password = 'Password must be at least 8 characters long';
      }
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        validationErrors.phone = 'Phone number must be 10 digits';
      }
    } else if (currentStep === 4) {
      if (!formData.idNumber) {
        validationErrors.idNumber = 'ID Number is required';
      }
      if (!formData.issueState) {
        validationErrors.issueState = 'Issuing State is required';
      }
      if (!formData.expirationDate) {
        validationErrors.expirationDate = 'Expiration Date is required';
      }
    } else if (currentStep === 6) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.email)) {
        validationErrors.email = 'Please enter a valid email address';
      }

      if (!formData.terms) {
        validationErrors.terms = 'You must provide your electronic signature by agreeing to the terms.';
      }
      if (!formData.notifications) {
        validationErrors.notifications = 'You must agree to the Consumer Report Authorization.';
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      Object.keys(validationErrors).forEach((field) =>
        dispatch(setError({ field, error: validationErrors[field] }))
      );
      return false;
    }

    return true;
  };

  const isValidDate = (dateString) => {
    const mmddyyyyPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    const yyyymmddPattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    return mmddyyyyPattern.test(dateString) || yyyymmddPattern.test(dateString);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Nav className='registerNav' />
      <div className='registerContainer'>
        <div className='registerForm'>
          {currentStep === 0 && (
            <div>
              <IntroContent />
              <div className='btnContainer'>
                <button className='Btn memberBtn' onClick={goToLogin}>Back to Login</button>
                <button className='Btn memberBtn' onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {currentStep === 1 && <StepOne formData={formData} errors={errors} handleChange={handleChange} />}
          {currentStep === 2 && <StepTwo formData={formData} errors={errors} handleChange={handleChange} />}
          {currentStep === 3 && <StepThree formData={formData} errors={errors} handleChange={handleChange} />}
          {currentStep === 4 && <StepFour formData={formData} errors={errors} handleChange={handleChange} />}
          {currentStep === 5 && <StepFive formData={formData} errors={errors} handleChange={handleChange} />}
          {currentStep === 6 && <StepSix formData={formData} errors={errors} handleChange={handleChange} />}

          {currentStep > 0 && (
            <div className='btnContainer'>
              <button className='Btn' onClick={handlePrev} disabled={loading}>Previous</button>
              {currentStep === 6 ? (
                <button className='Btn' onClick={handleSubmit} disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" style={{ marginRight: '5px' }} />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              ) : (
                <button className='Btn' onClick={handleNext} disabled={loading}>Next</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
