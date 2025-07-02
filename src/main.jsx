import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWordApp } from './HelloWordApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWordApp
      user={{ nombre: 'Juan', edad: 30 }}
      contenido="Este es un contenido de ejemplo"
      titulo="Bienvenido a mi aplicación"
    />
  </StrictMode>,
)
