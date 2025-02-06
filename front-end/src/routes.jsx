import {createBrowserRouter} from 'react-router-dom';
import MainPage from './components/layouts/MainPage';
import DefaultLayout from './components/layouts/DefaultLayout';
import Profile from './components/views/Profile/Profile';
import Home from './components/Home'
import Page404 from './components/views/Page404'
import ShowService from './components/views/services/ShowService';
import BecomeSaller from './components/views/BecomeSaller/Becomesaller'
import GuestLayout from './components/layouts/GuestLayout';
import Personnel_inf from './components/views/BecomeSaller/Personel_Inf'
import Professional_Info from './components/views/BecomeSaller/Professional_Info';
import Account_Security from './components/views/BecomeSaller/Account_Security'
import Dashboard from './components/views/Profile/Dashboard'
import Gigs from './components/views/Profile/dashboardComponent/Gigs';
import Verify from './components/views/Verify';
import ShowServices from './components/views/services/ShowServices';
import { Navigate } from 'react-router-dom';
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
                path:'/services',
                element:<ShowServices />
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
                    {
                        path:'/dashboard',
                        element:<Dashboard/>,
                        children:[
                            {
                                path: '',
                                element: <Navigate to="Gigs"/>
                            },
                            {
                                path:'Gigs',
                                element:<Gigs />
                            },
                            {
                                path:'Orders',
                                element:'Orders'
                            },
                            {
                                path:'Earnings',
                                element:'Earnings'
                            }
                        ]
                    }
                    
                ]
            },
            {
                path:'/',
                element:<GuestLayout />,
                children:[
                    {
                        path:'/BecomeSaller',
                        element:<BecomeSaller/>,
                    },
                    {
                        path:'/Personnel_inf',
                        element:<Personnel_inf/>,
                    },
                    {
                        path:'/Professional_Info',
                        element:<Professional_Info/>,
                    },
                    {
                        path:'/Account_Security',
                        element:<Account_Security/>,
                    },  
                ]
                
            },
            
            
        ]
    },
    {
        path:'*',
        element:<Page404 />
    },
    {
        path:'/verify',
        element:<Verify />
    }
])

export default route;