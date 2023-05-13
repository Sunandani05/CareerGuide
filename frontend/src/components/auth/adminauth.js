import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated and set authenticated state
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const login = (token) => {
    // Set token in local storage and set authenticated state
    localStorage.setItem('token', token);
    setAuthenticated(true);
  };

  const logout = () => {
    // Remove token from local storage and set authenticated state
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
};