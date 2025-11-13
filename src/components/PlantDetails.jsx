import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast"; // for success messages

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
 
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPlant = data.find((p) => p.plantId === parseInt(id));
        setPlant(selectedPlant);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill out all fields.");
      return;
    }
    toast.success("Consultation booked successfully! 🌿");
    setForm({ name: "", email: "" });
  };

  if (!plant) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading plant details...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
     
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>


        <div>
          <h1 className="text-3xl font-bold text-primary mb-3">
            {plant.plantName}
          </h1>
          <p className="text-gray-600 mb-4">{plant.description}</p>

          <div className="flex flex-col gap-2 mb-4">
            <p>
              <span className="font-semibold text-gray-700">Price:</span> $
              {plant.price}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Rating:</span>{" "}
              ⭐ {plant.rating}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Available Stock:</span>{" "}
              {plant.availableStock} pcs
            </p>
            <p>
              <span className="font-semibold text-gray-700">Care Level:</span>{" "}
              {plant.careLevel}
            </p>
          </div>

          <p className="text-sm text-gray-500 italic">
            Provided by: {plant.providerName}
          </p>
        </div>
      </div>

   
       <div className="divider divider-success my-10"></div>

      {/* Book Consultation Form */}
      <div className="max-w-lg mx-auto bg-base-100 p-8 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">
          Book a Consultation 🌿
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
