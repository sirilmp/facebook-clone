import React from 'react'
import { RiVideoAddFill } from "react-icons/ri";

function CreateRoom() {
    return (
        <div className='dark:bg-gray-700 p-2 rounded-md mt-4 flex'>
        <div className='px-3 py-2 flex items-center  dark:hover:bg-gray-800 duration-200 rounded-full border border-blue-400 cursor-pointer'>
            <RiVideoAddFill className='text-2xl text-purple-700' />
            <p className='ml-2 text-sm font-medium dark:text-gray-100'>Create Room</p>
        </div>
    </div>
    )
}

export default CreateRoom
