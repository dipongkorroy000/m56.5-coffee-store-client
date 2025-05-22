import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { createUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // alternative
    const formData = new FormData(e.target);
    // const email = formData.get("email");
    // const password = formData.get("password");

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // firebase auth
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // save profile info in the database
        const userProfileInfo = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata.creationTime,
          lastSignInTime: result.user?.metadata.lastSignInTime,
        };

        fetch("https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfileInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        // navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignUp now!</h1>
        <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />

          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
          />

          <label className="label">Phone</label>
          <input
            type="number"
            name="phone"
            className="input"
            placeholder="Phone Number"
          />

          <label className="label">Photo</label>
          <input
            type="url"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
