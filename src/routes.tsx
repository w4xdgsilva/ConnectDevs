import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/index';
import { LoginPage } from './pages/LoginPage/index';
import { RegisterPage } from './pages/RegisterPage/index';
import { ProfilePage } from './pages/ProfilePage/index';
import { NotFoundPage } from './pages/NotFoundPage/index';
import { ProtectedRoutes } from './components/ProtectedRoutes/ProtectedRoutes';
import { ProfileProvider } from './providers/ProfileContext/ProfileContext';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<ProtectedRoutes />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/profilePage' element={<ProtectedRoutes />}>
      <Route
        index
        element={
          <ProfileProvider>
            <ProfilePage />
          </ProfileProvider>
        }
      />
    </Route>
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
