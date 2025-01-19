import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import profileImage from '../../../assets/profileImage.png';
import './ShowService.css';


export default function ShowService() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    {service && (
      <div className="container my-5">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4">
              <h1 className="mb-4"><b>Service Details</b></h1>
              <div className="d-flex align-items-center mb-4">
                <img
                  src="/assets/profileImage.png"
                  alt="Service Provider"
                  className="rounded-circle"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <h4 className="mb-0">Catherine Yap</h4>
                  <p className="text-muted mb-1">Malaysia | 235 Reviews</p>
                  <small className="text-success">Starts</small>
                </div>
              </div>
              <div
                className="rounded mb-4 cover"
                style={{
                  
                  height: "300px",
                  width:"auto",
                  background: `url('http://127.0.0.1:8000/storage/${JSON.parse(service.image_url)[0]}') no-repeat center center`,
                  backgroundSize: "cover",

                }}
              ></div>
              <h3 className="mb-3"><b>About This Gig</b></h3>
              <p>
                {service.description}
              </p>
              <ul>
                <li>Fixing bugs and errors</li>
                <li>Minor changes and landing page updates</li>
                <li>Delivery time: 7 days</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              {/* Card Header */}
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">Information About Service</h5>
              </div>

              {/* Card Body */}
              <div className="card-body">
                {/* Ratings */}
                <div className="d-flex justify-content-between py-2">
                  <span>Reviews</span>
                  <span className="text-warning">★★★★★ (81)</span>
                </div>
                {/* Response Speed */}
                <div className="d-flex justify-content-between py-2">
                  <span>Average Response Speed</span>
                  <span>29 min</span>
                </div>
                {/* Completed Orders */}
                <div className="d-flex justify-content-between py-2">
                  <span>Completed Orders</span>
                  <span>135</span>
                </div>
                {/* Queue */}
                <div className="d-flex justify-content-between py-2">
                  <span>Queue</span>
                  <span>1</span>
                </div>
                {/* Price */}
                <div className="d-flex justify-content-between py-2">
                  <span>Price</span>
                  <span>${service.price}</span>
                </div>
                {/* Delivery Time */}
                <div className="d-flex justify-content-between py-2">
                  <span>Delivery Time</span>
                  <span>1 Day</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-footer bg-white">
                <button className="btn btn-success w-100">Order Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-4 text-center">
      <button
        className="btn btn-outline-secondary"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div> */}
      </div>
    )}

  </>
  )
}
