import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Registration = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIN = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInUser(email, password).then((result) => {
      console.log(result.user);
      const signInInfo = {
        email,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };
      fetch("https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signInInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log("after update patch", data));
    });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In Now!</h1>
        <form onSubmit={handleSignIN} className="fieldset">
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
            SignIp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
