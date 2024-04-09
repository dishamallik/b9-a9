import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<FirebaseProvider>
<RouterProvider router={routes} />
</FirebaseProvider>

  </React.StrictMode>,
)
