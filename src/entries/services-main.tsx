import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Services from '../pages/Services'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Services />
    <Footer />
  </React.StrictMode>
)
