import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../views/Navbar';
import { useSelector } from 'react-redux';
import './MainPage.css';

export default function () {
  const {loading ,notification}=useSelector(state=>state.auth);
  const{load}=useSelector(state=>state.servicesReducer);

  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      {(loading ||load ) && <div id="loading-container">
        <div id="spinner"></div>
      </div>}
      {notification &&
          <div className="notification">
            {notification}
          </div>
        }
    </div>
  )
}
