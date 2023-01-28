import React from 'react'
import './SidebarStyle.css'

const Category = ({description}) => {
  return (

    <div className="description-text">
            <p className='desc-text'>{description}</p>
    </div>
    
  )
}

export default Category