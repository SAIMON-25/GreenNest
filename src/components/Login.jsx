import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Eye } from "lucide";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const [show,setShow] = useState(false);
  const {loginUser, loginWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

 
  const handleGoogleLogin =()=>{
    loginWithGoogle()
    .then(()=>{
      navigate('/');
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Successfully Login");
        {
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });

    e.target.reset();
  };

  return (
    <div
      className={` min-h-screen bg-base-200 flex justify-center items-center px-4`}
    >
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to GreenNest
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control relative">

            <div onClick={()=>setShow(!show)} className="absolute right-2 top-9 z-10 cursor-pointer ">
            {
              show?<BsEyeSlash></BsEyeSlash>:<BsEye></BsEye>
            }
            </div>

            <label className="label font-semibold">Password</label>
            <input
              type={`${show ? 'text' : 'password'}`}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <label className="label text-sm">
              <Link
                to="/forgetpassword"
                className="text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
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
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
