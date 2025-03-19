import React from 'react';
import {  FaChevronDown} from 'react-icons/fa';
const Navlinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Services', url: '/services' },
    { id: 4, title: 'Contact', url: '/contact' },
];
const MenuLinks = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
export default function Navbar() {
    return (
        <div className='bg-slate-500 text-slate-800'>
            <div className='container flex justify-between py-4 sm:py-3'>
                <div className='font-bold'>
                    ቋቋ
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        {Navlinks.map(({ id, title, url }) => (
                            <li key={id}>
                                <a href={url} className='inline-block hover:text-sky-500 text-xl font-semibold'>{title}</a>
                            </li>
                            
                        ))}
                        <li className=' cursor-pointer group'>
                            <a  href="/#" className=' hover:bg-sky-600 text-slate-800 px-4 py-2 rounded-md font-semibold'>
                            <div className='flex items-center gap-2'>
                            menu
                                <span>
                                    <FaChevronDown className='group-hover:rotate-180 duration-300'/>
                                </span>
                            </div>
                            </a>
                            <div>
                                <ul>
                                    {MenuLinks.map((data) => (
                                        <li key={data.id}>
                                            <a  href="/#" className=' hover:bg-sky-600 text-slate-800 px-4 py-2 rounded-md font-semibold'>{data}</a>
                                        </li>
                                    ))}</ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}