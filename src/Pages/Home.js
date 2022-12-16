import React from 'react';
import { Link } from 'react-router-dom';
require("@lottiefiles/lottie-player");

const Home = () => {
    return (
        <div className=' grid lg:grid-cols-2 gap-5 container mx-auto mt-10'>
            <div className="overflow-hidden relative flex justify-center">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets6.lottiefiles.com/packages/lf20_G2nVPR715x.json"
                    style={{ width: "500px", height: "500px" }}
                ></lottie-player>
            </div>
            <div>
                <div className="overflow-hidden relative flex justify-center">
                    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                Hello !!!
                            </span>
                            <span className="block text-indigo-500">
                                I am Jubaer
                            </span>
                        </h2>
                        <p className="text-xl mt-4 text-gray-400">
                            I am a junior web developer. I have wev developing skills on react,express,node,mongo,firebase etc. I like to do my work on development and I never feel bored coding. I want to grow myself as a MERNstack Web developer. Wanna hire me?
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <a href="https://drive.google.com/file/d/13Yv8PhaCQML0jjf5Ah79lnecUOglgySS/view?usp=sharing"
                                        target='_blank'>Resume</a>
                                </button>
                                <button type="button" className="py-4 px-6 ml-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <Link to={'/projects'}
                                    >Projects</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;