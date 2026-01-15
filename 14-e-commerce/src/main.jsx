import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { MyProvider } from './Context/useContext.jsx';

createRoot(document.getElementById('root')).render(
 
  <MyProvider>
     <BrowserRouter>
         <App />
     </BrowserRouter>
   
  </MyProvider>

  
)
