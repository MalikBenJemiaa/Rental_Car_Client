import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCarContext } from '../pages/CarContext';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const { carsel } = useCarContext();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cars/search/${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  }, [query]);

  return (

<>
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <h2 className="font-palanquin py-8 text-4xl uppercase font-bold text-gray-600 lg:max-w-lg">
         <span className='text-normal text-yellow-400'>&#9679;</span> Discover Our Car Fleet
       </h2>
       {results.length === 0 ? (
         <>
         <section className="relative z-10 border py-[120px]">
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                Unfortunately, No Results Matched
                </h4>

                <a
                  href="/"
                  className="inline-block px-8 py-3 text-base font-semibold text-center text-black transition  bg-yellow-400 hover:bg-yellow-500 hover:text-primary"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="flex w-1/3 h-full">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
      </section>
         </>
        ) : (
       <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
       {results.map(car => (
       <div 
       key={car.id}
       className="overflow-hidden transition-shadow duration-300 bg-white border shadow-sm" data-aos="zoom-in" data-aos-offset="300">
          <img src={car.carIMG}
            className="object-contain w-full h-64"
            alt={car.carName}
          />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                {car.carFuelType}
              </a>
              <br/>
              <span className="text-gray-600">{car.carLocation}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl uppercase font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {car.carName}
            </a>
            <p className="mb-2 text-gray-700">
               {car.carPrice} TND
               <span className='mx-3 text-sm text-slate-600 uppercase'>Per Day</span>
            </p>
            <Link to={`/car/${car.id}` } onClick={()=>carsel(car.id)}  className="relative tracking-wide inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-normal text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">More Details</span>
</Link>
          </div>
        </div>

))}
       </div>
        )}
     </div>
</>
   
  );
};

export default SearchResults; 