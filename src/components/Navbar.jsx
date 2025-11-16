import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from '../assets/user.png'
import AuthContext from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";



const Navbar = () => {
    const {user,logoutUser} = useContext(AuthContext);
  
  const handleLogout = ()=>{
    logoutUser()
    .then(()=>{
      toast.success('Successfully Logout!!!')
    })
  }
    

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-base-content"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-base-content"
          }
        >
          Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-base-content"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>


        <Link to="/" className="text-2xl font-bold text-primary">
          GreenNest
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-200 ring-offset-4">
               <img src={user.photoURL || userIcon } alt="user avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold text-primary">{user.displayName || "User"}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="text-error hover:text-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-outline btn-primary px-4">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary text-white px-4">
              Register
            </Link>
          </div>
        )}
      </div>
       <Toaster />
    </div>
  );
};

export default Navbar;
