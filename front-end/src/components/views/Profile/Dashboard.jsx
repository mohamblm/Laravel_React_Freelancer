import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Dashboard() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bordered border-bottom">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={'Gigs'}>Gigs</Link>
              <Link className="nav-link" to={'Orders'} >Orders</Link>
              <Link className="nav-link" to={'Earnings'}>Earnings</Link>
            </div>
          </div>
        </div>
      </nav>
      
      
      <Outlet />
    </>
  )
}
