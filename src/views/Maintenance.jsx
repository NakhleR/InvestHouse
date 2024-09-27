import React from 'react'
import { Link } from 'react-router-dom'

const Maintenance = () => {
    return (
        <section className='h-screen w-full bg-primary flex-col flex justify-center items-center' >
            <div className="w-1/2 h-1/2 shadow-sm shadow-slate-300 rounded-xl" style={{
                backgroundImage: `url("/coming-soon-page.webp")`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
            }}>

            </div><br />

            <Link to={"/"}>
                <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
                    <span className='font-bold text-green-500 text-xl relative z-10'>Acceuil</span>
                </button>
            </Link>
        </section>
    )
}

export default Maintenance