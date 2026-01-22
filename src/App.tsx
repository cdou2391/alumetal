import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Innovation from './pages/Innovation';
import Solutions from './pages/Solutions';
import SolutionGlass from './pages/SolutionGlass';
import SolutionPowderCoating from './pages/SolutionPowderCoating';
import SolutionStructures from './pages/SolutionStructures';
import SolutionWindows from './pages/SolutionWindows';
import { Toaster } from "@/components/ui/sonner"

function App() {
    const location = useLocation();
    const path = location.pathname === '/' ? 'Home' : location.pathname.substring(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Layout currentPageName={path}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Industries" element={<Industries />} />
                    <Route path="/Innovation" element={<Innovation />} />
                    <Route path="/Solutions" element={<Solutions />} />
                    <Route path="/SolutionGlass" element={<SolutionGlass />} />
                    <Route path="/SolutionPowderCoating" element={<SolutionPowderCoating />} />
                    <Route path="/SolutionStructures" element={<SolutionStructures />} />
                    <Route path="/SolutionWindows" element={<SolutionWindows />} />
                </Routes>
            </Layout>
            <Toaster />
        </>
    );
}

export default App;
