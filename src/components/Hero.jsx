import React from 'react';

const Hero = () => {

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="acceuil" className={`flex flex-col h-[100vh] items-center justify-center`}>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <h1 className='font-poppins font-semibold text-center text-white 
                       xs:text-[72px] text-[40px] xs:leading-[100px] leading-[60px]'>
                    Invest&apos;House
                </h1>
                <span className='text-center text-white text-sm xs:text-base'>By Vieira Nathan</span><br /><br />
                <a href='#menuPrincipal'>
                    <button
                        className="cursor-pointer relative group overflow-hidden border-2 px-6 py-2 xs:px-8 border-green-500"
                        onClick={enableScroll}
                    >
                        <span className="font-bold text-white text-base xs:text-xl relative z-10 group-hover:text-green-500 duration-500">Explorer</span>
                        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                        <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Hero;
