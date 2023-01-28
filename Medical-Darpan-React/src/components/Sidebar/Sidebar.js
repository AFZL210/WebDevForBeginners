import React from 'react'
import './SidebarStyle.css'
import SideCard from './SideCard'

const Sidebar = ({sides,onClickSide}) => {
  return (
    <div className="sidebar">
         {sides.map((side) => (<SideCard key={side.ind} side={side} onClickSide={onClickSide}/>))}
    </div>
  )
}

export default Sidebar