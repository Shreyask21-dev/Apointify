import React, { useState } from 'react'

export default function Profile() {

    const [accountData, setAccountData] = useState({
            fullName: 'John Doe',
            password: 'password123',
            email: 'johndoe@example.com',
            phoneNumber: '123-456-7890',
            role: 'Admin',
        });

        const handleAccountChange = (e) => {
            const { name, value } = e.target;
            setAccountData({
                ...accountData,
                [name]: value,
            });
        };

        const handleAccountSubmit = (e) => {
            e.preventDefault();
            console.log('Account Data Updated:', accountData);
        };

    return ( 
        <>
            <div className="d-grid gap-3 gap-lg-5">

            <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Update Account</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleAccountSubmit}>
                            <div className="mb-3">
                                <label htmlFor="accountFullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="accountFullName"
                                    name="fullName"
                                    value={accountData.fullName}
                                    onChange={handleAccountChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={accountData.password}
                                    onChange={handleAccountChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={accountData.email}
                                    onChange={handleAccountChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={accountData.phoneNumber}
                                    onChange={handleAccountChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    name="role"
                                    value={accountData.role}
                                    onChange={handleAccountChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}
