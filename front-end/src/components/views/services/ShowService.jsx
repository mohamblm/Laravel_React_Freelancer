import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import profileImage from '../../../assets/profileImage.png';
import './ShowService.css';


export default function ShowService() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { errors, service } = useSelector(state => state.servicesReducer);
  const { id } = useParams();

  useEffect(() => {
    axiosClient.get(`/service/${id}`)
      .then((res) => {
        dispatch({ type: 'FETCH_SERVICE_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.status)
        if (err.response.status == 404) {
          // dispatch({ type: 'FETCH_SERVICE_FAILURE', payload: err.message })
          navigate('notfound')
        }

      })
  }, []);
  return (<>
    {/* <div>{service &&
      <div className='container d-flex m-1 '>
        <div className='main col-8'>
          <h1>{service.title}</h1>
          <div className='d-flex my-2'>
            <img className='avatar mr-3' src='/assets/profileImage.png' alt="profel" />
            <div className='mx-4'>
              <h3> <b>Amin</b> stars (4.9)</h3>
              <p> 100 order completed</p>
              <button className='btn btn-success p-1'>contact</button>
            </div>
            
          </div>
        </div>
        <div className='asideBar'>asid bar</div>
      </div>
    }</div> */}
    <div>{errors && 'kaynin'}</div>
    <div className="container my-3 mx-2">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 border-end">
          <h1 className='mb-3'><b>Service Details</b></h1>
          <div className="d-flex mb-3">
            <img
              src="/assets/profileImage.png"
              alt="Service Provider"
              className="rounded-circle mb-1 avatar"
            />
            <div className='my-2 mx-3'>
              <h3>Catherine Yap</h3>
              <p className="text-muted">Malaysia | 235 Reviews</p>
              <p>starts</p>
            </div>
          </div>
          <div className='mb-3' style={{ background: "url('/assets/5.jpg') no-repeat center center", backgroundSize: "cover", height: "300px", }}>
            {/* <img src="/assets/5.jpg" alt=""   /> */}
          </div>
          <div>
            <h3 className='mb-3'><b>About this gig</b></h3 >
            <p>
              I will fix your HTML, CSS, WordPress, PHP, or ASP bugs. With 10
              years of experience, I specialize in resolving issues efficiently
              and effectively.
            </p>
            <ul>
              <li>Fixing bugs and errors</li>
              <li>Minor changes and landing page updates</li>
              <li>Delivery time: 7 days</li>
            </ul>
          </div>
        </div>


        {/* Right Section */}
        <div className="col-md-4 ">
          <div className="">
            <div
              className="card border border-none"
              style={{ maxWidth: "400px" }}
            >
              {/* Card Header */}
              <div className="card-header bg-white ">
                <h5 className="mb-0">Informations about service</h5>
              </div>

              {/* Card Body */}
              <div className="card-body">
                {/* Ratings */}
                <div className="d-flex justify-content-between py-2">
                  <span>Reviews</span>
                  <span className="text-warning">★★★★★(81)</span>
                </div>
                {/* Response Speed */}
                <div className="d-flex justify-content-between py-2">
                  <span>Average response speed</span>
                  <span>29 min</span>
                </div>

                {/* Buyers */}
                <div className="d-flex justify-content-between py-2">
                  <span>Complated Orders</span>
                  <span>135</span>
                </div>

                {/* Current Orders */}
                <div className="d-flex justify-content-between py-2">
                  <span>Queue</span>
                  <span>1</span>
                </div>

                {/* Service Price */}
                <div className="d-flex justify-content-between py-2">
                  <span>Price</span>
                  <span>$5.00</span>
                </div>

                {/* Delivery Time */}
                <div className="d-flex justify-content-between py-2">
                  <span>Delivery Time</span>
                  <span>1 Day</span>
                </div>

                
              </div>

              {/* Card Footer */}
              <div className="card-footer bg-white ">
                <button className="btn  bg-success w-100">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button onClick={() => { window.location.reload('/'); }}>state</button>


  </>

  )
}
