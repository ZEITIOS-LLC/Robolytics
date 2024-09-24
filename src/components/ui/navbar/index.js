'use client'

import React, {useState} from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { Link } from 'react-scroll'
import { Bot } from "lucide-react";
//import MobileNav from "./MobileNav";

const NavItems = [
    {
        id: 1,
        text: 'Home',
        path: 'home'
    },
    {
        id: 2,
        text: 'About',
        path: 'about'
    },
    {
        id: 3,
        text: 'Services',
        path: 'services'
    },
    {
        id: 4,
        text: 'The Team',
        path: 'the-team'
    },
    {
        id: 5,
        text: 'Why Us',
        path: 'why-us'
    },
    {
        id: 6,
        text: 'Contact Us',
        path: 'contact-us'
    }
]

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='navbar py-4 lg:py-0 sticky top-0 z-[99]'>
        <nav className='container mt-2 px-8 lg:px-12 mx-auto flex justify-between items-center'>
            <div className='w-[40%] sm:w-fit'>
                <h1 className="flex tracking-wide font-[900] text-2xl items-center">R<span><Bot /></span>BOLYTICS</h1>
            </div>
            <div className='hidden min-w-[60%] py-4 lg:flex items-end justify-between gap-3 xl:gap-5'>
                <ul className='navlinks ml-auto rounded-full flex justify-between'>
                    {NavItems.map((item) => (
                        <Link className='link' key={item.id} to={item.path} spy={true} smooth={true} activeClass="active" offset={-150} duration={500}>
                            {item.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='lg:hidden'>
                <button onClick={toggleNav} data-toggle-nav data-open-nav={nav} className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative z-[105]">
                    <span id="line1" className="bg-greenish w-6 h-[2px] rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> 
                    <span id="line2" className="bg-greenish w-6 origin-center mt-1 h-[2px] rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> 
                    <span id="line3" className="bg-greenish w-6 mt-1 h-[2px] rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span>                         
                    <span className="sr-only">togglenav</span>
                </button>
            </div>
        </nav>
        {/* <MobileNav nav={nav} toggleNav={toggleNav} navitems={NavItems} /> */}
    </div>
  )
}

export default Navbar