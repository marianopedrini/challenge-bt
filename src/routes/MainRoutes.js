import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Login from '../pages/Login';
import Crud from '../pages/Crud';

const MainRoutes = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return (
    <UserContext.Provider value={token}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default MainRoutes;
