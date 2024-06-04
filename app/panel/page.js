'use client'
import EditSongInQueuePopUp from '@/Components/EditSongInQueuePopUp/EditSongInQueuePopUp';
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";


const page = () => {
    
    const [editItem, setEditItem] = useState(null);
    const [data, setData] = useState()

    const handleEditClick = (item) => {
        setEditItem(item);
    };

    const handleClose = () => {
        setEditItem(null)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/queue', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    } 
                })
                const result = await response.json()
                setData(result.ans)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

  return (
    <div className='w-full text-white py-10 md:px-20 px-4  min-h-screen bg-black'>
        {editItem && <EditSongInQueuePopUp item={editItem} handleClose={handleClose} />}
        <p className='text-4xl mb-10 font-bold'>Queue</p>
        {!data ? '' : data.map(item => (
            <div key={nanoid()}>
                <p className='text-xl font-semibold mb-3 mt-7 text-violet-500'>{item.time}</p>
                
                <div className='flex flex-col gap-3'>
                    {item.songs.map(song => (
                        <div key={nanoid()} className="flex gap-2">
                            <img alt="" src={song.thumbnail} className="w-14 h-14 object-cover " />
                            <div>
                                <p className="text-xl line-clamp-1">{song.title}</p>
                                
                                <div className="flex gap-2 items-center mt-1">
                                    <img alt="" src={song.avatar} className="rounded-full w-5 h-5 object-cover" />
                                    <p className="text-gray-400 w-auto line-clamp-1">{song.channel}</p>
                                    <p className='text-violet-500'>{song.reserved ? 'Reserverd' : 'Auto'}</p>
                                    <div className='w-5 h-5'>
                                        <FaEdit 
                                            onClick={() => handleEditClick(song)}
                                            className='text-xl text-violet-500 hover:cursor-pointer' 
                                        />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    ))}                
                </div>

            </div>
        ))}
    </div>
  )
}

export default page