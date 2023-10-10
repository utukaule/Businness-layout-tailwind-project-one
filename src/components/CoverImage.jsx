import React from "react";
import Typed from "react-typed";
import "./CoverImage.css";

const CoverImage = () => {
  return (
    <div className="text-black " id="coverImage">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH STOCK MARKET
        </p>
        <h1 className="md:text-7xl text-black sm:text-6xl text-4xl font-bold md:py-0">
          GROW WITH DATA.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl text-black sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible, financing for
          </p>
          <Typed className="md:text-5xl text-black sm:text-4xl text-xl font-bold pl-2" strings={['BTB', 'BTC','SASS']} typeSpeed={120} backSpeed={140} loop  />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#00df9a]">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-5 mx-auto py-4 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default CoverImage;
