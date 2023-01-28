import React from 'react'
import './SidebarStyle.css'
import Category from './Category';

const SideCard = ({side,onClickSide}) => {

   const descriptions = side.descriptions;
    console.log(descriptions)

   return (
    <div className="side-card">
        <p className='title'>{side.title}</p>
        {descriptions.map((description) => (<Category key={side.ind} description={description} onClickSide={onClickSide}/>))}
    </div>
  )
}

export default SideCard