import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PortalImage from '../../asset/download8.png'
import PortalImage1 from '../../asset/job-portal-1.jpg'
import PortalImage2 from '../../asset/hiring.webp'
import PortalImage3 from '../../asset/intern.jpg'
import PortalImage4 from '../../asset/search.avif'
import PortalImage5 from '../../asset/download1.png'
import PortalImage6 from '../../asset/download2.png'
import PortalImage7 from '../../asset/download3.png'
import PortalImage8 from '../../asset/download4.png'
import PortalImage9 from '../../asset/download5.jpg'
import PortalImage10 from '../../asset/download6.jpg'
import PortalImage11 from '../../asset/download7.jpg'
import Banner from './Banner/Banner';
import Job from './Job/Job';

const Home = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-white text-5xl p-6 text-center bg-black'>Here are many jobs for you</h1>
            <section className='mx-12 gap-3 m-4 block lg:grid md:grid md:grid-cols-4 bg-teal-50'>

                <div className='md:block hidden bg-neutral p-5 text-white text-center '>
                    <div className='  sticky top-0 mt-96'>
                        <Link to='/'><ul>Home</ul></Link>
                        <Link to='/about'> <ul>About</ul></Link>
                        <Link to='/about'> <ul>Contact US</ul></Link>
                        <Link to='/about'> <ul>Appointment</ul></Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4 col-span-2 shadow-xl p-4 m-4 bg-white'>
                    {
                        jobs.map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
                <div className='md:block hidden'>
                    <img src={PortalImage} className='sticky top-0' alt='Jobimage'></img>
                    <img src={PortalImage1} alt='Jobimage'></img>
                    <img src={PortalImage2} alt='Jobimage'></img>
                    <img src={PortalImage3} alt='Jobimage'></img>
                    <img src={PortalImage4} alt='Jobimage'></img>
                    <img src={PortalImage5} alt='Jobimage'></img>
                    <img src={PortalImage6} alt='Jobimage'></img>
                    <img src={PortalImage7} alt='Jobimage'></img>
                    <img src={PortalImage8} alt='Jobimage'></img>
                    <img src={PortalImage9} alt='Jobimage'></img>
                    <img src={PortalImage10} alt='Jobimage'></img>
                    <img src={PortalImage11} alt='Jobimage'></img>
                    <img src={PortalImage1} alt='Jobimage'></img>
                    <img src={PortalImage2} alt='Jobimage'></img>
                    <img src={PortalImage3} alt='Jobimage'></img>
                    <img src={PortalImage4} alt='Jobimage'></img>
                    <img src={PortalImage5} alt='Jobimage'></img>
                    <img src={PortalImage6} alt='Jobimage'></img>
                    <img src={PortalImage7} alt='Jobimage'></img>
                    <img src={PortalImage8} alt='Jobimage'></img>
                    <img src={PortalImage9} alt='Jobimage'></img>
                    <img src={PortalImage10} alt='Jobimage'></img>
                    <img src={PortalImage11} alt='Jobimage'></img>
                    <img src={PortalImage5} alt='Jobimage'></img>
                </div>
            </section>
        </div>
    );
};

export default Home;