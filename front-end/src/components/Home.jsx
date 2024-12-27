import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import ServiceCard from './views/services/ServiceCard';
import axiosClient from '../api/axios';
import { useEffect, useState } from 'react';
export default function Home() {


  const { services, loading } = useSelector(state => state.servicesReducer)
  const { user, token } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  // const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  useEffect(()=>{
    if(!user && token){
      axiosClient.get('/user')
      .then((res)=>{
        console.log(res.data,token)
        dispatch({type:'GET_USER', payload:res.data})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },[])

  

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




  return (<>
    <div className='d-flex flex-row flex-wrap justify-content-center gap-4'>
      {services && services.map((service, i) => (
        <Link key={i} to={`/service/${service.id}`}>
          <ServiceCard key={i}
            title={service.title}
            description={service.description}
            price={service.price}
            imageUrl={service.imageUrl}
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
    </>
  );

}
