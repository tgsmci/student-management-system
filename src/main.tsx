import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Airtable from 'airtable'
import '@shoelace-style/shoelace/dist/themes/light.css'
import './index.css'

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.83/dist/')

const base = new Airtable({
  endpointUrl: import.meta.env.VITE_AIRTABLE_ENDPOINT_URL,
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App base={base} />
  </React.StrictMode>
)
