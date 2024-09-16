import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Home/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";
import BankHome from "./Banking/BankHome";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import BankSummary1 from './Banking/BankSummary1'
import BankSummary2 from './Banking/BankSummary2'
import ForgetUserPass from './Home/ForgetUserPass'
import SuccessPage from './Register/SuccessPage';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/success" element={<SuccessPage />} />
        <Route exact path="/bankHome" element={ <ProtectedRoute> <BankHome /> </ProtectedRoute> } />
        <Route exact path="/bankSummary1" element={ <ProtectedRoute> <BankSummary1 /> </ProtectedRoute> } /> 
        <Route exact path="/bankSummary2" element={ <ProtectedRoute> <BankSummary2 /> </ProtectedRoute> } /> 
        <Route exact path="/forgetUserPass" element={ <ForgetUserPass /> } /> 
        </Routes>
    </AuthProvider>
  );
};

export default App;
