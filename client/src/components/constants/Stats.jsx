import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-black text-white">
        <h2 className="text-center text-4xl py- font-bold uppercase">
        Discover Fascinating Facts About Tunisian Auto Trek!
        </h2>
        <p className="text-center text-xl py-12 px-24 font-bold capitalize">
        Uncover intriguing insights into our car rental journey.
        </p>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r border-r-slate-500" data-aos="zoom-in" data-aos-duration="500">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">674+</h6>
            <p className="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase text-yellow-400 lg:text-base">
              happy costomers 
            </p>
          </div>
          <div className="text-center md:border-r border-r-slate-500" data-aos="zoom-in" data-aos-duration="1000">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">140+</h6>
            <p className="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Count of cars
            </p>
          </div>
          <div className="text-center md:border-r border-r-slate-500" data-aos="zoom-in"  data-aos-duration="1500">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48</h6>
            <p className="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Car center solutions
            </p>
          </div>
          <div className="text-center" data-aos="zoom-in"  data-aos-duration="2000">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">30.1k</h6>
            <p className="text-sm font-medium tracking-widest text-yellow-400 py-4 uppercase lg:text-base">
              Total kilometers+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
