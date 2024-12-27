import React, { useState } from 'react';

export default function PopUpEditPlan({ plan, onSave, onClose }) {
    const [planDetails, setPlanDetails] = useState(plan);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlanDetails({ ...planDetails, [name]: value });
    };

    const handleSave = () => {
        onSave(planDetails);
        onClose();
    };

    return (
        <>
            <style>
                {`
        .popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
        `}
            </style>
            <div className="popup-overlay">
                <div className="popup-content">
                    <h3>Edit Plan</h3>
                    <form>
                        <div className="form-group">
                            <label>Plan Name</label>
                            <input
                                type="text"
                                name="name"
                                value={planDetails.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Plan Description</label>
                            <textarea
                                name="description"
                                value={planDetails.description}
                                onChange={handleChange}
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Plan Duration (in hours)</label>
                            <input
                                type="text"
                                name="duration"
                                value={planDetails.duration}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Price (in Rs)</label>
                            <input
                                type="number"
                                name="price"
                                value={planDetails.price}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-actions my-2">
                            <button type="button" className="btn btn-secondary mx-2" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary mx-2" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
