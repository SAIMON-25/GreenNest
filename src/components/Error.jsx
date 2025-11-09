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
