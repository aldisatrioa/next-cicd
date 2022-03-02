import React from 'react'

export default function Card(props) {
    return (
        <div data-testid='item' className='rounded-xl border-2 border-indigo-400 flex items-center p-4 justify-between'>
            <div className='flex flex-col space-y-2'>
                <span className='text-4xl'>{props.title} {props.id}</span>
                <span className='text-base text-slate-500'>{props.description}</span>
            </div>
            <button data-testid='delete-btn' className='bg-red-500 p-4 rounded-xl' onClick={() => props.onDelete()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" path="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    )
}
