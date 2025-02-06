import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import axiosClient from '../../../api/axios';
import { useEffect, useState } from 'react';



export default function ShowServices() {


  const { services, loading } = useSelector(state => state.servicesReducer)

  const dispatch = useDispatch();
  // const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const service = queryParams.get('service');
  const semicategoryId = queryParams.get('semicategoryId');
  const subcategoryId = queryParams.get('subcategoryId');
  const categoryId = queryParams.get('categoryId');





  async function fetchServices(page = 1) {
    dispatch({ type: 'TRUE_LOADING', payload: true })
    await axiosClient.get(`/services?page=${page}`)
      .then((response) => {
        dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: response.data.data })
        console.log(response.data.data)
        // response.data.data.map((service)=>{console.log(JSON.parse(service.image_url)[0])})
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
    // fetchServices();
    if (query) {
      console.log(query)
      axiosClient.get('/services?service=' + query)
        .then((res) => {
          dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: res.data.data })
          // console.log(res)
          // console.log(services)
        })
    }
    else if (service) {
      console.log(service)
      axiosClient.get('/services?service=' + service)
        .then((res) => {
          dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: res.data.data })
          console.log(res)
        })
    }
    else if (subcategoryId) {
      console.log(semicategoryId)
      axiosClient.get('/services?subcategoryId=' + subcategoryId)
        .then((res) => {
          dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: res.data.data })
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else if (categoryId) {
      console.log(semicategoryId)
      axiosClient.get('/services?categoryId=' + categoryId)
        .then((res) => {
          dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: res.data.data })
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }, [query, service, semicategoryId, subcategoryId, categoryId]);


  const handlePageChange = (page) => {
    fetchServices(page);
  };

  return (<>


    <div className='d-flex flex-row flex-wrap justify-content-center gap-4'>
      {services.length ==0 && <p className='m-5'>Nothing to show!.</p>}
      {services && services.map((service, i) => (
        <Link style={{ textDecoration: 'none' }} key={i} to={`/service/${service.id}`}>
          <ServiceCard key={i}
            title={service.title}
            price={service.price}
            imageUrl={`http://127.0.0.1:8000/storage/${JSON.parse(service.image_url)[0]}`}
            status={service.status}
            provider={service.user}
          />
        </Link>
      ))}
    </div>
    {services.length !=0 &&
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
    }
  </>
  );

}
