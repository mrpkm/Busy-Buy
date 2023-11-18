import React from 'react'
import './style.scss'
import { useValue } from '../../context/useContext'

const Filter = () => {
  const { rangePrice, handleRange, filterCategory, checkBox, handleCategory } = useValue();
  return (
    <div className="filter">
      <div className="container">
        <div className="heading">
          <h4>filters</h4>
        </div>
        <br />
        <div className="range">
          <h5><label htmlFor="range">{rangePrice}</label></h5>
          <input
            type="range" id='range' min="0" max="20000" value={rangePrice}
            onChange={(e) => handleRange(Number(e.target.value))}
          />
        </div>
        <div className="heading">
          <h4>catagary</h4>
        </div>
        <div className="cheackbox">
          {filterCategory.map((category) => (
            <>
              <div className='checkInput' key={category}>
                <input
                  type="checkbox"
                  onChange={() => handleCategory(category)}
                  id={category}
                  checked={checkBox.includes(category)}
                />
                <label htmlFor={category}>{category}</label><br />
              </div>
            </>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Filter
