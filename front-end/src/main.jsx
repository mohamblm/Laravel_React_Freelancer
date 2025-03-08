// import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import route from './routes';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
      {/* <App /> */}
    </Provider>
  // </StrictMode>,
)
