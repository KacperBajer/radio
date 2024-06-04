'use client'
import { MdQueueMusic } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import Link from "next/link";


const LeftPanel = () => {

    const pathname = usePathname()

  return (
    <div className='bg-zinc text-white px-5 py-10 top-0 left-0 sticky z-30 hidden md:block w-full max-w-[250px] h-screen'>
        <p className='text-5xl text-center font-bold'>ZS1MM</p>
        <p className='text-center mb-10 text-gray-400 font-bold'>Radio Station</p>
        <Link href='/panel' className={`btn-primary ${pathname === '/panel' ? 'bg-violet-500' : 'bg-transparent'} flex items-center gap-2`}><MdQueueMusic className='text-2xl' />Queue</Link>
        <Link href='/panel/add' className={`btn-primary ${pathname === '/panel/addsong' ? 'bg-violet-500' : 'bg-transparent'} flex items-center mt-2 gap-2`}><IoAddCircleOutline className='text-2xl' />Add song</Link>
        <Link href='/panel/suggested' className={`btn-primary ${pathname === '/panel/suggested' ? 'bg-violet-500' : 'bg-transparent'} flex items-center mt-2 gap-2`}><BsPeopleFill className='text-2xl' />Suggested</Link>
    </div>
  )
}

export default LeftPanel