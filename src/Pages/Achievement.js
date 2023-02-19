import React from 'react';

const Achievement = () => {
    return (
        <header class=" dark:bg-gray-900">
            <h1 className='text-5xl my-20 text-center text-indigo-700'>My Achievements</h1>
            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div class="max-w-lg lg:mx-12 lg:order-2">
                        <h1 class="text-3xl font-semibold tracking-wide  dark:text-white lg:text-4xl">Complete web development </h1>
                        <h2 className='text-xl my-3 text-violet-800'>Programming Hero</h2>
                        <p class="mt-4  dark:text-gray-300">I learnt web development here with full stack applications. I had a little experience before that. This course helped me to master react, node, express, mongo and firebase.</p>

                    </div>
                </div>

                <div class="flex items-center justify-center w-full lg:w-1/2">
                    <img class=" w-full h-full max-w-2xl rounded-md" src="https://i.ibb.co/DRpSR7k/IMG-20230219-231749.jpg" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Achievement;