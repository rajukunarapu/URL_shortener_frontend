import React, { Suspense, lazy } from 'react';
import PageLoading from '../Components/Common/PageLoading';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';

// lazy imports
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const StatsPage = lazy(() => import('../pages/StatsPage'));

const AppRoutes = () => {

  const { loading, isAuthenticated } = useContext(AuthContext);

  if (loading) {
    return <PageLoading />;
  }

  console.log({ isAuthenticated });
  console.log({ loading });

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Route */}
          <Route 
            path="/stats" 
            element={isAuthenticated ? <StatsPage /> : <Navigate to="/login" />} 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
