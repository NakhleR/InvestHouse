import React from 'react'
import styles from '..'

const MenuPrincipal = () => {
    return (
        <section id="menuPrincipal" className='h-screen bg-primary'>
            <div className={`flex w-full justify-between h-full ${styles.paddingX}`}>
                <div className={`flex items-center font-bold justify-start w-1/2 text-white ss:text-[72px] text-[55px] ${styles.paddingX}`}>
                    <div className='absolute z-0 w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient' />
                    Menu<br />Principal
                </div>
                <div className={`flex flex-col items-start w-1/3 justify-center mr-24`}>
                    <h1 className='text-white font-bold  ss:text-[45px] text-[25px]'>Qui sommes nous?</h1>
                    <span className='text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.</span>
                    <br /><br />
                    <h1 className='text-white font-bold  ss:text-[45px] text-[25px]'>Pourquoi nous?</h1>
                    <span className='text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam sed quas animi iste, obcaecati minima explicabo quibusdam. Fuga dignissimos adipisci quae officiis distinctio eos modi repellat officia iure corrupti.</span>
                </div>
            </div>

        </section>
    )
}

export default MenuPrincipal