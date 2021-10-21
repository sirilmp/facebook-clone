import React from 'react'
import { TiVideo } from "react-icons/ti";
import { IoImages } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";

function PostButtonSection() {
    return (
        <div className='dark:bg-gray-700 px-2 rounded-md mt-4'>
                            <div className='flex items-center py-2 border-b dark:border-gray-500'>
                                <img src="https://www.sirilmp.online/images/profile1.png" alt="profile img" className='w-12 rounded-full' />
                                <p className='dark:text-gray-200 ml-3 dark:bg-gray-800 dark:hover:bg-gray-600 duration-200 cursor-pointer px-6 py-2 rounded-full w-full'>What's your mind, Siril?</p>
                            </div>
                            <div className='py-2 flex justify-around'>
                                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md'>
                                    <TiVideo className='text-2xl text-red-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Live Video</p>
                                </div>
                                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md'>
                                    <IoImages className='text-2xl text-green-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Photo/Video</p>
                                </div>
                                <div className='hidden sm:flex items-center dark:hover:bg-gray-800 cursor-pointer px-5 py-2 rounded-md '>
                                    <FaRegSmile className='text-2xl text-yellow-500' />
                                    <p className='ml-2 text-base font-medium dark:text-gray-100'>Feeling/Activity</p>
                                </div>
                            </div>
                        </div>
    )
}

export default PostButtonSection
