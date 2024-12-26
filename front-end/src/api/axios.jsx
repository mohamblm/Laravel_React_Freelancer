import axios from 'axios';


const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    // withCredentials:true,
  })
//   axiosClient.defaults.headers.common['Content-Length'] = '0';
// axiosClient.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.43.0';
// axiosClient.defaults.headers.common['Accept'] = '*/*';
// axiosClient.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate, br';
// axiosClient.defaults.headers.common['Connection'] = 'keep-alive';
  
  axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
  })
  
  axiosClient.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN')
      // window.location.reload();
      console.log('ikan ghid')
    } else if (response.status === 404) {
      //Show not found
      console.log('ikanawa ghid ')
    }
  
    throw error;
  })


export default axiosClient;