import React, { useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";


const UpdateCar = ({ car, onCancel, onUpdated }) => {
  const cloudName = 'ddlpxakhl'; 
  const [selectedImage, setSelectedImage] = useState([]);
  const [formData, setFormData] = useState({
    carName: car ? car.carName : "",
    carDesc: car ? car.carDesc : "",
    carPrice: car ? car.carPrice : "",
    carCategory: car ? car.carCategory : "",
    carLocation: car ? car.carLocation : "",
    carSpecs: car ? car.carSpecs : "",
    carFuelType: car ? car.carFuelType : "",
    carEngineType: car ? car.carEngineType : "",
    carPassengerCapacity: car ? car.carPassengerCapacity : "",
  });


  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'cpv8rth7');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log(response.data.secure_url);

      setSelectedImage((prevSelectedImages) => [
        ...prevSelectedImages,
        response.data.secure_url,
      ]);
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData };

    updatedFormData.carIMG = selectedImage[0];
    updatedFormData.carIMG2 = selectedImage[1];
    updatedFormData.carIMG3 = selectedImage[2];
    updatedFormData.carIMG4 = selectedImage[3];

    axios
      .put(`http://localhost:5000/api/cars/${car.id}`, updatedFormData)
      .then((response) => {
        console.log("Update Successful:", response.data);
        onUpdated();
      })
      .catch((err) => {
        console.error("Update Error:", err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="carName"
              value={formData.carName}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
             
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Car Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="carCategory"
              value={formData.carCategory}
              onChange={handleInputChange}
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
      
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Car Category
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="carPrice"
              value={formData.carPrice}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
             
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Car Price
            </label>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="carIMG"
                value={formData.carIMG}
              onChange={handleImageUpload}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                required
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
                required
              />
              <input
                type="text"
                name="carFuelType"
                value={formData.carFuelType}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Car Fuel Type"
                required
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
                required
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

                required
              />
              <label
               
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Car Engine Type
              </label>
            </div>
          </div>
          <textarea
            id="message"
            name="carDesc"
            value={formData.carDesc}
            onChange={handleInputChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          <textarea
            id="message"
            name="carSpecs"
            value={formData.carSpecs}
            onChange={handleInputChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          <div className="p-2 w-full flex">
            <button
              type="submit"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
            >
              Apply Changes
            </button>
            <button
              type="button"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCar;
