/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const HoverEffect = ({ items, className }) => {

    return (
        <div
            className={`grid grid-cols-2 ${className}`}
        >
            {items.map((item) => (
                <Link
                    to={item?.link}
                    key={item?.title}
                    className="relative group block p-2  w-full"
                    onClick={() => { window.scrollTo(0, 0); }}
                >
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

const Card = ({ children }) => {
    return (
        // <motion.div
        //     whileHover={{ scale: 0.9 }}
        //     className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-primary border border-transparent dark:border-white/[0.2] group-hover:border-green-500 relative z-20 ${className}`}
        // >
        //     <div className="relative z-50">
        //         <div className="p-4">{children}</div>
        //     </div>
        // </motion.div>

        <motion.div
            whileHover={{ scale: 0.9 }}
            className="h-full w-full border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#2a1e85] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-center flex-col gap-[0.75em] backdrop-blur-[12px]"
        >
            <div className="relative z-50">
                <div>{children}</div>
            </div>
            <button
                className="h-fit w-fit text-[13px] font-poppins px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
            >
                En savoir plus
                <svg
                    className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </button>
        </motion.div>

    );
};

const CardTitle = ({ className, children }) => {
    return (
        <h4 className={`text-zinc-100 font-bold tracking-wide font-poppins mt-4 ${className}`}>
            {children}
        </h4>
    );
};

const CardDescription = ({ className, children }) => {
    return (
        <p
            className={`mt-8 text-zinc-400 tracking-wide leading-relaxed font-poppins text-sm ${className}`}
        >
            {children}
        </p>
    );
};

export { HoverEffect, Card, CardTitle, CardDescription };