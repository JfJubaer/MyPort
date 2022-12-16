import React from 'react';


const Project = ({ p }) => {
    const { name, link, picture, details } = p;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <a href={link} target='_blank'><button className="btn btn-warning btn-outline">Details</button></a>
                        <a href={link} target='_blank'><button className="btn btn-primary">Visit site</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;