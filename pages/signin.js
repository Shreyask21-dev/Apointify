import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const [LoginSignUp, setLoginSignUp] = useState("signup")

  const [verifyOtp, setVerifyOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    fullname: "",
    email: "",
    role: "",
  });
  var AUTH_TOKEN_ONE = '36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12'

  const API_BASE_URL = "https://appointify.coinage.host/api";
  const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN; // Use environment variable

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    setError(""); // Clear errors on change
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError("");
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `${API_BASE_URL}/users?filters[username][$eq]=${newUser.username}`,
        {
          headers: { Authorization: `Bearer ${AUTH_TOKEN_ONE}` },
        }
      );

      if (response.data.length === 0) {
        const otpResponse = await axios.post(
          `${API_BASE_URL}/send-otp`,
          { phoneNumber: `+91${newUser.username}` },
          { headers: { Authorization: `Bearer ${AUTH_TOKEN_ONE}` } }
        );

        if (otpResponse.data.success) {
          setVerifyOtp(true);
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        setError("Mobile number already exists.");
      }
    } catch (err) {
      setError("Error verifying the number. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const otpVerifyResponse = await axios.post(
        `${API_BASE_URL}/verify-otp`,
        { phoneNumber: `+91${newUser.username}`, otp },
        { headers: { Authorization: `Bearer ${AUTH_TOKEN_ONE}` } }
      );

      if (otpVerifyResponse.data.success) {
        await registerUser();
      } else {
        setError("Invalid OTP. Please check and try again.");
      }
    } catch (err) {
      setError("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async () => {
    try {
      const registerResponse = await axios.post(
        `${API_BASE_URL}/auth/local/register?populate=*`,
        {
          username: newUser.username,
          email: newUser.email,
          password: "Coinage@1790",
          // role: newUser.role,
        },
        { headers: { Authorization: `Bearer ${AUTH_TOKEN_ONE}` } }
      );

      const data = registerResponse.data;

      if (data.user) {
        localStorage.setItem("UserData", JSON.stringify(data));
        router.push(
          newUser.role === "consultant"
            ? "/Dashboard/Consultant-bord"
            : "/Dashboard/Customer-bord"
        );
      } else {
        setError("User already exists or an error occurred.");
      }
    } catch (err) {
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <>
      <main id="content" role="main" className="flex-grow-1">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-5 col-xl-4 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-dark" style={{backgroundImage: `url('/assets/svg/components/wave-pattern-light.svg')`, backgroundColor:"#21325b !important"}}>
              <div className="flex-grow-1 p-5">

                <figure className="text-center">

                  <div className="mb-4">
                    <span style={{color:"#fff"}}>Apointify</span>
                  </div>

                  <blockquote className="blockquote blockquote-light">“ Easily create, join, and manage meetings—whether you're hosting or participating. Stay connected and collaborate seamlessly”</blockquote>

                  <figcaption className="blockquote-footer blockquote-light">
                    <div className="mb-3">
                      <img className="avatar avatar-circle" src="/assets/img/160x160/img9.jpg" alt="Image Description" />
                    </div>

                    <span style={{fontSize:"1.5rem", color:"#fff"}}>Lida Reidy</span>
                    <span className="blockquote-footer-source">Project Manager | Consultant</span>
                  </figcaption>
                </figure>


                <div className="position-absolute start-0 end-0 bottom-0 text-center p-5">
                  <div className="row justify-content-center">
                    <div className="col text-center py-3">
                      <span style={{color:"#fff"}}>Connect</span>
                    </div>


                    <div className="col text-center py-3">
                      <span style={{color:"#fff"}}>-</span>
                    </div>


                    <div className="col text-center py-3">
                      <span style={{color:"#fff"}}>Collaborate</span>
                    </div>


                    <div className="col text-center py-3">
                      <span style={{color:"#fff"}}>-</span>
                    </div>


                    <div className="col text-center py-3">
                      <span style={{color:"#fff"}}>Communicate</span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Form */}
            {LoginSignUp==='signup'?
            
            <div className="col-lg-7 col-xl-8 d-flex justify-content-center align-items-center min-vh-lg-100 flex-column">

              <div className="flex-grow-0 mx-auto" style={{ maxWidth: "28rem" }}>
                <div className="text-center mb-5">
                  <h1 className="h2">Register To Appointify</h1>
                  <p>Sign Up to check your meetings.</p>
                </div>
                <form onSubmit={!verifyOtp ? handleVerify : handleRegister}>
                  <div className="mb-4">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="username"
                      value={newUser.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      value={newUser.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={newUser.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      name="role"
                      value={newUser.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Please select your role
                      </option>
                      <option value="consultant">Consultant</option>
                      <option value="customer">Customer</option>
                    </select>
                  </div>
                  {verifyOtp && (
                    <div className="mb-4">
                      <label className="form-label">Enter OTP</label>
                      <input
                        type="number"
                        className="form-control"
                        value={otp}
                        onChange={handleOtpChange}
                        required
                      />
                    </div>
                  )}
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : !verifyOtp
                        ? "Send OTP"
                        : "Register"}
                  </button>
                </form>
                
              </div>
              <div className="mt-3">
                  <p>Already have an account yet? <span class="link text-primary" style={{cursor:"pointer"}} onClick={() => { setLoginSignUp("login")}} >Login here</span></p>
                </div>


            </div>
            :
            <div className="col-lg-7 col-xl-8 d-flex justify-content-center align-items-center min-vh-lg-100 flex-column">

              <div className="flex-grow-0 mx-auto" style={{ maxWidth: "28rem" }}>
                <div className="text-center mb-5">
                  <h1 className="h2">Login To Appointify</h1>
                  <p>Login to check your meetings.</p>
                </div>
                <form onSubmit={!verifyOtp ? handleVerify : handleRegister}>
                  <div className="mb-4">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="username"
                      value={newUser.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  
                  {verifyOtp && (
                    <div className="mb-4">
                      <label className="form-label">Enter OTP</label>
                      <input
                        type="number"
                        className="form-control"
                        value={otp}
                        onChange={handleOtpChange}
                        required
                      />
                    </div>
                  )}
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : !verifyOtp
                        ? "Send OTP"
                        : "Login"}
                  </button>
                </form>
                
              </div>
              <div className="mt-3">
                  <p>Don't have an account yet ? <span class="link text-primary" style={{cursor:"pointer"}} onClick={() => { setLoginSignUp("signup")}} >Sign up here</span></p>
              </div>


            </div>
            }

          </div>
        </div>
      </main>


    </>
  );
}
