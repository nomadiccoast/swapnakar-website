import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Team from '../pages/Team'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Team />
    <Footer />
  </React.StrictMode>
)
