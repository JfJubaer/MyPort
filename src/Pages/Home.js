import React from 'react';
require("@lottiefiles/lottie-player");

const Home = () => {
    return (
        <section class="container mx-auto dark:bg-gray-900">
            <div class=" px-6 lg:px-32 py-10 mx-auto">
                <div class="lg:mx-6 lg:flex lg:items-center">
                    <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://i.ibb.co/JqSvYdB/25542589-1940074949642925-644966441285511474-o.jpg" alt="" />

                    <div class="mt-8 lg:w-9/12 lg:pl-20 lg:ml-20 lg:mt-0">
                        <p class="text-5xl font-semibold text-blue-500 ">“</p>

                        <h1 class="text-2xl font-semibold  dark:text-white lg:text-5xl lg:w-96">
                            Hello It's <span className='text-indigo-700'>Jubaer</span>
                        </h1>
                        <h2 className='my-2 lg:text-2xl text-xl '>MERN stack web developer</h2>

                        <p class="max-w-lg mt-6 text-xl text-gray-500 dark:text-gray-400 ">
                            “ I am a junior web developer. I have web developing skills on different technologies like react, express, node, mongo, javaScript, JWT, Tailwind, Bootstrap, firebase etc. I like to do my work on development and I never feel bored doing code. As Web development is a fast-paced, challenging career centered on creative problem-solving and continuous innovation, I would like to grow myself as a MERN stack Web developer.Currently I am studying in Hajee Mohammad Danesh Science And Technology University at Dinajpur Department of Electrical and Electronic Engineering faculty of Computer Science and Engineering.”
                        </p>

                        <h3 class="mt-6 text-lg font-medium text-blue-500">From</h3>
                        <p class="text-gray-600 dark:text-gray-300">Panchagarh, Bangladesh.</p>

                        <div class="flex items-center justify-between mt-12 lg:justify-start">
                            <a href="https://drive.google.com/file/d/13Yv8PhaCQML0jjf5Ah79lnecUOglgySS/view?usp=sharing"
                                target='_blank' rel='noreferrer' class="relative px-6 py-3 font-bold text-black group">
                                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span class="relative">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // {/* <div className=" flex justify-center">
        //     <lottie-player
        //         autoplay
        //         loop
        //         mode="normal"
        //         src="https://assets6.lottiefiles.com/packages/lf20_G2nVPR715x.json"
        //         style={{ width: "500px", height: "500px" }}
        //     ></lottie-player>
        // </div> */}


        // {/* <div className="flex justify-center">
        //     <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        //         <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        //             <span className="block">
        //                 Hello !!!
        //             </span>
        //             <span className="block text-indigo-500">
        //                 I am Jubaer
        //             </span>
        //         </h2>
        //         <p className="text-xl mt-4 text-gray-400">
        //             I am a junior web developer. I have wev developing skills on react, express, node, mongo, firebase etc. I like to do my work on development and I never feel bored coding. I want to grow myself as a MERNstack Web developer. Wanna hire me?
        //         </p>
        //         <div className="lg:mt-0 lg:flex-shrink-0">
        //             <div className="mt-12 inline-flex rounded-md shadow">
        //                 <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">

        //                 </button>
        //                 <button type="button" className="py-4 px-6 ml-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        //                     <Link to={'/projects'}
        //                     >Projects</Link>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div> */}



    );
};

export default Home;