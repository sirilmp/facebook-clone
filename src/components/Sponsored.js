import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

function Sponsored() {

    const screen_height = window.innerHeight - 80

    return (
        <div className='dark:bg-gray-900 hidden w-5/12 sponsored-show py-2 sticky top-20 pr-5' style={{ height: screen_height }}>
            <p className='text-gray-400 font-bold mt-3'>Sponsored</p>
            <div className='border-b border-gray-500 pb-3'>
                <div className='p-2 dark:hover:bg-gray-700 cursor-pointer duration-200 grid grid-cols-2 items-center rounded-md mt-5'>
                    <img className='w-min max-h-28 rounded-md' src="https://scontent.fcok2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/235313646_23848447348760500_3386224812016960554_n.png.jpg?_nc_cat=106&ccb=1-5&_nc_sid=67cdda&_nc_ohc=XieyFcN246oAX_QG0ld&_nc_ht=scontent.fcok2-1.fna&oh=4d11308f4b8428e9aa37d88271968434&oe=6175E4B7" alt="Sponsored img" />
                    <div className='ml-2'>
                        <h5 className='dark:text-gray-100 font-semibold md:text-xs lg:text-base'>Free online course on crowdsourcing</h5>
                        <p className='dark:text-gray-100 text-xs'>toloka.io</p>
                    </div>
                </div>
                <div className='p-2 dark:hover:bg-gray-700 cursor-pointer duration-200 grid grid-cols-2 items-center rounded-md mt-5'>
                    <img className='max-h-28 w-full rounded-md' src="https://scontent.fcok2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/161169629_23847251271940757_7370758855152847938_n.png.jpg?_nc_cat=111&ccb=1-5&_nc_sid=67cdda&_nc_ohc=6KZjHyv9dr4AX91AxNC&_nc_ht=scontent.fcok2-1.fna&oh=6913ebc5bf164e8cea9708f026e4a529&oe=61761EE6" alt="Sponsored img" />
                    <div className='ml-2'>
                        <h5 className='dark:text-gray-100 font-semibold md:text-xs lg:text-base'>Free online course on crowdsourcing</h5>
                        <p className='dark:text-gray-100 text-xs'>toloka.io</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='text-gray-400 font-bold md:text-xs lg:text-base'>Group conversations</h3>
                <div className='mt-5 dark:hover:bg-gray-700 cursor-pointer py-2 rounded-md duration-200 flex items-center'>
                    <div className='flex dark:bg-gray-500 bg-opacity-40 ml-3 w-9 h-9 items-center justify-center rounded-full'>
                        <AiOutlinePlus className='text-2xl dark:text-gray-400' />
                    </div>
                    <p className='font-semibold dark:text-gray-200 ml-3'>Create New Group</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsored
