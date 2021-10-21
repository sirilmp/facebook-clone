import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { TiGroup } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineMenu,AiOutlinePlus } from "react-icons/ai";

function Header() {


    const [status, setStatus] = useState('home')

    return (
        <div className='dark:bg-gray-900 flex justify-between px-2 items-center h-20 w-full border-b border-gray-700 sticky top-0'>
            <div className='flex justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M16.6667 39.7778C7.22222 38.1111 0 29.8889 0 20C0 9 9 0 20 0C31 0 40 9 40 20C40 29.8889 32.7778 38.1111 23.3333 39.7778L22.2222 38.8889H17.7778L16.6667 39.7778Z" fill="url(#paint0_linear_2:5)" />
                    <path d="M27.7778 25.5555L28.6667 20H23.3333V16.1111C23.3333 14.5555 23.8889 13.3333 26.3333 13.3333H28.8889V8.22222C27.4444 7.99999 25.8889 7.77777 24.4444 7.77777C19.8889 7.77777 16.6667 10.5555 16.6667 15.5555V20H11.6667V25.5555H16.6667V39.6667C17.7778 39.8889 18.8889 40 20 40C21.1111 40 22.2222 39.8889 23.3333 39.6667V25.5555H27.7778Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_2:5" x1="20" y1="38.6156" x2="20" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0062E0" />
                            <stop offset="1" stop-color="#19AFFF" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* visible at screen size more than XL */}
                <div className='xl:flex dark:bg-gray-700 items-center ml-4 rounded-full hidden'>
                    <GoSearch className=" dark:text-gray-400 mx-3 text-lg" />
                    <input className='dark:bg-gray-700 dark:text-gray-400 font-semibold focus:outline-none placeholder-gray-400 mr-3' placeholder='Search Facebook' type="text" />
                </div>
                {/* visible at screen size less than XL */}
                <div className='xl:hidden dark:bg-gray-700 items-center ml-4 rounded-full flex'>
                    <GoSearch className=" dark:text-gray-400 mx-3 text-lg" />
                </div>
            </div>

            <div className='items-center h-full hidden sm:flex'>
                <div className={`h-full border-b-4 py-3 ${status === 'home' ? 'border-blue-600 py-3' : 'border-transparent'}`}>
                    <div className={`h-full cursor-pointer ${status !== 'home' && 'dark:hover:bg-gray-600'} duration-200 rounded-md`} onClick={() => { setStatus('home') }} >
                        <div className='rounded-md h-full md:w-24 w-14 flex items-center justify-center ml-2 mr-2'>
                            <IoMdHome className={`${status === 'home' ? 'dark:text-blue-600' : 'dark:text-gray-400'} mx-3 md:text-3xl text-2xl`} />
                        </div>
                    </div>
                </div>
                <div className={`h-full border-b-4 py-3 ${status === 'friends' ? 'border-blue-600 py-3' : 'border-transparent'}`}>
                    <div className={`h-full cursor-pointer ${status !== 'friends' && 'dark:hover:bg-gray-600'} duration-200 rounded-md`} onClick={() => { setStatus('friends') }} >
                        <div className='rounded-md h-full md:w-24 w-14 flex items-center justify-center ml-2 mr-2'>
                            <FiUsers className={`${status === 'friends' ? 'dark:text-blue-600' : 'dark:text-gray-400'} mx-3 md:text-3xl text-2xl`} />
                        </div>
                    </div>
                </div>
                <div className={`h-full border-b-4 py-3 ${status === 'groups' ? 'border-blue-600 py-3' : 'border-transparent'}`}>
                    <div className={`h-full cursor-pointer ${status !== 'groups' && 'dark:hover:bg-gray-600'} duration-200 rounded-md`} onClick={() => { setStatus('groups') }} >
                        <div className='rounded-md h-full md:w-24 w-14 flex items-center justify-center ml-2 mr-2'>
                            <TiGroup className={`${status === 'groups' ? 'dark:text-blue-600' : 'dark:text-gray-400'} mx-3 md:text-3xl text-2xl`} />
                        </div>
                    </div>
                </div>
                <div className={`h-full border-b-4 py-3 menu-button ${status === 'menu' ? 'border-blue-600 py-3' : 'border-transparent'}`}>
                    <div className={`h-full cursor-pointer ${status !== 'menu' && 'dark:hover:bg-gray-600'} duration-200 rounded-md`} onClick={() => { setStatus('menu') }} >
                        <div className='rounded-md h-full md:w-24 w-14 flex items-center justify-center ml-2 mr-2'>
                            <AiOutlineMenu className={`${status === 'menu' ? 'dark:text-blue-600' : 'dark:text-gray-400'} mx-3 md:text-3xl text-2xl`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* other buttons  */}
            <div className='flex items-center'>
                {/* visible at screen size more than XL */}
                <p className='xl:block hidden dark:bg-gray-700 dark:text-gray-100 p-2 px-4 rounded-full font-medium text-sm dark:hover:bg-gray-600 duration-200 cursor-pointer'>Find Friends</p>
                {/* visible at screen size more than XL */}
                <div className='xl:flex hidden items-center justify-center ml-2 dark:text-gray-100 py-0.5 px-1 rounded-full dark:hover:bg-gray-600 duration-200 cursor-pointer'>
                    <img src="https://www.sirilmp.online/images/profile1.png" alt="profile img" className='w-8 h-8 rounded-full' />
                    <p className='font-medium text-sm mx-1'>Siril M P</p>
                </div>
                <div className='add-button-show flex dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 ml-3 w-9 h-9 items-center justify-center rounded-full cursor-pointer'>
                    <AiOutlinePlus className='text-2xl dark:text-gray-100' />
                </div>
                <div className='dot-button-show hidden dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 ml-3 w-9 h-9 items-center justify-center rounded-full cursor-pointer'>
                    <CgMenuGridO className='text-2xl dark:text-gray-100' />
                </div>
                <div className='dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 mx-3 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer'>
                    <FaFacebookMessenger className='text-2xl dark:text-gray-100' />
                </div>
                <div className='dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 mr-3 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer'>
                    <FaBell className='text-xl dark:text-gray-100' />
                </div>
                <div className='dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer'>
                    <TiArrowSortedDown className='text-xl dark:text-gray-100' />
                </div>
            </div>
        </div>
    )
}

export default Header
