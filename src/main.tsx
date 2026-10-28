import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PimoluProvider } from '@pimolu/react'
import '@pimolu/web-styles/styles.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PimoluProvider defaultTheme="system">
      <App />
    </PimoluProvider>
  </StrictMode>,
)
