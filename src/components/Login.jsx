import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to GreenNest
        </h2>

        {/* Login Form */}
        <form className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <label className="label text-sm">
              <Link
                to="/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Sign-in Button */}
          <button
            type="button"
            className="btn text-green-500 btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
