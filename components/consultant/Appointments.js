import React from 'react'

export default function Appointments() {
    return (
        <>

            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Appointments</h4>
                    </div>

                    <div className="card-body">
                        <div className='row'>
                            <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Appointment 1</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Appontment 2</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Appointment 3</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
