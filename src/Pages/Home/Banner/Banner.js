import React from 'react';
import jobPortal from '../../../asset/jobs.jpg'


const Banner = () => {
    return (
        <div className='p-12'>
            <h1 className='text-4xl mb-4 text-center text-blue-600'>Looking for a job???? </h1>
            <h1 className='text-2xl mb-4 text-center text-amber-300'>Let's visit our website and find your best choice </h1>
            <img src={jobPortal} className='w-full'></img>
        </div>
    );
};

export default Banner;