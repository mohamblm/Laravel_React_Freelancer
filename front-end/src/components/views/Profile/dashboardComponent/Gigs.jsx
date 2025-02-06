import { useState, useEffect, useMemo, useCallback } from 'react';
import axiosClient from '../../../../api/axios';
import NewGig from './NewGig';
import { useDispatch } from 'react-redux';

export default function Gigs() {
    const dispatch=useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [activeTab, setActiveTab] = useState('active');
    const [Ntf,setNtf]=useState(false);

    // Fetch services only once on component mount
    useEffect(() => {
        axiosClient.get('myservices')
            .then((res) => {
                setServices(res.data.services || []);
            })
            .catch((err) => {
                console.error('Error fetching services:', err);
            });
    }, [isModalOpen]);

    // Filtered services based on activeTab
    const filteredServices = useMemo(() => {
        return services.filter(service => service.status === activeTab);
    }, [services, activeTab]);

    // Tab change handler
    const handleTabChange =(tab) => {
        setActiveTab(tab);
        if(Ntf && tab==='draft'){
            setNtf(false)
        }
    };


    const closeModal=(ntf)=>{
        if(ntf){setNtf(true)} 
        setIsModalOpen(false)
    }

    const handleChangestatus = (id, status) => {
        axiosClient.put(`/myservices/${id}`, { status: status })
            .then((res) => {
                console.log(res.data)
                const updatedServices = services.map((service) =>
                    service.id === id ? { ...service, status: status } : service
                );
                setServices(updatedServices); // Optimistically update UI
                dispatch({ type: 'NOTIFICATION', payload: res.data.message })
                setTimeout(() => { dispatch({ type: 'STOP_NOTIFICATION' }) }, 5000)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <>
            <div className="container-fluid mt-1">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold">Your Gigs</h2>
                    <div className="form-check mt-2">
                        <input
                            className="form-check-input p-2"
                            type="checkbox"
                            id="customOrdersSwitch"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="customOrdersSwitch">
                            Accepting Custom Orders
                        </label>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <ul className="nav nav-tabs mt-4">
                    {['active', 'draft', 'denied', 'paused'].map((tab) => (
                        <li className="nav-item" key={tab}>
                            <button
                                className={`nav-link ${tab === activeTab ? 'active' : ''}`}
                                onClick={() => handleTabChange(tab)}
                            >
                                {tab} 
                                {Ntf && tab==='draft' && 
                                <span className='bg-success text-white fw-bold p- px-1 mx-1 rounded-circle' >1</span>}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Gigs Table */}
                <div className="card mt-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">DRAFT GIGS</h5>
                        <button
                            className="btn bg-success p-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            CREATE A NEW GIG
                        </button>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            className="form-check-input m-0 p-2"
                                        />
                                    </th>
                                    <th>GIG Title</th>
                                    <th>IMPRESSIONS</th>
                                    <th>CLICKS</th>
                                    <th>ORDERS</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredServices.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            No gigs to show.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredServices.map((service, index) => (
                                        <tr className="align-items-center" key={index}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input m-0 p-2"
                                                />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={`http://127.0.0.1:8000/storage/${JSON.parse(service.image_url)[0]}`}
                                                        alt="Gig Thumbnail"
                                                        className="rounded me-3"
                                                        style={{ width: 50 }}
                                                    />
                                                    <span>{service?.title}</span>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-primary p-0 px-2 dropdown-toggle"
                                                        type="button"
                                                        id="statusDropdown"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="statusDropdown">
                                                        <li><a className="dropdown-item" onClick={() => { handleChangestatus(service.id, 'active') }}>Active</a></li>
                                                        <li><a className="dropdown-item" onClick={() => { handleChangestatus(service.id, 'draft') }}>Draft</a></li>
                                                        <li><a className="dropdown-item" onClick={() => { handleChangestatus(service.id, 'denied') }}>Denied</a></li>
                                                        <li><a className="dropdown-item" onClick={() => { handleChangestatus(service.id, 'paused') }}>Paused</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Gig Modal */}
            <NewGig isModalOpen={isModalOpen} CloseModal={closeModal} />
        </>
    );
}
