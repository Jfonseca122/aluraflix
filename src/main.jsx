import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ResetCss from './componentes/ResetCss/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetCss></ResetCss>
    <App />
  </StrictMode>,
)
