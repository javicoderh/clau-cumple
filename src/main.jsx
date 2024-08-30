import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DrinksProvider } from './drinks.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DrinksProvider>
    <App />
  </DrinksProvider> 
  </React.StrictMode>      ,
)
