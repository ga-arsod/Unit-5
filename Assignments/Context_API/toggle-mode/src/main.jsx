import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToggleContextProvider } from './Contexts/ToggleContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </React.StrictMode>
)
