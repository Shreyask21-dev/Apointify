import React, { useState, useEffect } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import { useRouter } from 'next/navigation'
import Profile from '@/components/customer/Profile'
import Calender from '@/components/customer/Calender'
import Appointments from '@/components/customer/Appointments'
import Notifications from '@/components/customer/Notifications'
import Transactions from '@/components/customer/Transactions'

export default function CustomerBoard() {

  const router = useRouter()

  const [data, setData] = useState(null);

  useEffect(() => {
    // Safely access localStorage after the component is mounted
    const userData = localStorage.getItem('userData'); // Make sure 'userData' is a string
    setData(userData);
    console.log(userData)
  }, []);


  // useEffect(() => {
  //   if (data === "") {
  //     router.push('/signin');
  //   }
  // }, [data, router]);




  const [Page, setPage] = useState("profile")

  const [Active, setActive] = useState("profile")


  const sidebarClick = (e) => {
    // const nameClicked = JSON.stringify(e.target.getAttribute('name'))
    // setPage(`nameClicked`)
    const nameClicked = e.target.getAttribute('name') // Get the name directly
    setPage(nameClicked)
    setActive(nameClicked)
    console.log(nameClicked)
  }

  return (
    <>
      {data != "" ?
        <>
          <Header />
          <main id="content" role="main" className="bg-light">

            <div className="navbar-dark bg-dark" style={{ backgroundImage: `url("/assets/svg/components/wave-pattern-light.svg")`, backgroundColor: "#21325B !important" }}>
              <div className="container content-space-1 content-space-b-lg-3">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="d-none d-lg-block">
                      <h1 className="h2 text-white">Dashboard</h1>
                    </div>


                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-light mb-0">
                        <li className="breadcrumb-item">Customer</li>
                      </ol>
                    </nav>

                  </div>


                  <div className="col-auto">
                    <div className="d-none d-lg-block ">
                      <span className="btn btn-soft-light btn-sm btn-secondary" onClick={() => { Router.push('/signin') }}>Log out</span>
                    </div>


                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarNav" aria-controls="sidebarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-default">
                        <i className="bi-list"></i>
                      </span>
                      <span className="navbar-toggler-toggled">
                        <i className="bi-x"></i>
                      </span>
                    </button>

                  </div>

                </div>

              </div>
            </div>



            <div className="container content-space-1 content-space-t-lg-0 content-space-b-lg-2 mt-lg-n10">
              <div className="row">

                <div className="col-lg-3">

                  <div className="navbar-expand-lg navbar-light">
                    <div id="sidebarNav" className="collapse navbar-collapse navbar-vertical">

                      <div className="card flex-grow-1 mb-5">
                        <div className="card-body">

                          <div className="d-none d-lg-block text-center mb-5">
                            <div className="avatar avatar-xxl avatar-circle mb-3">
                              <img className="avatar-img" src="/assets/img/160x160/img9.jpg" alt="Image Description" />
                              <img className="avatar-status avatar-lg-status" src="/assets/svg/illustrations/top-vendor.svg" alt="Image Description" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified user" />
                            </div>

                            <h4 className="card-title mb-0">Natalie Curtis</h4>
                            <p className="card-text small">natalie@example.com</p>
                          </div>



                          {/* <span className="text-cap">Account</span> */}


                          <ul className="nav nav-sm nav-tabs nav-vertical mb-4">
                            <li className="nav-item">
                              <span className={`nav-link ${Active == 'profile' ? 'active' : ''}`} style={{ cursor: "pointer" }} name="profile" onClick={sidebarClick}>
                                <i className="bi-person-badge nav-icon"></i> Profile
                              </span>
                            </li>
                            <li className="nav-item">
                              <span className={`nav-link ${Active == 'appointments' ? 'active' : ''}`} style={{ cursor: "pointer" }} name="appointments" onClick={sidebarClick}>
                                <i className="bi-clock nav-icon"></i> Appointments
                              </span>
                            </li>
                            <li className="nav-item">
                              <span className={`nav-link ${Active == 'calender' ? 'active' : ''}`} style={{ cursor: "pointer" }} name="calender" onClick={sidebarClick}>
                                <i className="bi-calendar-event nav-icon"></i> Calender
                              </span>
                            </li>
                            <li className="nav-item">
                              <span className={`nav-link ${Active == 'transactions' ? 'active' : ''}`} style={{ cursor: "pointer" }} name="transactions" onClick={sidebarClick}>
                                <i className="bi-wallet2 nav-icon"></i> Transactions
                              </span>
                            </li>
                            <li className="nav-item">
                              <span className={`nav-link ${Active == 'notifications' ? 'active' : ''}`} style={{ cursor: "pointer" }} name="notifications" onClick={sidebarClick}>
                                <i className="bi-bell nav-icon"></i> Notifications
                                <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">1</span>
                              </span>
                            </li>

                          </ul>

                          <div className="d-lg-none">
                            <div className="dropdown-divider"></div>


                            <ul className="nav nav-sm nav-tabs nav-vertical">
                              <li className="nav-item">
                                <span className="nav-link" onClick={() => { Router.push('/signin') }}>
                                  <i className="bi-box-arrow-right nav-icon"></i> Log out
                                </span>
                              </li>
                            </ul>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="col-lg-9">

                  {Page === "profile" && <Profile />}
                  {Page === "appointments" && <Appointments />}
                  {Page === "calender" && <Calender />}
                  {Page === "transactions" && <Transactions />}
                  {Page === "notifications" && <Notifications />}


                </div>


              </div>

            </div>

          </main>
          <Footer />
        </>
        : (router.push('/'))}


    </>
  )
}
