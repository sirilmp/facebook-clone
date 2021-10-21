import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import { BiDotsHorizontalRounded,BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";


function Posts() {
    return (
        <div className='mt-4 py-2 px-3 bg-gray-700 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    {/* user image */}
                    <img src="https://www.sirilmp.online/images/profile1.png" alt="profile img" className='w-12 rounded-full' />
                    <div className='ml-3'>
                        {/* user name */}
                        <h5 className='dark:text-gray-100 font-semibold hover:underline cursor-pointer'>Arjun</h5>
                        <div className='flex items-center'>
                            {/* posting date */}
                            <p className='dark:text-gray-300 mr-1 hover:underline cursor-pointer' style={{ fontSize: '11px' }}>18 october at 23:32 .</p>
                            <FaGlobeAmericas className='dark:text-gray-300 text-xs' />
                        </div>
                    </div>
                </div>
                <div className='dark:hover:bg-gray-600 duration-200 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center'>
                    <BiDotsHorizontalRounded className='text-2xl dark:text-gray-400' />
                </div>
            </div>
            {/* post content/image/video */}
            <div className='mt-2'>
                <p className='dark:text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias quam laboriosam minus inventore eos corrupti illo repellat odit, quibusdam atque quaerat reiciendis delectus voluptatem. Sapiente porro saepe a dolorem.</p>
                <div className='mt-3 mb-4 flex justify-end'>
                    {/* comment count section */}
                    <p className='dark:text-gray-300 font-light cursor-pointer hover:underline'>6 comments</p>
                </div>
            </div>
            {/* like, comment and share buttons */}
            <div className='flex items-center justify-around border-b border-t border-gray-500 py-2 mb-2'>

                <div className='hide flex items-center dark:hover:bg-gray-800 cursor-pointer duration-200 py-1.5 px-5 rounded-md'>
                    <AiOutlineLike className='text-2xl dark:text-gray-300 mr-1'/>
                    <p className='text-base dark:text-gray-300 font-medium'>Like</p>
                    <div className='show absolute bg-gray-600 shadow-xl -mt-14 -ml-10 rounded-full px-2 py-1'>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>👍</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>❤️</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>😍</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>😆</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>😮</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>😪</p>
                        <p className='text-2xl ml-1 mr-1 hover:scale-110 duration-200 hover:-translate-y-1 transform translate'>😡</p>
                    </div>
                </div>

                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer duration-200 py-1.5 px-5 rounded-md'>
                    <BiComment className='text-2xl dark:text-gray-300 mr-1'/>
                    <p className='text-base dark:text-gray-300 font-medium'>Comment</p>
                </div>
                <div className='flex items-center dark:hover:bg-gray-800 cursor-pointer duration-200 py-1.5 px-5 rounded-md'>
                    <RiShareForwardLine className='text-2xl dark:text-gray-300 mr-1'/>
                    <p className='text-base dark:text-gray-300 font-medium'>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Posts
