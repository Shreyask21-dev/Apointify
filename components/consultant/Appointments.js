import React from 'react'
import DataTable from '../DataTableComponent'

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
                           <DataTable />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
