import React, { useState,useEffect } from "react";
import { Link } from "react-router";
import Slider from "./Slider";
import TopPlants from "./TopPlants";
import Tips from "./Tips";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("plants.json")
      .then((result) => result.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <div className="">
      <div className="relative my-10">
        <Slider plants={plants}></Slider>
      <div className=" text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10">
        <h1 className="text-5xl md:text-5xl font-bold text-primary leading-tight">
          Bring Nature Home 🌱
        </h1>
        <p className="text-lg text-base-100 mt-3">
          Discover the joy of nurturing life — explore our curated indoor plants
          and expert care tips.
        </p>
        <div className="mt-6 flex gap-4 justify-center ">
          <Link to="/plants" className="btn btn-primary px-6">
            Explore Plants
          </Link>
          <Link to="/care" className="btn btn-outline btn-primary px-6">
            Learn Care Tips
          </Link>
        </div>
      </div>
      </div>
      <TopPlants plants={plants}></TopPlants>
      <Tips></Tips>
    </div>
  );
};

export default Home;
