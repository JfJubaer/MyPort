import React from 'react';

const About = () => {
    return (
        <div>

            <div className="m-10 overflow-hidden relative">
                <img src="FB_IMG_1642859288462.jpg" className="w-96 h-96 block lg:hidden" alt='' />
                <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Hi, I am Jubaer
                        </span>
                        <span className="block text-indigo-500">
                            I am a junior web developer.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 text-gray-400">
                        I am a junior web developer. I have wev developing skills on react, express, node, mongo, firebase etc. I like to do my work on development and I never feel bored coding. I want to grow myself as a MERNstack Web developer.Currently I am studying in Hajee Mohammad Danesh Science And Technology University at dinajpur Bangladesh. I live at Dinajpur in Bangladesh.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <a href="https://drive.google.com/file/d/13Yv8PhaCQML0jjf5Ah79lnecUOglgySS/view?usp=sharing"
                                target='_blank' rel='noreferrer'>
                                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    See Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="FB_IMG_1642859288462.jpg" className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block" alt='' />
                </div>
            </div>

        </div>
    );
};

export default About;