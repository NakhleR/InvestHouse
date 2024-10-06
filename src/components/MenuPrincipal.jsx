import React from 'react';
import styles from '../index';

const MenuPrincipal = () => {
    return (
        <section id="menuPrincipal" className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
            {/* Gradient Background */}
            <div className='absolute z-0 w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] -left-[30%] sm:-left-[50%] top-0 rounded-full blue__gradient' />

            <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
                {/* Heading */}
                <h1 className={`${styles.heading2} text-center md:text-left`}>
                    Menu <br className='sm:block hidden' /> Principal
                </h1>

                {/* Content */}
                <div className={`w-full md:mt-0 mt-6`}>
                    {/* Section 1: Qui sommes nous? */}
                    <h1 className={`font-poppins font-semibold xs:text-[38px] text-[28px] text-white xs:leading-[66.8px] leading-[50px] w-full text-center md:text-left`}>
                        Qui sommes nous?
                    </h1>
                    <p className={`${styles.paragraph} text-center md:text-left`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.
                    </p>
                    <br />

                    {/* Section 2: Pourquoi nous? */}
                    <h1 className={`font-poppins font-semibold xs:text-[38px] text-[28px] text-white xs:leading-[66.8px] leading-[50px] w-full text-center md:text-left`}>
                        Pourquoi nous?
                    </h1>
                    <p className={`${styles.paragraph} text-center md:text-left`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MenuPrincipal;
