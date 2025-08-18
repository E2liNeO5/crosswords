import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './core/Router.tsx'
import './styles.scss'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
