import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import { Toaster } from "@/components/ui/sonner"
import { AnimatePresence } from 'framer-motion';
import TransitionWrapper from '@/components/shared/TransitionWrapper';

function App() {
    const location = useLocation();
    const path = location.pathname === '/' ? 'Home' : location.pathname.substring(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Layout currentPageName={path}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
                        <Route path="/Home" element={<TransitionWrapper><Home /></TransitionWrapper>} />
                        <Route path="/About" element={<TransitionWrapper><About /></TransitionWrapper>} />
                        <Route path="/Products" element={<TransitionWrapper><Products /></TransitionWrapper>} />
                        <Route path="/Services" element={<TransitionWrapper><Services /></TransitionWrapper>} />
                        <Route path="/Projects" element={<TransitionWrapper><Projects /></TransitionWrapper>} />
                        <Route path="/Contact" element={<TransitionWrapper><Contact /></TransitionWrapper>} />
                    </Routes>
                </AnimatePresence>
            </Layout>
            <Toaster />
        </>
    );
}

export default App;
