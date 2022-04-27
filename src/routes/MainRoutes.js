import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Login from '../pages/Login';
import Crud from '../pages/Crud';

const MainRoutes = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('data')) {
      setUser(JSON.parse(localStorage.getItem('data')));
      //   console.log(localStorage.getItem('data'));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
