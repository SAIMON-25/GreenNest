import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="min-h-screen  bg-base-200 flex justify-center items-center px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
     
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Your GreenNest Account
        </h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="url"
              placeholder="Paste your profile photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Password</label>
            <input
              type="password"
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
