import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WebsiteDev from './Pages/WebsiteDev';
import Portfolio from './Pages/Portfolio';
import Leonardo from './Components/Leonardo';
import Footmetrics from './Components/Footmetrics';
import Mightydigits from './Components/Mightydigits';
import HomeDecor from './Components/HomeDecor';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails1 from './Components/BlogDetails1';
import BlogDetails2 from './Components/BlogDetails2';
import BlogDetails3 from './Components/BlogDetails3';
import Career from './Pages/Career';
import Loader from './Components/Loader'; // 🔥 Import loader
import ErrorBoundary from './Components/Loader';
import Faq from './Components/Faq';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <>
        <ErrorBoundary >
          <ScrollToTop />
          <Navbar />
          <ToastContainer style={{ width: '50%' }} position="top-center" autoClose={3000} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/why-us' element={<WebsiteDev />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog-details-1' element={<BlogDetails1 />} />
            <Route path='/blog-details-2' element={<BlogDetails2 />} />
            <Route path='/blog-details-3' element={<BlogDetails3 />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio-details-1' element={<Leonardo />} />
            <Route path='/portfolio-details-2' element={<HomeDecor />} />
            <Route path='/portfolio-details-3' element={<Mightydigits />} />
            <Route path='/portfolio-details-4' element={<Footmetrics />} />
            <Route path='/career' element={<Career />} />
            <Route path='/faq' element={<Faq />} />
          </Routes>
          <Footer />
          </ErrorBoundary>
        </>
      
    </>
  );
}

export default App;
