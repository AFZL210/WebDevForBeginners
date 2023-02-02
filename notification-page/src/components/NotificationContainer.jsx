import React from 'react'
import '../App.css'
import Notification from './Notification'
import pic1 from '../assets/images/avatar-angela-gray.webp'
import pic2 from '../assets/images/avatar-anna-kim.webp'
import pic3 from '../assets/images/avatar-jacob-thompson.webp'
import pic4 from '../assets/images/avatar-kimberly-smith.webp'
import pic5 from '../assets/images/avatar-mark-webber.webp'
import pic6 from '../assets/images/avatar-nathan-peterson.webp'

const NotificationContainer = () => {
  return (
    <div id='notification-container' className="w-[80%] max-w-screen-md h-[90%] flex flex-col space-y-2 bg-[#FFFF] p-8 drop-shadow-md">
        <div className="top-container w-[100%] h-[40px] flex justify-between">
              <div className="notification-box flex flex-row gap-3">
                <h1 className='font-bold'>Notofication</h1>
                <div className='bg-[#09327D] w-[25px] h-[25px] text-center rounded-[5px]'><h1 className='text-white'>3</h1></div>
              </div>
        </div>
        <div className="bottom-container flex flex-col space-y-3 gap-2 mt-3">
          <Notification unread={true} pic={pic1} time="1m ago" name="Mark Webber" text_one="reacted to your recent post" text_two="My first tournament today!"/>
          <Notification unread={true} pic={pic2} time="5m ago"  name="Angela Gray" text_one="followed you" text_two=""/>
          <Notification unread={true} pic={pic3} time="1d ago"  name="Jacob Thompson" text_one="has joined" text_two="Chess Club"/>
          <Notification unread={false} pic={pic4} time="1m ago" name="Mark Webber" text_one="reacted to your recent post" text_two="My first tournament today!"/>
          <Notification unread={false} pic={pic5} time="5m ago"  name="Angela Gray" text_one="followed you" text_two=""/>
          <Notification unread={true} pic={pic6} time="1d ago"  name="Jacob Thompson" text_one="has joined" text_two="Chess Club"/>
        </div>
    </div>
  )
}

export default NotificationContainer