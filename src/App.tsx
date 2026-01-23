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
                        <Route path="/Contact" element={<TransitionWrapper><Contact /></TransitionWrapper>} />
                        <Route path="/Industries" element={<TransitionWrapper><Industries /></TransitionWrapper>} />
                        <Route path="/Innovation" element={<TransitionWrapper><Innovation /></TransitionWrapper>} />
                        <Route path="/Solutions" element={<TransitionWrapper><Solutions /></TransitionWrapper>} />
                        <Route path="/SolutionGlass" element={<TransitionWrapper><SolutionGlass /></TransitionWrapper>} />
                        <Route path="/SolutionPowderCoating" element={<TransitionWrapper><SolutionPowderCoating /></TransitionWrapper>} />
                        <Route path="/SolutionStructures" element={<TransitionWrapper><SolutionStructures /></TransitionWrapper>} />
                        <Route path="/SolutionWindows" element={<TransitionWrapper><SolutionWindows /></TransitionWrapper>} />
                    </Routes>
                </AnimatePresence>
            </Layout>
            <Toaster />
        </>
    );
}

export default App;
