import React from 'react'
import ReactDOM from 'react-dom/client'

import AppContext from './5-getContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <AppContext/>
    
  </React.StrictMode>,
)
