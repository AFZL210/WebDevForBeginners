import React from 'react'

const SearchBar = () => {
  return (
    <div className='search-box'>
      <input type="text" placeholder='&#xF002;Search'/>
      <button>Search</button>

      <div className="search-info">
        <h3>Paracetamol</h3><p>(128 Products)</p> <span className="selected">500mg</span> <p className='remove'>Remove all</p>
      </div>
    </div>
  )
}

export default SearchBar