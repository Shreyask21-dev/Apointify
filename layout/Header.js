import React, { useEffect } from 'react';

export default function Header() {


    return (
        <>
            <div className='header'>

                <nav class="navbar navbar-expand-lg ">
                    <div class="container">
                        <div>

                        <div class="navbar-brand">
                            <a href='/'>
                            <img src='/images/logo/appo.png' alt='Appointify' />
                            </a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        </div>
                        <div>

                        <div class="collapse navbar-collapse" id="navbarScroll">
                            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '500px', fontFamily:"Inter, San-serif" }}>
                                <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>

                                <li class="nav-item"><a class="nav-link" href="/about-us/">About us</a></li>
                                <li class="nav-item"><a class="nav-link" href="/how-to-work">How to Work</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Consultant Types
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Management Consultants</a></li>
                                        <li><a class="dropdown-item" href="#">Strategy Consultants</a></li>
                                        <li><a class="dropdown-item" href="#">Marketing Consultants</a></li>
                                        <li><a class="dropdown-item" href="#">Environmental Consultants</a></li>
                                        <li><a class="dropdown-item" href="#">Doctor</a></li>

                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contact-us">Contact us</a></li>

                                <li class="list-inline-item">

                                    <div class="btn-group" style={{backgroundColor:"transparent"}}>
                                        <button type="button" class="btn btn-soft-light btn-xs dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                                            <span class="d-flex align-items-center">
                                                {/* <img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width="16" /> */}
                                                <span>SignIn / SignUp</span>
                                            </span>
                                        </button>

                                        <div class="dropdown-menu" aria-labelledby="footerSelectLanguage">
                                           
                                            <a class="dropdown-item d-flex align-items-center" href="/signin">
                                                <span>Consultant</span>
                                            </a>
                                            <a class="dropdown-item d-flex align-items-center" href="/signin"> 
                                                <span>Customer</span>
                                            </a>

                                        </div>
                                    </div>

                                </li>
                            </ul>


                            {/* <button class="btn btn-outline-success" type="submit">Sign in / Sign out</button> */}

                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
