import React from 'react';
import { Link } from 'react-router-dom';

const Nopage = () => {
    return (
        <div>
            <div className="relative h-screen overflow-hidden bg-indigo-900">
                <img src="https://i.pinimg.com/736x/a6/60/02/a6600229a75edcf160643dcf32531cd4.jpg" className="absolute object-cover w-full h-full" alt='' />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                    <div className="relative z-10 flex flex-col items-center w-full font-mono">
                        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                            You&#x27;re alone here
                        </h1>
                        <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
                            404
                        </p><br />
                        <button className="btn btn-active"><Link to={'/'}>GO HOME</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nopage;