import {createBrowserRouter} from 'react-router-dom';
import MainPage from './components/layouts/MainPage';
import DefaultLayout from './components/layouts/DefaultLayout';
import Profile from './components/views/Profile/Profile';
import Home from './components/Home'
import Page404 from './components/views/Page404'
import ShowService from './components/views/services/ShowService';
// import { Navigate } from 'react-router-dom';
 const route=createBrowserRouter([
    {
        path:'/',
        element:<MainPage />,
        children:[
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/service/:id',
                element:<ShowService />
            },
            {
                path:'/',
                element:<DefaultLayout />,
                children:[
                    {
                        path:'/profile',
                        element:<Profile/>,
                    },
                    
                ]
            },
            // {
            //     path:'/',
            //     element:<GuestLayout />,
            //     children:[
                    
                    
            //     ]
            // },
            
            
        ]
    },
    {
        path:'*',
        element:<Page404 />
    }
])

export default route;