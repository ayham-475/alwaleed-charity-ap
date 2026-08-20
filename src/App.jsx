import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// المكونات الأساسية (Layout)
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LiveChatWidget from './components/LiveChatWidget.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// صفحات الموقع
import Home from './pages/Basic_Home/Home.jsx'
import AboutUS from './pages/AboutEnterprises/About_Us.jsx'
import ProjectGoalsSection from './pages/ProjectGoals/ProjectGoalsSection.jsx'
import ProjectsSection from './pages/Basic_Home/HomeProjectsSection.jsx'
import BeneficiariesSection from './pages/Beneficiaries/BeneficiariesSection.jsx'
import Programs from './pages/AssistancePrograms/Programs.jsx'
import News from './pages/News/News.jsx'
import ApplyPage from './pages/pages general/ApplyPage.jsx'
import TrackOrder from './pages/pages general/TrackOrder.jsx'
import './App.css'
import NewsDetails from './pages/News/NewsDetails.jsx'
function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* إعادة التمرير للأعلى عند تغيير أي صفحة */}
      <ScrollToTop />

      {/* الشريط العلوي */}
      <Navbar />

      {/* المسارات والتنقل بين الصفحات */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/ProjectGoals" element={<ProjectGoalsSection />} />
          <Route path="/Projects" element={<ProjectsSection />} />
          <Route path="/Beneficiaries" element={<BeneficiariesSection />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/News" element={<News />} />
          <Route path="/ApplyPage" element={<ApplyPage />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
          <Route path="/NewsDetails/:id" element={<NewsDetails />} />
        </Routes>
      </main>

      {/* التذييل */}
      <Footer />

      {/* مكون الدعم المباشر */}
      <LiveChatWidget />
    </div>
  )
}

export default App