import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translate/es/global.json'
import global_en from './translate/en/global.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './components/Blog/Blog.jsx'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
              <Route path='/blog' element={<Blog />} />
            </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
