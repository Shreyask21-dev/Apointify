import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signin() {

  const router = useRouter();

  const [Phone, setPhone] = useState({ phone: "" })

  const changed = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setPhone(prevDetails => ({
      ...prevDetails,
      [name]: value // Update the specific field based on the input's name
    }));
  }

  const userCheck = async (phoneNumber) => {

    console.log(phoneNumber)

    const response = await axios.get(`https://appointify.coinage.host/api/users?filters[username][$eq]=${phoneNumber}`, {
      headers: {
        'Authorization': 'Bearer 36434f02941c5d51df3d90389a3422d17710c788ecbf15527f12aa401bc63c086b30702eb1aea2ccd1cdcdfa3f43ae2ec636bb14e3b23338f21b88255dd1fd7afa7430d1482b0a25db4a551748138db1ea88a888761e9eb064311d4000896fbc4fc898c0de0ead8aa04d63dd174aa88f306fae187c252679afd49d9cb482af12'
      }
    })

    // console.log(response.data)

    if (response.data.length > 0) {
      // User already registered

      const userData = { 
        id : response.data[0].id,
        username : response.data[0].username
      } 

      localStorage.setItem('userData', userData.username)
    
      router.push('/')

      // console.log(response.data)
      
    } else {
      // User not registered
      if (confirm("User is not registered. Would you like to register?")) {
        router.push('/Register'); // Redirect to Register.js
      }
    }

  }


  const submited = () => {

    userCheck(Phone.phone)

  }



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
                  <h1 className="h2">Login To Appointify</h1>
                  <p>Login to check your meetings.</p>
                </div>

                <div className="mb-4">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    value={Phone.phone}
                    onChange={changed}
                    required
                  />
                </div>

                <button class="btn btn-primary" onClick={submited} >Submit</button>



              </div>
              <div className="mt-3">
                <p>Don't have an account yet ? <span class="link text-primary" style={{ cursor: "pointer" }} onClick={() => { router.push('/Register') }} >Sign up here</span></p>
              </div>


            </div>


          </div>
        </div>
      </main>

    </>
  );
}
