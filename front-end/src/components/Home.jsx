import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import ServiceCard from './views/services/ServiceCard';
import axiosClient from '../api/axios';
import { useEffect, useState } from 'react';
export default function Home() {


  const { services, loading } = useSelector(state => state.servicesReducer)
  
  const dispatch = useDispatch();
  // const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  

  

  function fetchServices(page = 1){
    dispatch({ type: 'TRUE_LOADING', payload: true })
    axiosClient.get(`/services?page=${page}`)
      .then((response) => {
        dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: response.data.data })
        // console.log(response.data.data)
        // setServices(response.data.data);
        setCurrentPage(response.data.current_page);
        setLastPage(response.data.last_page);
        // console.log(res.data)
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_SERVICES_FAILURE', payload: err.message })
        console.log(err)
      })
  }
  useEffect(() => {
    fetchServices();
  }, []);


  const handlePageChange = (page) => {
    fetchServices(page);
  };
  const sortedServices = [
    {
      id: 1,
      name: "Yousuf",
      title: "I will create AI SaaS or trained chatbot using ChatGPT, GPT4",
      rating: 5.0,
      reviews: 164,
      price: 90,
      badge: "Fiverr's Choice",
      image: "path/to/image1.jpg", // Replace with real image paths
    },
    {
      id: 2,
      name: "Sohel Rana",
      title: "I will create SaaS AI content generator generative AI platform like Jasper",
      rating: 4.9,
      reviews: 40,
      price: 500,
      badge: null,
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Nazrul Q",
      title: "I will develop AI SaaS or AI content and image generator like Jasper",
      rating: 5.0,
      reviews: 31,
      price: 550,
      badge: null,
      image: "path/to/image3.jpg",
    },
    {
      id: 4,
      name: "Nazrul Q",
      title: "I will build AI website or AI SaaS or AI chatbot app using GPT4 OpenAI",
      rating: 5.0,
      reviews: 340,
      price: 100,
      badge: null,
      image: "path/to/image4.jpg",
    },
  ];
  const [sortBy, setSortBy] = useState("Best selling");

  const sortServices = (services, sortBy) => {
    if (sortBy === "Price: Low to High") {
      return [...services].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "Price: High to Low") {
      return [...services].sort((a, b) => b.price - a.price);
    }
    return services; // Default sort: Best selling (can be customized)
  };




  return (<>
    <div className='d-flex flex-row flex-wrap justify-content-center gap-4'>
      {services && services.map((service, i) => (
        <Link style={{textDecoration:'none'}} key={i} to={`/service/${service.id}`}>
          <ServiceCard key={i}
            title={service.title}
            description={service.description}
            price={service.price}
            imageUrl={'/assets/5.jpg'}
            status={service.status}
          />
        </Link>
      ))}
    </div>
    <div className='text-center m-5'>
        {Array.from({ length: lastPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="container my-5">
      <h2 className="text-center">AI Websites & Software</h2>
      <p className="text-center text-muted">
        Empower your website and software with AI-Powered capabilities
      </p>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button className="btn btn-outline-secondary mx-1">Service options</button>
          <button className="btn btn-outline-secondary mx-1">Seller details</button>
          <button className="btn btn-outline-secondary mx-1">Budget</button>
          <button className="btn btn-outline-secondary mx-1">Delivery time</button>
        </div>
        <select
          className="form-select w-auto"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Best selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="row">
        {sortedServices.map((service) => (
          <div key={service.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={'/assets/5.jpg'}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h6 className="card-title">{service.title}</h6>
                <p className="card-text">
                  <strong>${service.price}</strong> &middot;{" "}
                  <span className="text-warning">
                    {service.rating} ★ ({service.reviews})
                  </span>
                </p>
                {service.badge && (
                  <span className="badge bg-success">{service.badge}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

}
