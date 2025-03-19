import React from 'react';
import {  FaChevronDown, FaUser} from 'react-icons/fa';
const Navlinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Services', url: '/services' },
    { id: 4, title: 'Contact', url: '/contact' },
];
const MenuLinks = [ { id: 1, name: 'kuakua special', url: '/' },
    {id: 2, name: 'kuakua normal', url: '/' },
    { id: 3, name: 'sandwich', url: '/' },
    { id: 4, name: 'chips', url: '/' },];
export default function Navbar() {
    return (
        <div className='bg-slate-500 text-slate-800'>
            <div className='container flex justify-between py-4 sm:py-3 '>
                <div className='font-extrabold text-2xl'>
                    ቋቋ
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        {Navlinks.map(({ id, title, url }) => (
                            <li key={id}>
                                <a href={url} className='inline-block hover:text-sky-500 text-xl font-semibold'>{title}</a>
                            </li>
                            
                        ))}
                        <li className='cursor-pointer group relative'>
    <a href="/#" className='hover:bg-sky-600 text-slate-800 px-4 py-2 rounded-md font-semibold'>
        <div className='flex items-center gap-2'>
            menu
            <span>
                <FaChevronDown className='group-hover:rotate-180 duration-300' />
            </span>
        </div>
    </a>
    {/* Dropdown menu */}
    <div className='absolute z-50 hidden group-hover:block w-[200px] bg-white text-black shadow-md'>
        <ul>
            {MenuLinks.map(({ id, name, url }) => (
                <li key={id}>
                    <a href={url} className='block px-4 py-2 hover:bg-sky-600 text-slate-800 rounded-md font-semibold'>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
</li>
<li>
    <button className='flex justify-center items-center gap-2 bg-sky-400 text-xl  px-4 py-2 h-[40px] text-white hover:scale-105 duration-300 font-semibold'>
        <FaUser/>
        My account
    </button>
</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}