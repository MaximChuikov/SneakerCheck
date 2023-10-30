import React from 'react'
import MyApp from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { App, ConfigProvider } from 'antd'
import appTheme from './styles/antd-app-theme'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Provider store={store}>
  <BrowserRouter>
    <ConfigProvider theme={appTheme}>
      <App>
        <MyApp />
      </App>
    </ConfigProvider>
  </BrowserRouter>
</Provider>)