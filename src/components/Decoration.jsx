import React from "react";

const Decoration = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-primary mb-6 ">
        Eco Decor Ideas
      </h2>
      <div className=" grid grid-rows-2 grid-cols-3 gap-5 mx-10 *:rounded-2xl  ">
        <div className="row-span-2">
          <img
          className=" w-full h-full object-cover hover:brightness-90 rounded-2xl"
            src="https://th.bing.com/th/id/OIP.evKd-GnmbHrMpXpYUh6YLQHaEK?w=327&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="image"
          />
        </div>
        <div>
          <img
          className="w-full h-full object-cover hover:brightness-90 rounded-2xl"
            src="https://th.bing.com/th/id/OIP.IunayXOmVdSraEGHDsXGPwHaD8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="image"
          />
        </div>
        <div className="row-span-2">
          <img
          className="w-full h-full object-cover hover:brightness-90 rounded-2xl"
            src="https://tse4.mm.bing.net/th/id/OIP.uIXVK9pDLG2sDtqRbGZF4wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="image"
          />
        </div>
        
        <div >
          <img
          className="w-full h-full object-cover hover:brightness-90 rounded-2xl"
            src="https://tse3.mm.bing.net/th/id/OIP.LRDwtnHOMfB2hzNHRsXwCQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="image"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Decoration;
