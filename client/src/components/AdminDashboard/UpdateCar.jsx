import React, { useEffect, useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";
import { Link } from 'react-router-dom';

const UpdateCar = (props) => {
  const cloudName = 'ddlpxakhl'; 
  const [selectedImage, setSelectedImage] = useState([]);
  const [isAdding, setIsAdding] = useState(false); 
  const [formData, setFormData] = useState(props.car);

  useEffect(()=>{
    
    setFormData(props.car);
  console.log(props,"is the data ready");
  },[]);
  
  


  const handleImageChange = (event, index) => {
    const { files } = event.target;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64String = event.target.result;

        /* setFormData((prevData) => {
          const updatedphotos = [...prevData.photos];
          updatedphotos[index] = base64String;
          console.log("result",{ ...prevData, photos: updatedphotos })
          return { ...prevData, photos: updatedphotos };
        }); */
        if(index==0){
          setFormData({ ...formData, photo1: base64String })
        }
        if(index==1){
          setFormData({ ...formData, photo2: base64String })
        }
        if(index==2){
          setFormData({ ...formData, photo3: base64String })
        }
        if(index==3){
          setFormData({ ...formData, photo4: base64String })
        }

      };
      reader.readAsDataURL(file);
      console.log("the data to send in request is",formData)
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      console.log(formData,"is the object to send")
      const response =await axios.put(`http://localhost:8090/Cars/updateCars/${formData.mat}`, formData); 
       console.log("response: ",response) ;
       window.location.reload(); 
       
        } 
      catch (error) {
      console.error(error); 
     } 
    console.log(formData,"this is the data that will be sent ")
  };
  return (
    <div className="max-w-2xl mx-auto py-6">
 
	<form onSubmit={handleSubmit}>
			<label className="textMainColor">Car Matricule</label>

		<div className="relative z-0 mb-6 w-full group">
			<input
              placeholder={props.car.mat}
              disabled={true}
              style={{ backgroundColor: '#f2f2f2', color: '#888', cursor: 'not-allowed' }}
            
             type="text"
             value={formData.mat}
             onChange={(e) =>
               setFormData({ ...formData, mat: e.target.value })
             }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>

		<div className="relative z-0 mb-6 w-full group">
			<label className="textMainColor">Car Model</label>

			<input  type="text"
              placeholder={props.car.model}
             value={formData.model}
             onChange={(e) =>
               setFormData({ ...formData, model: e.target.value })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>

    <div className="relative z-0 mb-6 w-full group">
			<label className="textMainColor">Car Brand</label>

			<input  type="text"
              placeholder={props.car.tech_fiche.marque}
             value={formData.tech_fiche.marque}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                marque: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>


		<div className="relative z-0 mb-6 w-full group">
			<label className="textMainColor">Price per day</label>

			<input 
            type="text"
            placeholder={props.car.price_per_day}
            value={formData.price_per_day}
            onChange={(e) =>
              setFormData({ ...formData, price_per_day: e.target.value })
            }
           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>
		
    {/* ____________________________________PHOTOS____________________________________________________ */}
    
  <div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input id="image1"
                 type="file"
                 placeholder={props.car.photo1}
                 onChange={(e) => handleImageChange(e, 0)}
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
				 <div className=" w-full lg:w-8/12 border flex justify-center items-center">
                          <img src={props.car.photo1} alt={props.car.model}/>
                      </div>
        <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 1
        </label>
		  </div>
      <div className="grid xl:grid-cols-1 xl:gap-6">
			<div className="relative z-0 mb-6* w-full group">
				<input id="image1"
                 type="file"
                 placeholder={props.car.photo3}
                 onChange={(e) => handleImageChange(e, 2)}
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
			<div className=" w-full lg:w-8/12 border flex justify-center items-center">
                          <img src={props.car.photo3} alt={props.car.model}/>
                      </div>
      
      	<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 3
        </label>

 

		</div>
    </div>
   </div>
    
      <div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input id="image2"
                 type="file"
                 placeholder={props.car.photo2}
                 onChange={(e) => {handleImageChange(e, 1) }}
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
			<div className=" w-full lg:w-8/12 border flex justify-center items-center">
                          <img src={props.car.photo2} alt={props.car.model}/>
      </div>
      
      	<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 2
        </label>

</div>



<div className="grid  xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input id="image1"
                 type="file"
                 placeholder={props.car.photo4}
                 onChange={(e) => handleImageChange(e, 3)}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
             <div className=" w-full lg:w-8/12 border flex justify-center items-center">
                          <img src={props.car.photo4} alt={props.car.model}/>
                      </div>
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 4
</label>
		</div>
    </div>

   
    
{/* _________________________________________________________________________________________________________ */}


			<div className="relative z-0 mb-6 w-full group">
      <label  className="textMainColor">Number of cars in stock</label>
		
				<input 
                 type="text"
                 value={formData.stock}
                 placeholder={props.car.stock}
                 onChange={(e) =>
                   setFormData({ ...formData, stock: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
  
  <label  className="textMainColor">Energie</label>
<input name='Energie'
                 type="text"
                 value={formData.tech_fiche.energie}
                 placeholder={props.car.tech_fiche.energie}
                 onChange={(e) =>
                  setFormData({ ...formData,tech_fiche: {
                    ...formData.tech_fiche,
                    energie: e.target.value,
                  }, })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />

  <label  className="textMainColor">Boite</label>
     
<input           name='Boite'
                 type="text"
                 value={formData.tech_fiche.boite}
                 placeholder={props.car.tech_fiche.boite}
                 onChange={(e) =>
                  setFormData({ ...formData,tech_fiche: {
                    ...formData.tech_fiche,
                    boite: e.target.value,
                  }, })
                }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
 
  <label  className="textMainColor">Color</label>          
        <input 
                 type="text"
                 value={formData.color}
                 placeholder={props.car.color}
                 onChange={(e) =>
                   setFormData({ ...formData, color: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
			</div>
      
		</div>
    {/* ________________________________________________________________________________________________________ */}

    
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
  <label  className="textMainColor">Numero Assurance</label>
        
				<input 
                 type="text"
                 placeholder={props.car.num_assurance.num_assurace}
                 value={formData.num_assurance.num_assurace}
                 onChange={(e) =>
                  setFormData({ ...formData, num_assurance: {
                    ...formData.num_assurance,
                    num_assurace: e.target.value,
                  }, })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<label  className="textMainColor">End date of insurance</label>

				<input 
                 type="date"
                 placeholder={props.car.num_assurance.end_assurance.substring(0,11)}
                 value={formData.num_assurance.end_assurance}
                 
                 onChange={(e) =>
                  setFormData({ ...formData, num_assurance: {
                    ...formData.num_assurance,
                    end_assurance: e.target.value,
                  }, })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
			</div>

          
		</div>
    <label  className="textMainColor">Description</label>

            <textarea id="message" name="carDesc"
           type="text"
           value={formData.tech_fiche.description}
           placeholder={props.car.tech_fiche.description}
           onChange={(e) =>
             setFormData({ ...formData, tech_fiche: {
              ...formData.tech_fiche,
              description: e.target.value,
            }, })
           }
           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
           </textarea>
           <label  className="textMainColor">Les Options</label>
           <textarea id="message" name="options"
           type="text"
           value={formData.tech_fiche.option}
           placeholder={props.car.tech_fiche.option}
           onChange={(e) =>
             setFormData({ ...formData,tech_fiche: {
              ...formData.tech_fiche,
              option: e.target.value,
            }, })
           }
           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
           </textarea>
           <br></br><br></br>
           <div className="relative z-0 mb-6 w-full group">

    <label  className="textMainColor">Puissance</label>
			<input  type="text"
            placeholder={props.car.tech_fiche.puissence}
             value={formData.tech_fiche.puissence}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                puissence: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>

     
    <div className="relative z-0 mb-6 w-full group">
			<label className="textMainColor">Release Date</label>

			<input  type="Date"
              placeholder={props.car.tech_fiche.released_date}
             value={formData.tech_fiche.released_date}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                released_date: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer"  />
		</div>
				
    
    <div className="p-2 w-full flex">
            <button
              type="submit"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
            onClick={props.MessageUpdated}
            >
              Update Car
            </button>
            <Link to='/admindashboard'>
            <button
              type="button"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
             onClick={props.methodCancel}
            >
              Cancel
            </button>
            </Link>
          </div>    </form>
</div>
  );
};

export default UpdateCar;


/*  <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="carIMG"
                value={formData.carIMG}
              onChange={handleImageUpload}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                
              />
              <label
              
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image 1
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="carIMG2"
                value={formData.carIMG2}
                onChange={handleImageUpload}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

          
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image 2
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="carIMG3"
                value={formData.carIMG3}
                onChange={handleImageUpload}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

          
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image 3
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="carIMG4"
                value={formData.carIMG4}
                onChange={handleImageUpload}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

          
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image 4
              </label>
            </div>
          
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="carPassengerCapacity"
                value={formData.carPassengerCapacity}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Car Passenger Capacity"
                
              />
              <input
                type="text"
                name="carFuelType"
                value={formData.carFuelType}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Car Fuel Type"
                
              />
            
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="carLocation"
                value={formData.carLocation}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Car Location
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="carEngineType"
                value={formData.carEngineType}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Car Engine Type
              </label>
            </div>
          </div> */