import React from 'react'
import styles from '../index'

const MenuPrincipal = () => {
    return (
        <section id="menuPrincipal" className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
            <div className='absolute z-0 w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient' />
            <div className={`w-full 
                flex justify-between items-center md:flex-row flex-col 
                sm:mb-16 mb-6 relative z-[1] ${styles.paddingX}`}>

                <h1 className={styles.heading2}>
                    Menu <br className='sm:block hidden' /> Principal
                </h1>
                <div className={`w-full md:mt-0 mt-6`}>
                    <h1 className={`font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Qui sommes nous?</h1>
                    <span className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.</span>
                    <br /><br />
                    <h1 className={`font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Pourquoi nous?</h1>
                    <span className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.</span>
                </div>
            </div>
        </section>
    )
}

export default MenuPrincipal