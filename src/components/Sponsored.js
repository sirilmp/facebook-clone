import React from 'react'

function Sponsored() {

    const screen_height = window.innerHeight - 80

    return (
        <div className='dark:bg-gray-900 hidden w-5/12 sponsored-show py-2 sticky top-20 pr-5' style={{ height: screen_height }}>
            <p className='text-gray-400 font-bold mt-3'>Sponsored</p>
            <div className='p-2 dark:hover:bg-gray-700 cursor-pointer duration-200 grid grid-cols-2 items-center rounded-md mt-5'>
                <img className='h-full w-full object-contain rounded-md' src="https://scontent.fcok2-1.fna.fbcdn.net/v/t45.1600-4/p476x249/121536010_23846074333440219_3485064449634905114_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=BXHgIBhrhcAAX9CCcjt&_nc_ht=scontent.fcok2-1.fna&oh=e3af94a76578534258becc8f3d1f4434&oe=6174612C" alt="Sponsored image" />
                <div className='ml-2'>
                    <h5 className='dark:text-gray-100 font-semibold md:text-xs lg:text-base'>Free online course on crowdsourcing</h5>
                    <p className='dark:text-gray-100 text-xs'>toloka.io</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsored
