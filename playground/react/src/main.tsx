import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import json from './data.json'
import type { Foo } from './type'

const foo: Foo = 'React'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <div>{foo}</div>
    <div>{json.toString()}</div>
  </React.StrictMode>,
)
