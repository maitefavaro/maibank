import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Pages/Login/index'
import { Cadastro } from './Pages/Cadastro/index'
import { Dashboard } from './Pages/Dashboard/index'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard/:cpf" element={<Dashboard />}/>
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
