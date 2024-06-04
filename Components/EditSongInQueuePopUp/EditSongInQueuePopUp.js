'use client'
import React, { useEffect, useRef } from 'react'

const EditSongInQueuePopUp = ({item, handleClose}) => {

  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  console.log(item)

  return (
    <div className='absolute text-white flex justify-center items-center top-0 left-0 z-40 backdrop-blur-lg w-screen h-screen'>
      <div ref={popUpRef} className='bg-zinc rounded-xl px-5 py-10 w-full max-w-[500px]'>
        <p>{item.reserved ? 'Reserved' : 'Auto'}</p>
        
        <button className='btn-primary'>Delete</button>
      </div>
    </div>
  )
}

export default EditSongInQueuePopUp