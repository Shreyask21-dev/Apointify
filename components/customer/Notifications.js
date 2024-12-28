import React from 'react'

export default function Notifications() {

    const notifications = [
        {
            id: 1,
            name: 'John Doe',
            description: 'Appointment successfully booked.',
            notificationTime: '10:30 AM, Dec 27',
            appointmentDateTime: 'Dec 30, 2024 at 2:00 PM',
            timeSlot: 'Morning Slot (2:00 PM - 3:00 PM)',
            paymentStatus: 'Paid',
            plan: '90 Min'
        },
        {
            id: 2,
            name: 'Jane Smith',
            description: 'Appointment successfully booked.',
            notificationTime: '11:00 AM, Dec 27',
            appointmentDateTime: 'Dec 31, 2024 at 4:00 PM',
            timeSlot: 'Afternoon Slot (4:00 PM - 5:00 PM)',
            paymentStatus: 'Paid',
            plan: '60 Min'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            description: 'Appointment successfully booked.',
            notificationTime: '11:30 AM, Dec 27',
            appointmentDateTime: 'Jan 1, 2025 at 10:00 AM',
            timeSlot: 'Morning Slot (10:00 AM - 11:00 AM)',
            paymentStatus: 'Paid',
            plan: '30 Min'
        },
        // Add more notification objects as needed
    ];

    return (
        <>
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Notifications</h4>
                    </div>


                    <div className="card-body">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="card mb-3 position-relative"
                                style={{ width: '100%' }}
                            >
                                <div className="d-flex align-items-center justify-content-between p-3">
                                    <div>
                                        <h5 className="mb-1">{notification.name}</h5>
                                        <p className="mb-0 text-muted">{notification.description}</p>
                                        {/* Additional Details */}
                                        <div className="mt-2">
                                            <p className="mb-1">
                                                <strong>Appointment Date & Time:</strong>{' '}
                                                {notification.appointmentDateTime}
                                            </p>
                                            <p className="mb-1">
                                                <strong>Time Slot:</strong> {notification.timeSlot}
                                            </p>
                                            <p className="mb-1">
                                                <strong>Payment Status:</strong> {notification.paymentStatus}
                                            </p>
                                            <p className="mb-0">
                                                <strong>Plan:</strong> {notification.plan}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Time and Close Button */}
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: '8px',
                                        right: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <small className="text-muted me-2">{notification.notificationTime}</small>
                                    <button
                                        className="btn btn-close"
                                        aria-label="Close"
                                        style={{ fontSize: '1.2rem' }}
                                        onClick={() =>
                                            alert(`Close clicked for: ${notification.name}`)
                                        }
                                    >

                                    </button>
                                </div>
                                {/* Action Buttons */}
                                <div className="d-flex justify-content-end p-3">
                                    <button className="btn btn-primary me-2">Join Appointment</button>
                                    <button className="btn btn-outline-dark">Start a Chat</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-body">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="card mb-3 position-relative"
                                style={{ width: '100%' }}
                            >
                                <div className="d-flex align-items-center justify-content-between p-3">
                                    <div>
                                        <h5 className="mb-1">{notification.name}</h5>
                                        <p className="mb-0 text-muted">{notification.description}</p>
                                        {/* Additional Details */}
                                        <div className="mt-2">
                                            <p className="mb-1">
                                                <strong>Appointment Date & Time:</strong>{' '}
                                                {notification.appointmentDateTime}
                                            </p>
                                            <p className="mb-1">
                                                <strong>Time Slot:</strong> {notification.timeSlot}
                                            </p>
                                            <p className="mb-1">
                                                <strong>Payment Status:</strong> {notification.paymentStatus}
                                            </p>
                                            <p className="mb-0">
                                                <strong>Plan:</strong> {notification.plan}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Time and Close Button */}
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: '8px',
                                        right: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <small className="text-muted me-2">{notification.notificationTime}</small>
                                    <button
                                        className="btn btn-close"
                                        aria-label="Close"
                                        style={{ fontSize: '1.2rem' }}
                                        onClick={() =>
                                            alert(`Close clicked for: ${notification.name}`)
                                        }
                                    >

                                    </button>
                                </div>
                                {/* Action Buttons */}
                                <div className="d-flex justify-content-end p-3">
                                    <button className="btn btn-primary me-2">Join Appointment</button>
                                    <button className="btn btn-danger">Delete Appointment</button>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </>
    )
}
