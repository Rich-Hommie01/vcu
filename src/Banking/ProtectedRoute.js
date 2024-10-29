import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!user && !storedUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
