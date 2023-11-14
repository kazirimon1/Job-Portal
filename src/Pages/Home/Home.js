import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job/Job';

const Home = () => {
    const jobs = useLoaderData()

    return (
        <section className='mx-12 gap-3 m-4 block lg:grid md:grid md:grid-cols-4 bg-teal-50'>
            <div className='md:block hidden'></div>
            <div className='grid grid-cols-1 gap-4 col-span-2 shadow-xl p-4 m-4 bg-white'>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className='md:block hidden'></div>
        </section>
    );
};

export default Home;