import React, { useEffect, useState } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import { useRouter } from 'next/navigation'

export default function consultant() {

    const Router = useRouter()

    const [data, setData] = useState(null);

    useEffect(() => {
        // Safely access localStorage after the component is mounted
        const userData = localStorage.getItem('userData'); // Make sure 'userData' is a string
        setData(userData);
        console.log(userData)
    }, []);


    useEffect(() => {
        if (data === "") {
            Router.push('/signin');
        }
    }, [data, Router]);


    return (
        <>
            {data != "" ?
                <>
                    <Header />
                    <div className="hero-section">

                        <div className="container d-flex align-items-center">
                            <div className="col-md-8 col-6">
                                <div className="consultant-name">
                                    <span>
                                        Hello I am Brain
                                    </span>
                                </div>

                                <div className="consultant-domain-name">
                                    <span>
                                        Health Consultant
                                    </span>
                                </div>

                                <div className="consultant-bio ">
                                    <span>
                                        Brain is a Health Consultant, dedicated to helping individuals improve their overall well-being.
                                        With a focus on practical health advice, Brain provides personalized strategies for maintaining
                                        a balanced and healthy lifestyle.
                                    </span>
                                </div>
                                <div className="mt-3 d-flex align-items-center">
                                    <div className="d-flex">
                                        <div className="icons">
                                            <i className="bi bi-facebook"></i>
                                        </div>
                                        <div className="icons">
                                            <i className="bi bi-twitter"></i>
                                        </div>
                                        <div className="icons">
                                            <i className="bi bi-youtube"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-dark">Book Appointment <i
                                            className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-6">
                                <div className=" d-flex justify-content-center">
                                    <img className="consultant-image" src="/images/consultant.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <section>

                        <div className="container d-flex align-items-center justify-content-between plansHeader">
                            <div className="col-md-4">
                                <h1 className="planContentHeader">" What I am awesome at "</h1>
                            </div>
                            <div className="col-md-8">
                                <p className="planContentText">I excel at breaking down complex concepts into clear, easy-to-understand
                                    ideas, making it easier for you to take action. Whether you're looking to tackle immediate tasks,
                                    come up with creative solutions, or develop a long-term strategy, I provide practical, step-by-step
                                    guidance that drives results and helps you achieve your goals efficiently. My approach is focused on
                                    clarity, simplicity, and effective execution.</p>
                            </div>

                        </div>

                        <div className="myplan container my-5">

                            <div className="col-md-4">
                                <div className="cardd " style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">30 Min Plan</h5>
                                        <p className="card-text"> A focused session tailored for quick and impactful discussions. This plan
                                            is ideal for addressing one or two specific issues, getting quick advice, or working on
                                            short-term tasks. Great for those with tight schedules who need actionable insights fast.
                                        </p>
                                        <a href="#" className="btn btn-dark bottom-0 mb-3  ">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cardd" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">45-Min Plan</h5>
                                        <p className="card-text">A flexible and balanced option that offers enough time to delve into a
                                            topic while staying concise. Perfect for exploring multiple related questions, brainstorming
                                            ideas, or progressing on medium-term goals. This plan strikes a great balance between depth
                                            and time efficiency.</p>
                                        <a href="#" className="btn btn-dark  bottom-0 mb-3 ">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cardd" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">1-Hr Plan</h5>
                                        <p className="card-text"> A comprehensive session designed for in-depth analysis, strategic
                                            planning, or tackling complex topics. Ideal for long-term goals, detailed discussions, or
                                            collaborative problem-solving. This plan ensures ample time to explore ideas thoroughly and
                                            create actionable outcomes.</p>
                                        <a href="#" className="btn btn-dark bottom-0 mb-3">Book Appointment</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>


                    <section>
                        <div className="container calendar">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="calendarContentHeader">" Discover Available Hours "</h1>
                                    <p className="calenderContentText">Effortlessly explore available dates and times to schedule your appointment with ease. This interactive calendar provides real-time updates on all open slots, ensuring you have the flexibility to plan your visit at your convenience. Whether you're looking to book a quick meeting or arrange a detailed consultation, this tool helps you find the perfect time hassle-free. Stay organized, save time, and ensure your scheduling needs are met seamlessly.</p>
                                    <button type="button" className="btn btn-dark">Book now</button>
                                </div>
                                <div className="col-md-6">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </>
                : (Router.push('/signin'))}

        </>
    )
}
