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
export default function Navbar({HandlePopup}) {
    return (
        <div className='bg-gray-300 text-stone-950 '>
            <div className='container flex justify-between py-2 px-4'>
                <div className='font-extrabold text-xl'>
                    ቋቋ
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        {Navlinks.map(({ id, title, url }) => (
                            <li key={id}>
                                <a href={url} className=' hidden sm:inline-block hover:text-sky-500 text-xs font-semibold'>{title}</a>
                            </li>
                            
                        ))}
                        <li className='cursor-pointer group relative'>
    <a href="/#" className='hover:bg-sky-600 text-stone-950 px-4 py-2 rounded-md text-xs'>
        <div className='  sm:inline-block grid grid-cols-2 items-center gap-2'>
            <h1>
            menu
            </h1>
            <div>
                <FaChevronDown className='group-hover:rotate-180 duration-300' />
            </div>
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
    <button  onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-sky-400 text-xl  px-4 py-2 h-[20px] text-white hover:scale-105 duration-300 font-semibold'>
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
