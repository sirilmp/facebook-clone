import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

function CreateStory() {
    return (
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
    )
}

export default CreateStory
