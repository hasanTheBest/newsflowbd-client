import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SettingContextProvider from './context/SettingContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SettingContextProvider>
      <App />
    </SettingContextProvider>
    </BrowserRouter>
  </StrictMode>
)
