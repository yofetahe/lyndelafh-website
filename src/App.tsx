
import React, { useEffect, useState } from 'react';
// 1. Import HashRouter elements
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Amenities from './components/Amenities';
import Care from './components/Care';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';
// import Testimonials from './components/Testimonials';
import { useScrollReveal } from './hooks/useScrollReveal';

import AdminDashboard from './admin/AdminDashboard'; 
import FAQAccordion from './components/FrequentlyAskingQustions';

// 3. Move your existing landing page layout into a clean sub-component
function App() {
  // 1. Initialize state with the current browser URL path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useScrollReveal();

  useEffect(() => {
    // 2. Listen to back/forward browser navigation actions
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // 3. Conditional Rendering based on the clean path
  if (currentPath === '/admin/') {
    return <AdminDashboard />;
  }

  // Fallback default: Render the home layout which natively handles # hash links
  // return <LandingPage />;  
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Care />
        <Amenities />
        <Rooms />
        <Gallery />
        <Contact />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}

// // 4. Update the main App component to manage the routing
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* The main public site */}
//         <Route path="/" element={<MainLandingPage />} />

//         {/* The private staff portal accessible via ://lyndelafh.com */}
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
