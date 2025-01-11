

export default function Gigs() {
    return (

        <div className="container mt-4 ">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold p-0">Gigs</h2>
                <div className="form-check ">
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
            <ul className="nav nav-tabs mt-3">
                <li className="nav-item">
                    <a className="nav-link active" href="#active">
                        ACTIVE
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#pending-approval">
                        PENDING APPROVAL
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#requires-modification">
                        REQUIRES MODIFICATION
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#draft">
                        DRAFT <span className="badge bg-success">1</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#denied">
                        DENIED
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#paused">
                        PAUSED
                    </a>
                </li>
            </ul>
            {/* Gigs Table */}
            <div className="card mt-3">
                <div className="card-body pt-0">
                    <div className="d-flex justify-content-between align-items-center pb-3 bordered border-bottom">
                        <h5 className="fw-bold">DRAFT GIGS</h5>
                        <button className="btn bg-success p-2 px-4">CREATE A NEW GIG</button>
                    </div>
                    <div className="table-responsive ">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="text-muted">
                                    <th scope="col" className="text-uppercase">Gig</th>
                                    <th scope="col" className="text-uppercase">Impressions</th>
                                    <th scope="col" className="text-uppercase">Clicks</th>
                                    <th scope="col" className="text-uppercase">Orders</th>
                                    <th scope="col" className="text-uppercase">Cancellations</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input me-3"
                                            />
                                            <span>
                                                <img
                                                    src="https://via.placeholder.com/50"
                                                    alt="Gig Thumbnail"
                                                    className="me-2"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                do something like ai development
                                            </span>
                                        </div>
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0%</td>
                                    <td>
                                        <button className="btn  dropdown-toggle p-2 px-4 " />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
