import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/globalStyle'
import { Home } from '@/pages/Home'
import { defaultTheme } from '@/theme'
import { store } from '@/store'

const HOME_ROUTE = '/'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
          </Routes>
        </HashRouter>
      </Provider>
    </ThemeProvider>
  )
}
