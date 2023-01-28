import React from 'react'
import './SearchBoxStyle.css'
import SearchBar from '../SearchBar/SearchBar'

const SearchBox = () => (
  <div className="search-box">
    <div className="page-selection">
      {/* Just For Visualisation */}
      <p className='sample-selector'>Medical Darpan <b> {'>'} </b> Search <b> {'>'} </b> <b>FabiFlu Tablet</b></p>
    </div>

    <SearchBar />
  </div>
)

export default SearchBox