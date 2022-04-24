import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ChakraProvider} from "@chakra-ui/react"
import { ToggleContextProvider } from './Contexts/ToggleContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
