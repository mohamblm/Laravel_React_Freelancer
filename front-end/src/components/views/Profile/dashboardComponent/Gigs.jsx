import React, { useState } from 'react';
import NewGig from './NewGig';



export default function Gigs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const CloseModal = () => { setIsModalOpen(false) }
    return (
        <>
            <div className="container-fluid mt-1">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold">Gigs</h2>
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
                    {['ACTIVE', 'DRAFT', 'DENIED', 'PAUSED'].map(
                        (tab) => (
                            <li className="nav-item" key={tab}>
                                <a
                                    href={`#${tab.toLowerCase().replace(' ', '-')}`}
                                    className={`nav-link ${tab === 'ACTIVE' ? 'active' : ''}`}
                                >
                                    {tab}{' '}
                                    {tab === 'DRAFT' && (
                                        <span className="badge bg-success ms-2">1</span>
                                    )}
                                </a>
                            </li>
                        )
                    )}
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
                                    <th><input
                                        type="checkbox"
                                        className="form-check-input m-0 p-2"
                                    /></th>
                                    <th>GIG</th>
                                    <th>IMPRESSIONS</th>
                                    <th>CLICKS</th>
                                    <th>ORDERS</th>
                                    {/* <th>CANCELLATIONS</th> */}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input
                                        type="checkbox"
                                        className="form-check-input m-0 p-2"
                                    /></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src=""
                                                alt="Gig Thumbnail"
                                                className="rounded me-3"
                                            />
                                            <span>do something like ai development</span>
                                        </div>
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    {/* <td>0%</td> */}
                                    <td>
                                        <button className="btn btn-link px-2 py-1">⋮</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Gig Modal */}
            <NewGig isModalOpen={isModalOpen} CloseModal={CloseModal} />
        </>
    );
}
