import React, { useState } from 'react'

// import full calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // Month view
import timeGridPlugin from '@fullcalendar/timegrid'; // Week/Day view
import interactionPlugin from '@fullcalendar/interaction'; // Click & Drag

export default function Calender() {

    const [events, setEvents] = useState([
        { title: 'Event 1', date: '2024-12-12' },
        { title: 'Event 2', date: '2024-12-15' },
    ]);

    return (
        <>
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Calender</h4>
                    </div>


                    <div className="card-body">
                        <div className="card-body">
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth" // Default view
                                editable={true} // Enable drag/drop
                                selectable={true} // Allow date selection
                                events={events} // Pass your events
                            // dateClick={handleDateClick} // Handle date click
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
