import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import './index.css';
import Home from './pages/Home/home';
import Header from './Components/header';
import Footer from './Components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <ScrollToHashElement behavior="smooth" inline="center" />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
    </Router>
);
