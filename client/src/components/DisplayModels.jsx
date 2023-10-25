import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import DisplayModelsDetails from './DisplayModelsDetails';

const DisplayModels = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars/')
      .then((res) => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="font-palanquin py-8 text-4xl uppercase font-bold text-gray-600 lg:max-w-lg">
          <span id="webSiteTextColor" className='text-normal '>&#9679;</span> Discover Our Car Fleet
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data.map((car, i) => (
            <DisplayModelsDetails
              car={car}
              key={i}
            />
          ))}
        </div>
       
      </div>
    </>
  );
}

export default DisplayModels;
