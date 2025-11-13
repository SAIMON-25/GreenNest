import React from "react";
import { Circles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Circles
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
