import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../index';
import { BentoGrid, BentoGridItem } from '../components/bento-grid';
import { courses } from '../constants';

const Rejoindre = () => {
    return (
        <section className='bg-primary w-full h-screen p-6 sm:p-16 overflow-y-auto'>
            <Link to={"/"} className='text-white text-[16px] sm:text-[20px] hover:text-green-500 font-poppins font-semibold'>
                Menu Principal
            </Link>

            <div className='flex flex-col w-full items-center justify-center mt-4 sm:mt-8'>
                <h1 className={`${styles.heading2} text-center text-[28px] sm:text-[48px]`}>
                    Nous Rejoindre
                </h1>
            </div>

            <br />

            <BentoGrid>
                {courses.map((course, idx) => (
                    <BentoGridItem
                        key={idx}
                        title={course.title}
                        description={course.description}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Rejoindre;
