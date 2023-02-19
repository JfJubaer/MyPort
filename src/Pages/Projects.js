import React from 'react';
import Project from './Project';
import useTitle from './../Hooks/Title';

const Projects = () => {
    useTitle('Projects')
    const projects = [
        {
            name: "Tution Point",
            details: "Have the real fun of online study",
            link: " https://tuition-point-79f72.firebaseapp.com/",
            picture: "https://i.ibb.co/Ctcdgh8/Screenshot-2023-02-19-234238.png"
        },
        {
            name: "Flipphoe",
            details: "open platform for used devices sell and buy",
            link: "https://flipphoe-8704e.web.app/",
            picture: "https://i.ibb.co/W0Gdnb7/Screenshot-2023-02-19-234351.png"
        },
        {
            name: "Tech Learning",
            details: "Gain knowledge about different tech skills",
            link: "https://tech-learning-e6097.web.app/",
            picture: "https://i.ibb.co/r4RgcwR/Screenshot-2023-02-19-234440.png"
        },
        {
            name: "Edu Express",
            details: "Learn about different programming language",
            link: "https://soft-meerkat-db4ceb.netlify.app/",
            picture: "https://i.ibb.co/nRbzsyy/Screenshot-2023-02-19-234543.png",
        },
    ]
    return (
        <div id='projects' className='mt-32 container mx-auto'>
            <div className="relative  flex items-center mx-auto">
                <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                    <div className="flex flex-col">
                        <h1 className="w-full text-5xl font-light text-center text-indigo-700 uppercase sm:text-5xl">
                            Welcome to my projects
                        </h1>
                        <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center  dark:text-white">
                            I have done this works through react,node,mongo,express,firebase,jwt etc. as I am a MERN focused web developer.
                        </h2>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-2 items-center'>
                {projects.map((p, i) => <Project key={i} p={p}></Project>)}
            </div>
        </div>
    );
};

export default Projects;