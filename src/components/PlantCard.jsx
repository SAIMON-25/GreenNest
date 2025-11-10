import React from "react";

const PlantCard = ({ plant }) => {
  const { image,plantName, rating,price ,category} = plant;
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img
        className="w-96 h-80"
          src={image}
          alt="Plant"
        />
      </figure>
      <div className="card-body bg-green-50 rounded-b-2xl">
        <h2 className="card-title">{plantName}</h2>
       <div>
        <h1 className="text-lg font-semibold">Price : {price} $</h1>
       </div>
       <div className="border border-green-300"></div>
       <div className="flex justify-between">
            <h1 className=" px-2 py-1 rounded-2xl bg-green-200 ">{category}</h1>
            <h1 className="bg-accent text-white px-2 py-1 rounded-2xl">Rating: {rating}</h1>
       </div>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary text-white">Views Details</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
