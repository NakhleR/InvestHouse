import React from 'react'
import styles from '../index'

const Services = () => {
    return (
        <section id="services" className={`${styles.paddingY} h-screen ${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
            <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

            <div className={`w-full 
                flex justify-between items-center md:flex-row flex-col 
                sm:mb-16 mb-6 relative z-[1] ${styles.paddingX}`}>
                <h1 className={styles.heading2}>
                    Mes <br className='sm:block hidden' /> Services
                </h1>
                <div className='w-full md:mt-0 mt-6'>
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services