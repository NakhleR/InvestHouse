import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Hero, MenuPrincipal, Navbar, Services } from './components/index';
import './index.css';
import { Maintenance, Rejoindre } from './views';
import styles from './index';

const App = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Clean up to avoid any issues in case of component unmounting
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <BrowserRouter>
      <div className='bg-primary w-full overflow-hidden'>
        <Routes>
          <Route path='/' element={
            <div>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <Hero />
              <MenuPrincipal />
              <Services />
              <Contact />
            </div>
          } />
          <Route path='/rejoindre' element={<Rejoindre />} />
          <Route path='/maintenance' element={<Maintenance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
