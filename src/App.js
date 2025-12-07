// src/App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
// import ScrollToTopButton from './components/ScrollToTopButton';
// import CustomCursor from './components/CustomCursor';
import Overview from './pages/Overview';

import './App.css';

// 페이지 전환 애니메이션 wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Overview /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <CustomCursor /> */}
        <>
            <Header />
            <AnimatedRoutes />
            {/* <ScrollToTopButton /> */}
          </>
      </div>
    </Router>
  );
}

export default App;
