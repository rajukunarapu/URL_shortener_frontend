import React from 'react'
import ErrorBoundaryComponent from './ErrorBoundaries/Errors/ErrorBoundaryComponent'
import ErrorUI from './ErrorBoundaries/Errors/ErrorUI'
import NetworkStatusComponent from './ErrorBoundaries/network/NetworkStatusComponent'
import AuthContextProvider from './Context/AuthContextProvider'
import AppRoutes from './Routes/AppRoute'

const App = () => {
  return (
    <>
      <NetworkStatusComponent>
        <ErrorBoundaryComponent fallback={<ErrorUI />}>
          <AuthContextProvider>
            <AppRoutes/>
          </AuthContextProvider>
        </ErrorBoundaryComponent>
      </NetworkStatusComponent>
    </>
  )
}

export default App;
