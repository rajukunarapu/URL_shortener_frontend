import React, { Suspense, lazy,} from 'react'
import PageLoading from '../Components/PageLoading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';

const AppRoutes = () => {

    const { loading, isAuthenticated } = useContext(AuthContext);

    if(loading) {
        return <PageLoading />;
    }

    console.log({isAuthenticated});
    console.log({loading})


    const HomePage = lazy(() => import('../pages/HomePage'))
    const LoginPage = lazy(() => import('../pages/LoginPage'))
    const SignupPage = lazy(() => import('../pages/SignupPage'))

  return (
    <>
        <BrowserRouter>
            <Suspense fallback={<PageLoading/>}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/signup" element={<SignupPage/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes;
