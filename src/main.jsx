import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WasdProvider from './context/Wasd.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WasdProvider>
      <App />
    </WasdProvider>
  </BrowserRouter>
)
