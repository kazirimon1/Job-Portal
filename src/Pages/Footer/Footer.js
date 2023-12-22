import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <h1 className='text-3xl text-white flex items-center'>© 2023 Kazi Shahadat Hossen All rights reserved.</h1>
            <nav>
                <header className="footer-title">Services</header>
                <Link to='/' className="link link-hover">Branding</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Marketing</Link>
                <Link to='/' className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;