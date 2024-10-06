import React from 'react'
import { Link } from 'react-router-dom'
import Not_found from '../components/not_found'

const Maintenance = () => {
    return (
        <section className='h-screen w-full bg-primary flex-col flex justify-center items-center' >
            <div className="w-1/2 h-1/2 flex flex-col items-center justify-center text-green-500 font-medium text-xl rounded-xl">
                <Not_found /><br />
                L&apos;élément recherché n&apos;a pas été trouvé. Il sera ajouté prochainement.
            </div><br /><br />

            <Link to={"/"}>
                <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
                    <span className='font-bold text-green-500 text-xl relative z-10'>Acceuil</span>
                </button>
            </Link>
        </section>
    )
}

export default Maintenance