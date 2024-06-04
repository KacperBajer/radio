import React from 'react'
import LeftPanel from '@/Components/leftPanel/LeftPanel'
import TopPanel from '@/Components/TopPanel/TopPanel'

const layout = ({children}) => {
  return (
    <>
      <TopPanel />
      <div className='flex'>
        <LeftPanel />
        {children}
      </div>
    </>
  )
}

export default layout