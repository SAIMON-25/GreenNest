import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Register = () => {
    const [show,setShow] = useState(false);
  const { createUser, loginWithGoogle,updateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleGoogleLogin = () => {
    loginWithGoogle().then(() => {
      navigate("/");
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;


    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain upper & lower case letters and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        // console.log(result.user);
        navigate("/");
        updateUser(name,photoUrl);

      })
      .catch((error) => {
        toast.error(error.message);
      });

    e.target.reset();
  };

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

          <div className="form-control relative">
            <div
              onClick={() => setShow(!show)}
              className="absolute right-2 top-9 z-10 cursor-pointer "
            >
              {show ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
            </div>
            <label className="label font-semibold">Password</label>
            <input
              type={`${show ? "text" : "password"}`}
        
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

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn text-green-500 btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
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
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
