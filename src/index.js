import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import App from '@/App'
import '@/assets/sass/custom.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
        </Routes>
    </HashRouter>
)
