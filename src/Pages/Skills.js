import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'react', image: 'https://i.ibb.co/pdGL2cX/community-Icon-4g1uo0kd87c61.png' },
        { name: 'Node', image: 'https://i.ibb.co/X8NWyVn/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png' },
        { name: 'Express', image: 'https://i.ibb.co/vcjrgcH/st-small-507x507-pad-600x600-f8f8f8-u2.jpg' },
        { name: 'Java Script', image: 'https://i.ibb.co/cr33T9H/5968292.png' },
        { name: 'MongoDB', image: 'https://i.ibb.co/zXvgkG9/mongodb-icon.png' },
        { name: 'Tailwind', image: 'https://i.ibb.co/6n0H3fd/download.png' },
        { name: 'Bootstrap', image: 'https://i.ibb.co/HqFjmrv/download.jpg' },
        { name: 'Firebase', image: 'https://i.ibb.co/D1g4XHL/google-firebase-2-512.webp' },
        { name: 'Html 5', image: 'https://i.ibb.co/3BSh53W/download-1.png' },
        { name: 'CSS3', image: 'https://i.ibb.co/qr1DV5j/css-vector-cascading-style-language-260nw-2045833928.webp' },
        { name: 'JWT', image: 'https://i.ibb.co/dmpzNJk/download-2.png' },
        { name: 'Python', image: 'https://i.ibb.co/M2HddRn/768px-Python-svg.png' },
    ];
    return (
        <div className='container mx-auto lg:my-32 my-10'>
            <h1 className='text-5xl mt-10 text-center text-indigo-700'>My skills set</h1>
            <div className='grid lg:grid-cols-4 text-center mx-20 mt-10 gap-10'>
                {skills.map((skill, i) => <div class="space-y-6">
                    <div class="flex items-center gap-x-2">
                        <img class="object-cover w-16 h-16 rounded-full" src={skill.image} alt="" />

                        <div>
                            <h1 class="text-xl font-semibold capitalize dark:text-white">{skill.name}</h1>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Skills;