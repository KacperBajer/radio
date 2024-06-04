'use client'
import { failedAcceptedSong, successfullyAcceptedSong } from '@/constants'
import { acceptSongReq, suggestedSongsReq } from '@/library'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {

    const [data, setData] = useState()

    useEffect(() => {
      const getSongs = async () => {
        const songs = await suggestedSongsReq()
        console.log(songs.data)
        setData(songs.data)
      }
      getSongs()
    }, [])

    const acceptSong = async (id) => {
      const response = await acceptSongReq(id)
      console.log(response)
      if(response.status === 200) {
        successfullyAcceptedSong()
      } else {
        failedAcceptedSong()
      }    
    }
 

  return (
    <div className='w-full min-h-screen md:px-20 px-4 py-10 bg-black text-white'>
       <ToastContainer />
        <p className='text-4xl mb-16 font-bold'>Suggested</p>
        <div className='flex flex-col gap-5'>
            {!data ? '' : data.map(item => (
                <div key={nanoid()} className="flex flex-col sm:flex-row gap-5">
                    <div className='h-[200px] w-full sm:max-w-[350px]'>
                        <img alt="" src={item.albumart} className="h-full w-full object-cover" />                    
                    </div>
                    <div className='w-full'>
                        <p className="text-xl line-clamp-2">{item.title}</p>
                        <p className="text-gray-400 line-clamp-1 mt-1">{item.artist}</p>
                        <div className='flex gap-3'>
                          <button onClick={() => acceptSong(item.id)} className="btn-primary mt-3 text-sm">Accept</button>
                          <button className="btn-primary mt-3 text-sm">Decline</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page