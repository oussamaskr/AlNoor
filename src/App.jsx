import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./Conponents/Navbar/Navbar"
import Footer from "./Conponents/Footer/Footer"
import Home from './Pages/Home';
import About from './Pages/About';
import LoadingSpinner from './Conponents/LoadingSpinner'; // Create this component
import PageNotFound from './Pages/PageNotFound'; // Create this component
import Login from './Pages/Login';

// Lazy-loaded pages
const Brands = lazy(() => import('./Pages/Brands'));
const Perfumes = lazy(() => import('./Pages/Perfumes'));

function App() {
    const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Navbar />}
      
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* Lazy-loaded routes */}
            <Route path="/brands" element={<Brands />} />
            <Route path="/perfumes" element={<Perfumes />} />
            
            {/* 404 route - should be last */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;