import React, { useState } from 'react'
import PopUpAddPlan from './PopUpAddPlan'
import PopUpEditPlan from './PopUpEditPlan';

export default function Plans() {
    const [PopUp, setPopUp] = useState(false)
    const [plans, setPlans] = useState([]);

    const [EditPopUp, setEditPopUp] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);

    const handleSavePlan = (newPlan) => {
        setPlans([...plans, newPlan]);
    };

    const handleEditPlan = (updatedPlan) => {
        setPlans(
            plans.map((plan) =>
                plan.name === currentPlan.name ? updatedPlan : plan
            )
        );
    };

    return (
        <>
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <h4 className="card-header-title">Plans</h4>
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={() => { setPopUp(true) }}><i className="bi bi-plus-circle"></i> Plan</button>
                            </div>
                        </div>
                    </div>


                    <div className="card-body">

                        <p className='mt-3'>
                            Explore our carefully curated plans designed to meet your needs.
                            Choose from a variety of options tailored for convenience and premium experiences.
                            Each plan offers unique features, ensuring value and quality.
                        </p>


                        <div className="row my-3">
                            {plans.map((plan, index) => (
                                <div className="col-md-4 col-12" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <img
                                                    src="/assets/img/number-one.png"
                                                    style={{ width: '15%' }}
                                                />
                                                &nbsp;{plan.name}
                                            </h5>
                                            <p className="card-text" style={{ textAlign: 'justify' }}>
                                                {plan.description}
                                            </p>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                                className="my-3"
                                            >
                                                <div>
                                                    <strong>Time:</strong> {plan.duration} hrs
                                                </div>
                                                <div>
                                                    <strong>Rate:</strong> {plan.price} Rs
                                                </div>
                                            </div>

                                            <button className="btn btn-primary" onClick={() => {
                                                setCurrentPlan({
                                                    name: "Platinum",
                                                    description: "This plan offers a premium experience designed to cater to your needs...",
                                                    duration: 1.5,
                                                    price: 750,
                                                });
                                                setEditPopUp(true);
                                            }}>Edit Plan</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title"> <img src='/assets/img/number-one.png' style={{ width: "15%" }} /> &nbsp;Platinum</h5>
                                        <p className="card-text" style={{ textAlign: "justify" }}>
                                            This plan offers a premium experience designed to cater to your needs.
                                            Perfect for those looking for top-notch service with personalized attention.
                                        </p>
                                        <div style={{ display: "flex", justifyContent: "space-between" }} className='my-3'>
                                            <div>
                                                <strong>Time:</strong> 1.5 hrs
                                            </div>
                                            <div>
                                                <strong>Rate:</strong> 750 Rs
                                            </div>
                                        </div>

                                        <button className="btn btn-primary" onClick={() => {
                                            setCurrentPlan({
                                                name: "Gold",
                                                description: "This plan offers a premium experience designed to cater to your needs...",
                                                duration: 1,
                                                price: 500,
                                            });
                                            setEditPopUp(true);
                                        }}>Edit Plan</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title"> <img src='/assets/img/two.png' style={{ width: "15%" }} /> &nbsp;Gold</h5>
                                        <p className="card-text" style={{ textAlign: "justify" }}>
                                            This plan offers a premium experience designed to cater to your needs.
                                            Perfect for those looking for top-notch service with personalized attention.
                                        </p>
                                        <div style={{ display: "flex", justifyContent: "space-between" }} className='my-3'>
                                            <div>
                                                <strong>Time:</strong> 1 hrs
                                            </div>
                                            <div>
                                                <strong>Rate:</strong> 500 Rs
                                            </div>
                                        </div>


                                        <button className="btn btn-primary" onClick={() => {
                                            setCurrentPlan({
                                                name: "Platinum",
                                                description: "This plan offers a premium experience designed to cater to your needs...",
                                                duration: 30,
                                                price: 250,
                                            });
                                            setEditPopUp(true);
                                        }}>Edit Plan</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title"> <img src='/assets/img/number-3.png' style={{ width: "15%" }} /> &nbsp;Silver</h5>
                                        <p className="card-text" style={{ textAlign: "justify" }}>
                                            This plan offers a premium experience designed to cater to your needs.
                                            Perfect for those looking for top-notch service with personalized attention.
                                        </p>
                                        <div style={{ display: "flex", justifyContent: "space-between" }} className='my-3'>
                                            <div>
                                                <strong>Time:</strong> 30 min
                                            </div>
                                            <div>
                                                <strong>Rate:</strong> 250 Rs
                                            </div>
                                        </div>


                                        <button className="btn btn-primary" onClick={() => {
                                            setCurrentPlan(plan); // Set the selected plan
                                            setEditPopUp(true);  // Open the edit popup
                                        }}>Edit Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {PopUp && (
                <PopUpAddPlan
                    onSave={handleSavePlan}
                    onClose={() => setPopUp(false)}
                />
            )}
            {EditPopUp && currentPlan && (
                <PopUpEditPlan
                    plan={currentPlan}
                    onSave={handleEditPlan}
                    onClose={() => setEditPopUp(false)}
                />
            )}

        </>
    )
}
