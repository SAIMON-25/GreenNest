import React, { useContext } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (e)=>{
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })

    e.target.reset();
  }

  return (
    <div className="min-h-screen  bg-base-200 flex justify-center items-center px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
     
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Your GreenNest Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Full Name</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Paste your profile photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              required
            />
          </div>


          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>

   
          <div className="divider">OR</div>

    
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
