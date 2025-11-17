import React, {  useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import PlantCard from "../components/PlantCard";

const PlantsLayout = () => {
  const [plants, setPlants] = useState([]);
  // const data = useLoaderData();

  // setPlants(data);
  useEffect(() => {
    fetch("plants.json")
      .then((result) => result.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <div className="mx-10">
      <div>
        <h1 className="text-3xl text-center my-10 font-bold text-primary">
          All Plants
        </h1>
      </div>
      <div className="flex justify-between my-10 ">
        <h1 className="text-md sm:text-2xl font-semibold">
          Total Plants ({plants.length})
        </h1>
        <div className="relative">
          <span className="absolute right-2 top-1 text-2xl">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="border border-gray-200 sm:w-64 h-8 bg-green-100 rounded-lg px-2"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-5">
        {plants.map((plant,index) => (
          <PlantCard key={index} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default PlantsLayout;
