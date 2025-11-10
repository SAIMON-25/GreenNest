import React from "react";
import errorImage from "../assets/404.png";
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="bg-neutral grid place-content-center">
      <div>
        <img className="rounded-full" src={errorImage} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-5">Page Not Found</h1>
        <Link to={'/'} className="btn btn-primary">
          {" "}
          <span>
            <VscArrowLeft />
          </span>{" "}
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
