import React from 'react'
import './style.scss'
import Filter from '../component/filter/Filter'
import Search from '../component/search/Search'
import Item from './productList/Item'
import Buy from '../component/buy/Buy'
import LodingPage from './logingPage/LodingPage'
import { useValue } from '../context/useContext'
const Home = () => {
  const { loding } = useValue()
  return (
    <>
      {/* {loding ? (
        <LodingPage />

      ) : ( */}

        <div>
          <div className="home">
            <Search />
            <div className="continer">
              <div className="left">
                <div className="filters">
                  <Filter />
                </div>
              </div>
              <div className="items">
                <Item />

              </div>
            </div>


          </div>
        </div>
      {/* )} */}

    </>

  )
}

export default Home
