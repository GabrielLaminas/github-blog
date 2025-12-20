import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.scss";

import { ptBR } from "date-fns/locale";
import { setDefaultOptions } from 'date-fns';
setDefaultOptions({ locale: ptBR });


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
