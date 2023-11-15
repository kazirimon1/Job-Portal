import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
const Jobs = () => {
    const jobs = useLoaderData()
    return (
        <section>
            <h2 className='text-3xl text-green-700 text-center'>All Jobs Here For you</h2>
            <h4 className='text-xl text-indigo-500 text-center'> You can apply as your wish</h4>
            <div className='p-12 grid grid-cols-2 gap-4'>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div >
        </section>

    );
};

export default Jobs;