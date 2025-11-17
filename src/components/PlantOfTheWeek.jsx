import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((plants) => {
        if (!Array.isArray(plants)) return;

        const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
        const index = weekNumber % plants.length;
        setFeatured(plants[index]);
      })
      .catch((error) => console.log(error.message));
      
      
  }, []);


  if (!featured) return null;

  return (
    <section className="py-12 px-4 ">
      <h1 className="text-4xl font-bold  text-green-500 mb-6 flex justify-center gap-2">
        Plant of the Week
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-linear-to-br from-green-50 via-emerald-100/60 to-green-200 shadow-xl p-6 md:flex gap-6 items-center border border-green-300/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
          
          <img
            src={featured.image}
            alt={featured.name}
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md border border-green-400/30"
          />

          <div className="space-y-3 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-green-800">
              {featured.plantName}{" "}
              <span className="badge badge-success ml-2">{featured.rating}</span>
            </h3>

            <p className="italic text-sm text-gray-700">“{featured.category}”</p>

            <div className="flex items-center gap-2 text-yellow-600 font-semibold">
              <FaStar /> {featured.rating}
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">{featured.fact}</p>

            <Link to={`/plants/${featured.plantId}`}  className="btn btn-primary btn-sm rounded-full mt-2">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
