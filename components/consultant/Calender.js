import React, { useState, useEffect } from 'react'
 
// import full calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // Month view
import timeGridPlugin from '@fullcalendar/timegrid'; // Week/Day view
import interactionPlugin from '@fullcalendar/interaction'; // Click & Drag

export default function Calender() {

    useEffect(() => {
        // Dynamically load Razorpay script
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script); // Cleanup when the component unmounts
        };
      }, []);
    

    const [events, setEvents] = useState([
        { title: 'Event 1', date: '2024-12-12' },
        { title: 'Event 2', date: '2024-12-15' },
    ]);

    // const handleDateClick = (info) => {
    //     // Example: Add a new event on the clicked date
    //     const newEvent = { title: 'New Event', date: info.dateStr };
    //     setEvents((prevEvents) => [...prevEvents, newEvent]);
    //     alert(`You clicked on ${info.dateStr}`);
    // };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    // const [newEventTitle, setNewEventTitle] = useState('');

    // const handleDateClick = (info) => {
    //     setSelectedDate(info.dateStr); // Store the clicked date
    //     setIsModalOpen(true); // Open the form modal
    // };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     if (newEventTitle.trim()) {
    //         setEvents((prevEvents) => [
    //             ...prevEvents,
    //             { title: newEventTitle, date: selectedDate },
    //         ]);
    //         setNewEventTitle(''); // Reset the form field
    //         setIsModalOpen(false); // Close the modal
    //     } else {
    //         alert('Please enter an event title.');
    //     }
    // };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    //     setNewEventTitle('');
    // };

    const [formData, setFormData] = useState({
        title: '',
        name: '',
        timeSlot: '',
        duration: '30', // Default duration 30 mins
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr); // Store the clicked date
        setIsModalOpen(true); // Open the form modal
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    var options = {
        "key": "rzp_test_r8qYbHqa4yziq9", // Enter the Key ID generated from the Dashboard
        "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    const handlePayment = () => {

        if (!window.Razorpay) {
            alert('Razorpay script not loaded');
            return;
          }
      
          const options = {
            key: "rzp_test_r8qYbHqa4yziq9",
            amount: "100", 
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
            prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
            handler: (response) => {
                alert(`Payment of Rs. ${calculateAmount()} successful!`);
                setPaymentSuccess(true);
            },
            modal: {
                ondismiss: () => {
                    alert('Payment cancelled');
                }
            }
          };
      
          const rzp = new window.Razorpay(options);
          rzp.open();

        // alert(`Payment of Rs. ${calculateAmount()} successful!`);
        // setPaymentSuccess(true);

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!paymentSuccess) {
            alert('Please complete the payment first.');
            return;
        }

        const { title, name, timeSlot, duration } = formData;

        if (title.trim() && name.trim() && timeSlot.trim()) {
            setEvents((prevEvents) => [
                ...prevEvents,
                {
                    title: `${title} by ${name}`,
                    date: selectedDate,
                    timeSlot,
                    duration,
                },
            ]);
            setIsModalOpen(false);
            setFormData({ title: '', name: '', timeSlot: '', duration: '30' }); // Reset form
            setPaymentSuccess(false); // Reset payment status
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setFormData({ title: '', name: '', timeSlot: '', duration: '30' });
        setPaymentSuccess(false); // Reset payment status
    };

    const calculateAmount = () => {
        switch (formData.duration) {
            case '30':
                return 100;
            case '60':
                return 200;
            case '90':
                return 300;
            default:
                return 0;
        }
    };


    return (
        <>

            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Monthly Calender</h4>
                    </div>


                    <div className="card-body">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth" // Default view
                            editable={true} // Enable drag/drop
                            selectable={true} // Allow date selection
                            events={events} // Pass your events
                            dateClick={handleDateClick} // Handle date click
                        />
                    </div>

                </div>

            </div>

            {/* {isModalOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <h2>Add Event</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Event Title:
                                <input
                                    type="text"
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                    style={modalStyles.input}
                                />
                            </label>
                            <div style={modalStyles.buttons}>
                                <button type="submit" style={modalStyles.button}>
                                    Add Event
                                </button>
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    style={modalStyles.buttonCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}


            {isModalOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <h2>Add Event</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Event Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormChange}
                                    style={modalStyles.input}
                                />
                            </label>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    style={modalStyles.input}
                                />
                            </label>
                            <label>
                                Time Slot:
                                <input
                                    type="text"
                                    name="timeSlot"
                                    value={formData.timeSlot}
                                    onChange={handleFormChange}
                                    placeholder="e.g., 10:00 AM - 10:30 AM"
                                    style={modalStyles.input}
                                />
                            </label>
                            <label>
                                Duration:
                                <select
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleFormChange}
                                    style={modalStyles.input}
                                >
                                    <option value="30">30 mins</option>
                                    <option value="60">60 mins</option>
                                    <option value="90">90 mins</option>
                                </select>
                            </label>
                            <div style={modalStyles.buttons}>
                            {/* type="submit" */}
                                <button  style={modalStyles.button}>
                                    Add Event
                                </button>

                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    style={modalStyles.buttonCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div style={{ marginTop: '10px' }}>
                            <button
                                style={modalStyles.payButton}
                                onClick={handlePayment}
                                disabled={paymentSuccess}
                            >
                                {paymentSuccess ? 'Payment Complete' : `Pay Rs. ${calculateAmount()}`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// Inline styles for modal
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        background: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    input: {
        margin: '10px 0',
        padding: '8px',
        width: '90%',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    button: {
        padding: '8px 12px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    buttonCancel: {
        padding: '8px 12px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    payButton: {
        padding: '8px 12px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
};

