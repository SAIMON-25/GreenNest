import React from "react";

const Tips = () => {
  return (
   <div>

    <h1 className='text-center text-4xl font-bold my-10 text-green-500'>Tips & Care</h1>

     <div className="grid md:grid-cols-3 gap-6 text-center mt-10 " >
      <div className="card p-10 bg-green-50 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-linear-to-r hover:from-green-400 hover:to-emerald-500 ">
        <h3 className="text-2xl font-semibold text-primary  mb-2">💧 Watering</h3>
        <p className="text-md text-gray-600">
          Keep soil slightly moist, not soggy. Water when the top inch dries
          out.
        </p>
      </div>
      <div className="card p-10 bg-green-50  shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-linear-to-r hover:from-green-400 hover:to-emerald-500 ">
        <h3 className="text-xl font-semibold text-primary mb-2">🌤️ Sunlight</h3>
        <p className="text-md text-gray-600">
          Place near bright, indirect sunlight to avoid leaf burn.
        </p>
      </div>
      <div className="card p-10 bg-green-50 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-linear-to-r hover:from-green-400 hover:to-emerald-500 ">
        <h3 className="text-xl font-semibold text-primary mb-2">
          🌿 Fertilizing
        </h3>
        <p className="text-md text-gray-600">
          Feed monthly during growing season with balanced fertilizer.
        </p>
      </div>
    </div>
   </div>
  );
};

export default Tips;
