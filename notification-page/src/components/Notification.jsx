import React from 'react'

const Notification = ({unread,pic,time,text_one,text_two,name}) => {
  return (
    <div className='flex w-[100%] bg-[#F6FAFD] px-4 gap-2 py-2 items-center justify-between drop-shadow-sm'>
        <div className="inner flex w-full gap-4 items-center">
        <div className="img">
            <img src={pic} alt="profile-pic" className='w-9' />
        </div>
        <div className="text-container">
            <h1 className='text-[16px]'><b className='text-[#1D2027]'>{name}</b> <span className='text-[#949AA1]'>{text_one}</span> <b className='text-[#69707D]'>{text_two}</b></h1>
            <p className='text-[#A4ABB4]'>{time}</p>
        </div>
        </div>
        {
          unread?( <div className="dot w-2 h-2 rounded-full bg-[#FA5B59]"></div>):(" ")
        }
        
    </div>
  )
}

export default Notification