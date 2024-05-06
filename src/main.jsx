import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  // due to this React.StrictMode useEffect(()=>{},[]) this will run twice once we remove strict mode in production it will run normally
)
