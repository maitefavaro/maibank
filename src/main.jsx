import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from '../src/components/Navbar/Navbar'
import {Footer} from '../src/components/Footer/Footer'
import {App} from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
)
