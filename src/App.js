import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import Login from "./Login/Login";
import Register from "./Form/Register";
import Error from "./Form/Error";
import ProtectedRoute from './Banking/ProtectedRoute';
import Bankhome from "./Banking/Bankhome";
import Banksummary1 from './Banking/Banksummary1';
import Banksummary2 from './Banking/Banksummary2';
import ForgetUserPass from './ResetAccount/ForgetUserPass';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/error" element={<Error />} />
      <Route path="/forgetUserPass" element={<ForgetUserPass />} />

      <Route
        path="/bankhome"
        element={
          <ProtectedRoute>
            <Bankhome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/banksummary1"
        element={
          <ProtectedRoute>
            <Banksummary1 />
          </ProtectedRoute>
        }
      />
      <Route
        path="/banksummary2"
        element={
          <ProtectedRoute>
            <Banksummary2 />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
