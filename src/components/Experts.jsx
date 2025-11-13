import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Experts = () => {
  const [experts, setExpert] = useState([]);

  useEffect(() => {
    fetch("experts.json")
      .then((res) => res.json())
      .then((json) => setExpert(json));
  }, []);
  return (
    <div className="text-center my-12 mx-10">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Meet Our Green Experts
      </h2>
      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={true}
        gradientColor="#94EE91"
        className=" rounded-xl"
      >
        <div className="flex">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="card shadow-md bg-green-50 p-4 w-64 sm:w-96 mr-10 "
            >
              <img
                src={expert.photo}
                alt={expert.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold">{expert.name}</h3>
              <p className="text-md font-semibold mb-2 text-gray-600">
                {expert.specialization}
              </p>
              <p className=" text-gray-500">{expert.bio}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Experts;
