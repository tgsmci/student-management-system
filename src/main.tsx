import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Airtable from 'airtable'

const base = new Airtable({
  endpointUrl: import.meta.env.VITE_AIRTABLE_ENDPOINT_URL,
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App base={base} />
  </React.StrictMode>
)
