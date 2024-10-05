import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-[20px]'>
        <div className='flex items-center justify-center gap-[20px]'>
            <h1 className='text-[40px] text-blue-950'>404</h1>
            <h1 className='text-[40px] text-green-950'>|</h1>
            <h1 className='text-[30px] text-sky-950'>Page not found</h1>
        </div>
        <Link href='/'>
            <button className='bg-[#00ed63ef] border border-green-600 p-[5px] rounded-[7px]'>
                Go to home
            </button>
        </Link>
    </div>
  )
}

export default NotFound