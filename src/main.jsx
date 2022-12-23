import React from 'react'
import {App} from './App/App'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'

import GlobalStyles from './styles/global';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
