import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCarContext } from '../pages/CarContext';
import { useParams } from 'react-router-dom';


const MoreDetails = (props) => {

    const { id } = useParams();
    const { selectedCarId } = useCarContext();
    window.scrollTo(0, 0);
  const [carDetails, setCarDetails] = useState({});
  useEffect(() => {
    console.log("Id selected is ",id)
      axios.get(`http://localhost:8090/getCarsById/${id}`)
      .then((res) => {
        setCarDetails(res.data);
        console.log("fetched succesfully: ",res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  
    return (
    <>
       
       <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4" id="start">
              <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
  
                  <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    
                      <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Car Details / {carDetails.tech_fiche?.marque}</p>
                      <h2 className="font-semibold lg:text-6xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{carDetails.model}</h2>
  
                      <div className=" flex flex-row justify-between">
                          <div className=" flex flex-row space-x-3">
                          <div className="rate">
      <input type="radio" id="star5" name="rate" value="5" />
      <label htmlFor="star5" title="5">5</label>
      <input type="radio" id="star4" name="rate" value="4" />
      <label htmlFor="star4" title="4">4</label>
      <input type="radio" id="star3" name="rate" value="3" />
      <label htmlFor="star3" title="3">3</label>
      <input type="radio" id="star2" name="rate" value="2" />
      <label htmlFor="star2" title="2/*  */">2</label>
      <input type="radio" id="star1" name="rate" value="1" />
      <label htmlFor="star1" title="1">1</label>
    </div>
                          </div>
                      </div>
                          <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 Reviews</p>
  
                      <p className="font-light capitalize text-gray-600 leading-6 mt-3">{carDetails.tech_fiche?.description}</p>
                      <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-3">{carDetails.price_per_day} TND
                      <span className='mx-3 text-sm text-slate-600 uppercase'>Per Day</span>
                      </p>
  
                      <div className="lg:mt-4 mt-10">
                          <hr className=" bg-gray-200 w-full my-2" />
                          <div className=" block flex-row justify-between items-center mt-4">
                              <p className="font-medium text-base leading-4 capitalize text-gray-600"><span className='text-gray-500'>Car Category :</span> {carDetails.tech_fiche?.marque}</p><br/>
                              <p className="font-medium text-base leading-4 capitalize text-gray-600"><span className='text-gray-500'>Car Location :</span> {/* {carDetails.carLocation} */}Agency location</p><br/>
                              <p className="font-light capitalize text-gray-600 tracking-wide leading-5"><span className='text-gray-500'>Car Options :</span> {carDetails.tech_fiche?.option}</p><br/>
                              <p className="font-medium text-base leading-4 capitalize text-gray-600"><span className='text-gray-500'>Car Engine Type :</span> {carDetails.tech_fiche?.energie}</p><br/>
                              <p className="font-medium text-base leading-4 capitalize text-gray-600"><span className='text-gray-500'>Car Gear :</span> {carDetails.tech_fiche?.boite}</p><br/>
                          </div>
                          <hr className=" bg-gray-200 w-full mt-4" />
                      </div>
  
                      <a
                    className="w-full relative tracking-wide inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
                  >
                    <span  className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white uppercase text-xl">
                      Rent a car
                    </span>
                  </a>
                  </div>
  
  
  
                  <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                      <div className=" w-full lg:w-8/12 border flex justify-center items-center">
                          <img src={carDetails.photo1} alt={carDetails.model}/>
                      </div>
                      <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                          <div className="flex justify-center items-center border">
                              <img  src={carDetails.photo2} alt={carDetails.model}/>
                          </div>
                          <div className="flex justify-center border items-center">
                              <img  src={carDetails.photo3} alt={carDetails.model}/>
                          </div>
                          <div className="flex justify-center border items-center">
                              <img  src={carDetails.photo4} alt={carDetails.model}/>
                          </div>
                      </div>
                      </div>
                  </div>
                
              </div>
            
          
          </>
        )
      
      
   
};

export default MoreDetails;
