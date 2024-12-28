import React from 'react'
import CustomerAppointmentsDataTable from '../CustomerAppointmentsDataTable'

export default function Appointments() {
    return (
        <> 
            
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Appointments</h4>
                    </div>


                    <div className="card-body">
                        
                        <CustomerAppointmentsDataTable />

                    </div>

                </div>

            </div>
            
        </>
    )
}
