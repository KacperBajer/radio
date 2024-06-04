'use client'
import { successfullySuggestedNotify } from "@/constants";
import { addSongReq, getSongsReq } from "@/library";
import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [data, setData] = useState()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const getSongs = async (e) => {
    e.preventDefault()
    const response = await getSongsReq(inputValue)
    setData(response.data)
  };

  const addSong = async (item) => {
    const response = await addSongReq(item)
    if(response.status === 200) {
      successfullySuggestedNotify()
    } else {
      failedSuggestedNotify()
    }
  }


  return (
    <div className="bg-black text-white px-5 py-10 flex justify-center w-full min-h-screen">
      <ToastContainer />
      <div className=" max-w-[800px]">
        <p className="text-3xl text-center mb-5">Zaproponuj swoją piosenkę</p>
        <p className="text-center mb-10 text-sm text-gray-400">Witaj na stronie szkolnego radiowęzła! Chcemy, abyś czuł się jak w domu i miał wpływ na to, co gra w eterze. Dlatego dajemy Ci możliwość proponowania swoich ulubionych piosenek! Wystarczy, że wpiszesz tytuł utworu w poniższe pole i wybierzesz z listy interesującą Cię pozycję. To takie proste! Możesz mieć wpływ na muzykę, która rozbrzmiewa w szkolnym radiu, więc daj się słyszeć!</p>
        <form onSubmit={getSongs} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
            value={inputValue} 
            onChange={handleChange} 
            className="formInput w-full" 
          />
          <button 
            className="btn-primary rounded-xl"
            type="submit"
          >
            Szukaj
          </button>
        </form>
        
        <div className="mt-10 flex flex-col gap-10 sm:gap-4">
          {!data ? '' : data.map(item => (
                <div key={nanoid()} className="flex flex-col sm:flex-row gap-5 bg-zinc p-4 rounded-xl">
                    <div className='h-[200px] w-full sm:max-w-[350px]'>
                        <img alt="" src={item.albumart} className="h-full w-full object-cover" />                    
                    </div>
                    <div className='w-full'>
                        <p className="text-xl line-clamp-2">{item.title}</p>
                        <p className="text-gray-400 line-clamp-1 mt-1">{item.artist}</p>
                        <div className='flex gap-3'>
                          <button onClick={() => addSong(item)} className="btn-primary mt-3 text-sm">Zaproponuj</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
