import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import MainLayout from "./layouts/MainLayout"
import Home from './pages/Home'
import PlantData from './pages/PlantData'
import DiseaseData from './pages/DiseaseData'
import PlantDetails from './pages/PlantDetails'
import DiseaseDetails from './pages/DiseaseDetails'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plants-list" element={<PlantData />} />
          <Route path="/disease-list" element={<DiseaseData/>}/>          
        </Route>
        <Route path="/plant-details/:id" element={<PlantDetails/>}/>
        <Route path="/disease-details/:id" element={<DiseaseDetails/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
