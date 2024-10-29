import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 0,
  formData: {
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
    ssn: '',
    email: '',
    terms: false,
    notifications: false,
  },
  errors: {},
  loading: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    setError: (state, action) => {
      const { field, error } = action.payload;
      state.errors[field] = error;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetRegistration: (state) => {
      return initialState;
    },
  },
});

export const { nextStep, prevStep, setFormData, setError, setLoading, resetRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;
