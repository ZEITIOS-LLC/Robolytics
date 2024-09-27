import React from 'react'
import { Link } from 'react-scroll'

const MobileNav = ({ nav, navitems, toggleNav }) => {
  return (
    <div className={nav ? 'mobilenav translate-x-[0rem] ease-out transition opacity-100 duration-[600ms]' : 'mobilenav translate-x-[-120rem] transition ease-in duration-500'}>
        <div className='py-8 mx-6 backdrop-blur-2xl bg-white shadow-xl rounded-xl border-[1px] border-[#777]'>
            <div className='flex flex-col gap-4 text-sm dark:text-[#7d7979] text-[black] items-center'>
                {navitems.map((nav) => (
                    <Link onClick={toggleNav} key={nav.number} className='font-body text-base cursor-pointer hover:opacity-50' activeClass='text-black/50' spy={true} smooth={true} offset={-100} duration={500} to={nav.path}>
                        {nav.text}
                    </Link>
                ))}
                <button className="bg-primary mx-auto text-black rounded-md px-3 py-2 ml-auto cursor-pointer border border-primary hover:bg-transparent hover:border-primary">Schedule Demo</button>
            </div>
        </div>
    </div>
  )
}

export default MobileNav