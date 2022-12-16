import React from 'react';
import Project from './Project';
import useTitle from './../Hooks/Title';

const Projects = () => {
    useTitle('Projects')
    const projects = [
        {
            name: "Edu Express",
            details: "Learn about different programming language",
            link: "https://soft-meerkat-db4ceb.netlify.app/",
            picture: "https://www.globalmediainsight.com/asset/images/website-development.jpg"
        },
        {
            name: "Tech Learning",
            details: "Gain knowledge about different tech skills",
            link: "https://tech-learning-e6097.web.app/",
            picture: "https://a2s.com.bd/wp-content/uploads/2022/09/web-dev.jpg"
        },
        {
            name: "Tution Point",
            details: "Have the real fun of online study",
            link: " https://tuition-point-79f72.firebaseapp.com/",
            picture: "https://hometutorbd.com/profile-image/photos-2017/Emamul%20shah_item_2052712_159.jpg"
        },
        {
            name: "Flipphoe",
            details: "An open platform for used devices selling and buying",
            link: "https://flipphoe-8704e.web.app/",
            picture: "https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-16.jpg?p=1"
        },
    ]
    return (
        <>
            <div class="relative z-20 flex items-center mx-auto">
                <div class="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                    <div class="flex flex-col">
                        <h1 class="w-full text-4xl font-light text-center text-indigo-600 uppercase sm:text-5xl">
                            Welcome to my projects
                        </h1>
                        <h2 class="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
                            I have done this works through react,node,mongo,express,firebase as i am a mern focused web developer.
                        </h2>
                    </div>
                </div>

            </div>
            <div className='my-10 mx-auto container grid lg:grid-cols-2 gap-10 justify-center'>
                {projects.map((p, i) => <Project key={i} p={p}></Project>)}
            </div>
        </>
    );
};

export default Projects;