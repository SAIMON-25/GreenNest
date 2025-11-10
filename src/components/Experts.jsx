import React from "react";

const Experts = () => {
  return (
    <div className="text-center my-12">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Meet Our Green Experts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="card bg-base-100 shadow-soft p-4 hover:shadow-hover"
          >
            <img
              src={expert.photo}
              alt={expert.name}
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="font-semibold">{expert.name}</h3>
            <p className="text-sm text-gray-500">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
