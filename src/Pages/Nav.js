import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';


const Nav = () => {

    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <div className="navbar bg-base-100 shadow-2xl">
            <div class="dropdown block md:hidden">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li> <Link to='/projects'>
                        Projects
                    </Link></li>
                    <li><a href="https://drive.google.com/file/d/13Yv8PhaCQML0jjf5Ah79lnecUOglgySS/view?usp=sharing"
                        target='_blank' rel='noreferrer'>Resume</a></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
            <div className="flex-1">

                <Link to='/' className="btn btn-ghost normal-case font-extrabold text-2xl text-indigo-600">
                    <img className="w-12 rounded-full" src="FB_IMG_1642859288462.jpg" alt="" />
                    <span className='hidden md:block'>Md. Jubaer-Al-Imran Khan</span>
                    <span className='block md:hidden'>Jubaer</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <svg data-set-theme="dark" className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg data-set-theme="light" data-act-class="ACTIVECLASS" className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </li>
                    <li className='hidden md:block'>
                        <a href="https://drive.google.com/file/d/13Yv8PhaCQML0jjf5Ah79lnecUOglgySS/view?usp=sharing"
                            target='_blank' rel='noreferrer'>Resume</a>
                    </li>
                    <li className='hidden md:block'>
                        <Link to={'/projects'}>
                            Projects
                        </Link>
                    </li>
                    <li className='hidden md:block'><Link to={'/about'}>About</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Nav;