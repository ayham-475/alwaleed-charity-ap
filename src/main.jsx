import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'; // تأكد من المسار الصحيح
import { BrowserRouter } from 'react-router-dom' // استدعاء الموزع
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <BrowserRouter>
  
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
