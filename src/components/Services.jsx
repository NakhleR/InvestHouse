import React from 'react';
import styles from '../index';
import CardGrid from './card-hover';
import { projects } from '../constants';

const Services = () => {
    return (
        <section id="services" className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
            {/* Gradient Background */}
            <div className='absolute z-0 w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] -right-[30%] sm:-right-[50%] top-0 rounded-full blue__gradient' />

            <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
                <h1 className={`${styles.heading2} text-center md:text-left`}>
                    Mes <br className='sm:block hidden' /> Services
                </h1>

                <div className='w-full md:mt-0 mt-6'>
                    {/* Pass responsive grid classes to CardGrid */}
                    <CardGrid items={projects} nig="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
                </div>
            </div>
        </section>
    );
};

export default Services;
