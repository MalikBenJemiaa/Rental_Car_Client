import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";

const AddCar = () => {
  const cloudName = 'ddlpxakhl'; 
  const [selectedImage, setSelectedImage] = useState([]);
  const [isAdding, setIsAdding] = useState(false); 
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    carName: '',
    carDesc: '',
    carCategory: '',
    carPrice: '',
    carSpecs: '',
    carFuelType: '',
    carEngineType: '',
    carPassengerCapacity: '',
  });

  
  const fetchCars = () => {
    axios
      .get('http://localhost:5000/api/cars/')
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchCars();
  }, []);
 
  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
  };

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.carIMG = selectedImage [0]
      formData.carIMG2 = selectedImage [1]
      formData.carIMG3 = selectedImage [2]
      formData.carIMG4 = selectedImage [3]
      await axios.post('http://localhost:5000/api/cars', formData);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
 {isAdding && (
        <AddCar
          onCancel={handleCancelAdd}
          onAdded={() => {
            setIsAdding(false);
            fetchCars();
          }}
        />
      )}
	<form onSubmit={handleSubmit}>
		<div className="relative z-0 mb-6 w-full group">
			<input
             type="text"
             value={formData.carName}
             onChange={(e) =>
               setFormData({ ...formData, carName: e.target.value })
             }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Name</label>
		</div>
		<div className="relative z-0 mb-6 w-full group">
			<input  type="text"
             value={formData.carCategory}
             onChange={(e) =>
               setFormData({ ...formData, carCategory: e.target.value })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Category</label>
		</div>
		<div className="relative z-0 mb-6 w-full group">
			<input 
            type="text"
            value={formData.carPrice}
            onChange={(e) =>
              setFormData({ ...formData, carPrice: e.target.value })
            }
           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Price</label>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="file"
                 value={formData.carIMG}
                 onChange={
                   handleImageUpload
                 }
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 1
</label>
			</div>
            <div className="relative z-0 mb-6 w-full group">
				<input 
                  type="file"
                  value={formData.carIMG2}
                  onChange={
                    handleImageUpload
                  }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 2</label>
			</div>
            <div className="relative z-0 mb-6 w-full group">
				<input 
                  type="file"
                  value={formData.carIMG3}
                  onChange={
                    handleImageUpload
                  }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 3</label>
			</div>
            <div className="relative z-0 mb-6 w-full group">
				<input 
                type="file"
                value={formData.carIMG4}
                onChange={
                  handleImageUpload
                }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 4</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="text"
                 value={formData.carPassengerCapacity}
                 placeholder="Car Passenger Capacity"
                 onChange={(e) =>
                   setFormData({ ...formData, carPassengerCapacity: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />

        <input 
                 type="text"
                 value={formData.carFuelType}
                 placeholder="Car Fuel Type"
                 onChange={(e) =>
                   setFormData({ ...formData, carFuelType: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			</div>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="text"
                 value={formData.carLocation}
                 onChange={(e) =>
                   setFormData({ ...formData, carLocation: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Location</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="text"
                 value={formData.carEngineType}
                 onChange={(e) =>
                   setFormData({ ...formData, carEngineType: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Engine Type</label>
			</div>

          
		</div>
            <textarea id="message" name="carDesc"
           type="text"
           value={formData.carDesc}
           placeholder='Car Description'
           onChange={(e) =>
             setFormData({ ...formData, carDesc: e.target.value })
           }
           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
           </textarea>

           <textarea id="message" name="carSpecs"
           type="text"
           value={formData.carSpecs}
           placeholder='Car Specifications'
           onChange={(e) =>
             setFormData({ ...formData, carSpecs: e.target.value })
           }
           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
           </textarea>
				
    
    <div className="p-2 w-full flex">
            <button
              type="submit"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
            >
              Add Car
            </button>
            <Link to='/admindashboard'>
            <button
              type="button"
              className="flex mr-2 text-white bg-[#0f172a] border-0 py-2 px-8 focus:outline-none hover:bg-[#facc15] hover:text-black rounded text-lg uppercase font-bold"
             
            >
              Cancel
            </button>
            </Link>
          </div>    </form>
</div>
  )
}

export default AddCar