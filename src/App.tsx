import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { ErrorBoundary } from '@/componets/ErrorBoundary'
import { GlobalStyle } from '@/globalStyle'
import { Home } from '@/pages/Home'
import { defaultTheme } from '@/theme'
import { store, persistorStore } from '@/store'

const HOME_ROUTE = '/'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistorStore}>
            <HashRouter>
              <Routes>
                <Route path={HOME_ROUTE} element={<Home />} />
              </Routes>
            </HashRouter>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}