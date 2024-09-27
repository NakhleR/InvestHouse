import React from 'react'
import styles from '../index'
import CardGrid from './card-hover'
import { projects } from '../constants'

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
                    <CardGrid items={projects} nig="grid-cols-2" />
                </div>
            </div>
        </section>
    )
}

export default Services