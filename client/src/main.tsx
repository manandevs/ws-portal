import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import Header from './components/layouts/Header'
import { Separator } from './components/common/Separator'
import Testing from './routes/Testing'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="relative flex min-h-screen items-stretch justify-center overflow-x-hidden bg-white select-none">
        <Separator orientation="vertical" variant="blueprint" size="w12" />
        <div className="w-full">
          <Separator orientation="horizontal" variant="blueprint" size="h3" />
          <Header />
          <Separator orientation="horizontal" variant="blueprint" size="h12" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
          <Separator orientation="horizontal" variant="blueprint" size="h12" />
        </div>
        <Separator orientation="vertical" variant="blueprint" size="w12" />
      </div>
    </BrowserRouter>
  </StrictMode>
)
