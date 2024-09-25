import React from 'react'
import { Contact, Hero, MenuPrincipal, Navbar, Services } from './components/index'
import styles from './index'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
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
  )
}

export default App