import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import DoctorsPage from './pages/DoctorsPage';
import BlogPage from './pages/BlogPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
