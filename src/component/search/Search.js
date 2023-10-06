import React from 'react'
import './style.scss'
import { useValue } from '../../context/useContext'

const Search = () => {
  const { searchQuery, handleSearach } = useValue();
  // console.log(searchQuery)
  return (
    <div>
      <div className="search">
        <div className="searchInput">
          <input type="text" value={searchQuery} onChange={(e) => handleSearach(e.target.value)} placeholder='search...' />

        </div>
      </div>
    </div>
  )
}

export default Search
