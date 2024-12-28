import React from 'react'
import CustomerTransaction from '../CustomerTransaction'

export default function Transactions() {
    return (
        <>
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Transactions</h4>
                    </div>

                    <div className="card-body">
                        <CustomerTransaction />
                    </div>

                </div>


            </div>
        </>
    )
}
