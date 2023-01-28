import React from 'react'
import './MedicineCard.css'
import send from './../../media/send.png'

const MedicineCard = ({ medicine, onContact }) => {
  return (
    <div className="card-container">

      <div className="card-content">
        <img src={medicine.img} alt="medicineImage" className="medicine-img" />
        <h3 className="medicine-name">{medicine.title}</h3>
        <div className="medicine-price-info">
          <h3 className="price">Rs {medicine.price}</h3><p><b>/</b>strip</p>
        </div>
        <p className="company-info">{medicine.company}</p>
        <p className="location">{medicine.location}</p>

        <button className="contact-btn" onClick={onContact}> <img className='send-icon' src={send} alt="" /> Contact Supplier</button>
      </div>


    </div>
  )
}

export default MedicineCard