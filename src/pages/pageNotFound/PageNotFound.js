import React, { useEffect } from 'react';
import './style.scss'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 5000);

  }, [])
  return (
    <div className='pageNotFound'>
      <div className="page">
        <p>page not found</p>
      </div>
    </div>
  )
}

export default PageNotFound
