import React from 'react'


function ActionButton({ title,icon,color }) {
    return (
        <div className='bg-red-50'>
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default ActionButton
