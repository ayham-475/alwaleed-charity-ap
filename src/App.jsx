import { useState } from 'react'
import Home from './pages/Basic_Home/Home.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutUS from './pages/AboutEnterprises/About_Us.jsx'
import ProjectGoalsSection from './pages/ProjectGoals/ProjectGoalsSection.jsx'
import ProjectsSection from './pages/Basic_Home/HomeProjectsSection.jsx'
import BeneficiariesSection from './pages/Beneficiaries/BeneficiariesSection.jsx'
import Programs from './pages/AssistancePrograms/Programs.jsx'
import News from './pages/News/News.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/ProjectGoals" element={<ProjectGoalsSection />} />
        <Route path="/Projects" element={<ProjectsSection />} />
        <Route path="/Beneficiaries" element={<BeneficiariesSection />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/News" element={<News />} />


       
      </Routes>
       <Footer />

    </>
  )
}

// # التصميم والأيقونات والانيميشن
// npm install -D tailwindcss postcss autoprefixer
// npm install lucide-react framer-motion clsx tailwind-merge 

// # إدارة التنقل (Routing)
// npm install react-router-dom

// # جلب البيانات وإدارة الحالة (Data Fetching & State)
// npm install @tanstack/react-query axios zustand

// # إدارة النماذج والتحقق من البيانات (Forms & Validation)
// npm install react-hook-form @hookform/resolvers zod

// # التنبيهات والإشعارات (Toast Notifications)
// npm install react-hot-toast

export default App
