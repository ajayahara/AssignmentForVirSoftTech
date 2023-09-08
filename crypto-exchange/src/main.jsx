import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CryptoContextProvider } from './context/CryptoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CryptoContextProvider>
    <App />
  </CryptoContextProvider>
)
