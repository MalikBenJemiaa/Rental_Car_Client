import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DisplayModelsDetails from './DisplayModelsDetails';
import OneCar from "./OneCar"
import "../carCardsStyling.css"
var myCars;
// {"id":1,"marque":"bmw","puissence":12,"option":"full option","released_date":"2009-02-13T23:31:30.000+00:00","description":"a great car"},"photo2":null,"photo1":null,"photo3":null,"photo4":null}
const CarModels =()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8090/getAllCars')
          .then((res) => {
            setData(res.data);
            // myCars=res.data;
          })
          .catch(err => console.log(err));
      },[])
    return(
      <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="font-palanquin py-8 text-4xl uppercase font-bold text-gray-600 lg:max-w-lg">
          <span id="webSiteTextColor" className='text-normal '>&#9679;</span> Discover Our Car Fleet
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        </div>
       
      </div>
        <div className="theFilter">
  <div className="theTitle PP">
    <div className="Tit">Car Catalogue</div>
    <div className="DesTit">Explore our cars you might like!</div>
  </div>
  <div className="theChamp PP">
    <select id="cars">
      <option value="volvo">Price</option>
      <option value="saab">Under 100dt</option>
      <option value="opel">Under 150dt</option>
      <option value="audi">Under 200dt</option>
    </select>
    <select id="cars">
      <option value="volvo">
        Manufacture
        <div id="theLL">(3)</div>
      </option>
      <option value="saab">Volkswagen</option>
      <option value="opel">BMW</option>
      <option value="audi">Mercedes</option>
    </select>
    <select id="cars">
      <option value="volvo">
        Type
        <div id="theLL">(5)</div>
      </option>
      <option value="saab">Sedan</option>
      <option value="opel">Pick up</option>
      <option value="audi">SUV</option>
      <option value="audi">Off Road</option>
      <option value="audi">Hatchback</option>
    </select>
  </div>
</div>
<div className="leHole">

        {data.map((car, i) => (
         /*    <DisplayModelsDetails
              car={car}
              key={i}
            /> */
            <>
            
              <OneCar data={car}/>
              {/* {console.log(car)} */}
            </>
        
            
          ))}
</div>

{/* end of the filltre */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --> */}
      


        
    </>
    )
}
export default CarModels