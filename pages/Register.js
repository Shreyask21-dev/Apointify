import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Register() {
    const router = useRouter();

    const [step, setStep] = useState(1); // Track the current step
    const [Phone, setPhone] = useState("");
    const [Otp, setOtp] = useState("");
    const [UserDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const checkUser = async () => {
        try {
            const response = await axios.get(
                `https://appointify.coinage.host/api/users?filters[username][$eq]=${Phone}`,
                {
                    headers: {
                        Authorization: "Bearer 36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12",
                    },
                }
            );

            if (response.data.length > 0) {
                setErrorMessage("Number already exists.");
            } else {
                setErrorMessage("");
                sendOtp(); // Proceed to send OTP if user doesn't exist
            }
        } catch (error) {
            console.error("Error checking user:", error);
            setErrorMessage("Failed to check user. Try again.");
        }
    };

    const sendOtp = async () => {
        console.log(Phone)

        const response = await axios.post('https://appointify.coinage.host/api/send-otp', { "phoneNumber": `+91${Phone}` }, { headers: { Authorization: "Bearer 36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12",
            },
        })
        if(response.data.message == "OTP sent successfully" ){
            setStep(2)
        }
        console.log(response.data)
    };

    const verifyOtp = async () => {
        const response = await axios.post("https://appointify.coinage.host/api/verify-otp", { "phoneNumber": `+91${Phone}`,"otp": Otp,},{ headers: { Authorization: "Bearer 36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12",},} );

        console.log(response.data)

        setStep(3); // Proceed to final registration step
        
    };

    const registerUser = async () => {
        const response = await axios.post("https://appointify.coinage.host/auth/local/register", {       "username": Phone, "email": UserDetails.email, "password": UserDetails.password,}, { headers: { Authorization: "Bearer 36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12",}});

        console.log(response.data)

        alert("Registration successful!");
        router.push("/Signin");
        
    };

    return (
        <>

            <main id="content" role="main" className="flex-grow-1">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 col-xl-4 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-dark" style={{ backgroundImage: `url('/assets/svg/components/wave-pattern-light.svg')`, backgroundColor: "#21325b !important" }}>
                            <div className="flex-grow-1 p-5">

                                <figure className="text-center">

                                    <div className="mb-4">
                                        <span style={{ color: "#fff" }}>Apointify</span>
                                    </div>

                                    <blockquote className="blockquote blockquote-light">“ Easily create, join, and manage meetings—whether you're hosting or participating. Stay connected and collaborate seamlessly”</blockquote>

                                    <figcaption className="blockquote-footer blockquote-light">
                                        <div className="mb-3">
                                            <img className="avatar avatar-circle" src="/assets/img/160x160/img9.jpg" alt="Image Description" />
                                        </div>

                                        <span style={{ fontSize: "1.5rem", color: "#fff" }}>Lida Reidy</span>
                                        <span className="blockquote-footer-source">Project Manager | Consultant</span>
                                    </figcaption>
                                </figure>

                                <div className="position-absolute start-0 end-0 bottom-0 text-center p-5">
                                    <div className="row justify-content-center">
                                        <div className="col text-center py-3">
                                            <span style={{ color: "#fff" }}>Connect</span>
                                        </div>


                                        <div className="col text-center py-3">
                                            <span style={{ color: "#fff" }}>-</span>
                                        </div>


                                        <div className="col text-center py-3">
                                            <span style={{ color: "#fff" }}>Collaborate</span>
                                        </div>


                                        <div className="col text-center py-3">
                                            <span style={{ color: "#fff" }}>-</span>
                                        </div>


                                        <div className="col text-center py-3">
                                            <span style={{ color: "#fff" }}>Communicate</span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Form */}

                        <div className="col-lg-7 col-xl-8 d-flex justify-content-center align-items-center min-vh-lg-100 flex-column">

                            <div className="flex-grow-0 mx-auto" style={{ maxWidth: "28rem" }}>
                                <div className="text-center mb-5">
                                    <h1 className="h2">Register To Appointify</h1>
                                    <p>To check your meetings.</p>
                                </div>


                                {step === 1 && (
                                    <>
                                        <label>Enter Mobile Number:</label>
                                        <input
                                            type="number"
                                            value={Phone}
                                            onChange={handlePhoneChange}
                                            className="form-control"
                                        />
                                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                        <button onClick={checkUser} className="btn btn-primary mt-2">
                                            Check
                                        </button>
                                    </>
                                )}
                                {step === 2 && (
                                    <>
                                        <label>Enter OTP:</label>
                                        <input
                                            type="text"
                                            value={Otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="form-control"
                                        />
                                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                        <button onClick={verifyOtp} className="btn btn-primary mt-2">
                                            Verify OTP
                                        </button>
                                    </>
                                )}
                                {step === 3 && (
                                    <>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={UserDetails.email}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={UserDetails.password}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                        <button onClick={registerUser} className="btn btn-primary mt-2">
                                            Register
                                        </button>
                                    </>
                                )}

                            </div>
                            <div className="mt-3">
                                <p>Already have an account ? <span class="link text-primary" style={{ cursor: "pointer" }} onClick={() => { router.push('/signin') }} >Sign in here</span></p>
                            </div>

                        </div>

                        {/* <div className="container">
                            {step === 1 && (
                                <>
                                    <label>Enter Mobile Number:</label>
                                    <input
                                        type="number"
                                        value={Phone}
                                        onChange={handlePhoneChange}
                                        className="form-control"
                                    />
                                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                    <button onClick={checkUser} className="btn btn-primary mt-2">
                                        Check
                                    </button>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <label>Enter OTP:</label>
                                    <input
                                        type="text"
                                        value={Otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="form-control"
                                    />
                                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                    <button onClick={verifyOtp} className="btn btn-primary mt-2">
                                        Verify OTP
                                    </button>
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={UserDetails.email}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={UserDetails.password}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                    <button onClick={registerUser} className="btn btn-primary mt-2">
                                        Register
                                    </button>
                                </>
                            )}
                        </div> */}


                    </div>
                </div>
            </main>

        </>
    )
}
