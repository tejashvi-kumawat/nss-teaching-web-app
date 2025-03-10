import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Data from './store/Data.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <StrictMode>
      <Data>
          <App />
      </Data>
    </StrictMode>,
  </BrowserRouter>

)
