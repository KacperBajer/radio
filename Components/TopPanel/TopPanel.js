import React from 'react'
import { MdMenu } from "react-icons/md";


const TopPanel = () => {
  return (
    <div className='w-full text-white py-2 px-5 flex justify-between bg-zinc md:hidden'>
        <div>
            <p className='text-2xl text-center font-bold'>ZS1MM</p>
        </div>
        <div>
            <MdMenu className='text-3xl' />
        </div>
    </div>
  )
}

export default TopPanel