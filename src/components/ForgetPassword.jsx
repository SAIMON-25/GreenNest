import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { changePassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    changePassword(email)
      .then(() => {
        toast.success("Password reset link sent to your email.");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">
          Reset Password
        </h2>
        <p className="text-center mb-6 text-gray-600">
          Enter your email address and we will send you a password reset link.
        </p>

        <form className="space-y-4" onSubmit={handleReset}>
          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
