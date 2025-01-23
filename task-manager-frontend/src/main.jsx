import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../store.js'
import './index.css'
import App from './App.jsx'

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
