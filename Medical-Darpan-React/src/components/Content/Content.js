import React from 'react'
import './ContentStyle.css'
import MedicineCard from '../MedicinCard/MedicineCard'


const Content = ({medicines,onContact}) => {
  return (
    <div className="content-container">
       {medicines.map((medicine) => (<MedicineCard key={medicine.ind} medicine={medicine} onContact={onContact}/>))}
    </div>
  )
}

export default Content