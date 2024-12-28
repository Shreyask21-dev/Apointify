import React, { useState } from 'react';

export default function Profile() {
    const [formData, setFormData] = useState({
        fullName: 'John Doe',
        domainName: 'Health Consultant',
        shortBio: 'Passionate about helping people live healthier lives.',
        facebookId: 'john.doe',
        twitterId: '@johndoe',
        youtubeId: 'JohnDoeChannel',
        bestAt: 'Nutrition and fitness consulting',
        profilePhoto: null,
    });

    const [accountData, setAccountData] = useState({
        fullName: 'John Doe',
        password: 'password123',
        email: 'johndoe@example.com',
        phoneNumber: '123-456-7890',
        role: 'Admin',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            ...accountData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Updated:', formData);
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
                        <h4 className="card-header-title">Update Profile</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="domainName" className="form-label">Domain Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="domainName"
                                    name="domainName"
                                    value={formData.domainName}
                                    onChange={handleChange}
                                    placeholder="e.g., Health Consultant, Gym Consultant"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="shortBio" className="form-label">Short Bio</label>
                                <textarea
                                    className="form-control"
                                    id="shortBio"
                                    name="shortBio"
                                    value={formData.shortBio}
                                    onChange={handleChange}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="bestAt" className="form-label">What Are You Best At?</label>
                                <textarea
                                    className="form-control"
                                    id="bestAt"
                                    name="bestAt"
                                    value={formData.bestAt}
                                    onChange={handleChange}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="facebookId" className="form-label">Facebook ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="facebookId"
                                    name="facebookId"
                                    value={formData.facebookId}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="twitterId" className="form-label">Twitter ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="twitterId"
                                    name="twitterId"
                                    value={formData.twitterId}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="youtubeId" className="form-label">YouTube ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="youtubeId"
                                    name="youtubeId"
                                    value={formData.youtubeId}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="profilePhoto" className="form-label">Upload Profile Photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profilePhoto"
                                    name="profilePhoto"
                                    onChange={handleChange}
                                    accept="image/*"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>

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
    );
}
