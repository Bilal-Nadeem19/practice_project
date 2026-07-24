import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion"; // ✅ add karein
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LazyMotion features={domAnimation}>   {/* ✅ poore app ko wrap karein */}
      <App/>
    </LazyMotion>
  </BrowserRouter>
)