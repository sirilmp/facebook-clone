import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sponsored from '../components/Sponsored'
import { AiOutlinePlus } from "react-icons/ai";
import { TiVideo } from "react-icons/ti";
import { IoImages } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import ActionButton from '../components/ActionButton';



function Home() {
    return (
        <>
            <Header />
            <div className='flex dark:bg-gray-900 w-full'>
                <Feed />
                <div className='dark:bg-gray-900 w-full flex justify-center'>
                    <div className='max-w-xl w-full dark:bg-gray-900'>
                        {/* create story section */}
                        <div className='dark:bg-gray-700 p-2 rounded-md mt-11'>
                            <div className='dark:hover:bg-gray-800 duration-200 cursor-pointer flex items-center p-2 rounded-md'>
                                <div className='flex dark:text-gray-100 dark:bg-blue-500 bg-opacity-40 ml-3 w-9 h-9 items-center justify-center rounded-full'>
                                    <AiOutlinePlus className='text-2xl dark:text-blue-500' />
                                </div>
                                <div className='ml-3'>
                                    <h3 className='dark:text-gray-200 font-semibold text-xl'>Create Story</h3>
                                    <p className='dark:text-gray-200'>Share a photo or write something.</p>
                                </div>
                            </div>
                        </div>
                        {/* post buttons section */}
                        <div className='dark:bg-gray-700 px-2 rounded-md mt-5'>
                            <div className='flex items-center py-2 border-b'>
                                <img src="https://www.sirilmp.online/images/profile1.png" alt="profile image" className='w-12 rounded-full' />
                                <p className='dark:text-gray-200 ml-3 dark:bg-gray-800 dark:hover:bg-gray-600 duration-200 cursor-pointer px-6 py-2 rounded-full w-full'>What's your mind, Siril?</p>
                            </div>
                            <div className='py-2 flex justify-between'>
                                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md'>
                                    <TiVideo className='text-2xl text-red-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Live Video</p>
                                </div>
                                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md'>
                                    <IoImages className='text-2xl text-green-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Photo/Video</p>
                                </div>
                                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md'>
                                    <FaRegSmile className='text-2xl text-yellow-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Feeling/Activity</p>
                                </div>
                            </div>
                        </div>
                        {/* create room section */}
                        <div className='dark:bg-gray-700 p-2 rounded-md mt-5 flex'>
                            <div className='px-3 py-2 flex items-center  dark:hover:bg-gray-800 duration-200 rounded-full border border-blue-400 cursor-pointer'>
                                <RiVideoAddFill className='text-2xl text-purple-700' />
                                <p className='ml-2 text-sm font-medium dark:text-gray-100'>Create Room</p>
                            </div>
                        </div>
                    </div>

                </div>
                <Sponsored />
            </div>
        </>
    )
}

export default Home
