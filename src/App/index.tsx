import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/globalStyle'
import { Home } from '@/pages/Home'
import { defaultTheme } from '@/theme'

const HOME_ROUTE = '/'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
