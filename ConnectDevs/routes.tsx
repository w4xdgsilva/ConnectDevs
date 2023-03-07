import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './src/pages/HomePage/index';
import { LoginPage } from './src/pages/LoginPage/index';
import { RegisterPage } from './src/pages/RegisterPage/index';
import { ProfilePage } from './src/pages/ProfilePage/index';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/profilePage' element={<ProfilePage />} />
  </Routes>
);
