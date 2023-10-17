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
    mat: '',
    model: '',
    stock: '',
    price_per_day: '',
    color: '',
    num_assurance: {
      num_assurace:'',
      end_assurance: '',
    },
   
    tech_fiche:{
      marque:'',
      puissence:'',
      option:'',
      released_date:'',
      description:'',
    },
    photos:[]
  });

  


  useEffect(() => {
   
  }, []);
 
  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
  };

/*   const handleImageUpload = async (event) => {
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
  }; */

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
        setFormData({ ...formData, photos: base64String })
      };
      reader.readAsDataURL(file);
      console.log("the data to send in request is",formData)
    }
  };

  /* const handleImageChange = async (event, index) => {
  const selectedFile = event.target.files[0];
 
  const arrayBuffer = await selectedFile.arrayBuffer();
  const byteArray =await  new Uint8Array(arrayBuffer);
console.log("bytearray",byteArray)
  // Now 'byteArray' contains the data as a byte array
   setFormData((prevData) => {
    const updatedphotos = [...prevData.photos];
    updatedphotos[index] = byteArray;
    console.log("result",{ ...prevData, photos: updatedphotos })
    return { ...prevData, photos: updatedphotos };
  });
   setFormData({ ...formData, photos: byteArray }) 

      console.log("the data to send in request is",formData)
    } */


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData,"is the object to send")
      const response =await axios.post('http://localhost:8090/QueryCars/saveNewCar', formData);
      /* window.location.reload(); */
      console.log("response: ",response)    } 
      catch (error) {
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
           
          }}
        />
      )}
	<form onSubmit={handleSubmit}>
		<div className="relative z-0 mb-6 w-full group">
			<input
             type="text"
             value={formData.mat}
             onChange={(e) =>
               setFormData({ ...formData, mat: e.target.value })
             }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Matricule</label>
		</div>

		<div className="relative z-0 mb-6 w-full group">
			<input  type="text"
             value={formData.model}
             onChange={(e) =>
               setFormData({ ...formData, model: e.target.value })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">car Model</label>
		</div>

    <div className="relative z-0 mb-6 w-full group">
			<input  type="text"
             value={formData.tech_fiche.marque}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                marque: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Brand</label>
		</div>


		<div className="relative z-0 mb-6 w-full group">
			<input 
            type="text"
            value={formData.price_per_day}
            onChange={(e) =>
              setFormData({ ...formData, price_per_day: e.target.value })
            }
           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price per day</label>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input id="image1"
                 type="file"
                 onChange={(e) => handleImageChange(e, 0)}
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 1
</label>
		</div>
    </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input id="image2"
                 type="file"
                 onChange={(e) => {handleImageChange(e, 1) }}
             
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 2
</label>
			</div>

   {/*          <div className="relative z-0 mb-6 w-full group">
				<input 
                  type="file"
                  value={formData.carIMG2}
                  onChange={
                    handleImageUpload
                  }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 2</label>
			</div>
            <div className="relative z-0 mb-6 w-full group">
				<input 
                  type="file"
                  value={formData.carIMG3}
                  onChange={
                    handleImageUpload
                  }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 3</label>
			</div>
            <div className="relative z-0 mb-6 w-full group">
				<input 
                type="file"
                value={formData.carIMG4}
                onChange={
                  handleImageUpload
                }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image 4</label>
			</div> */}
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="text"
                 value={formData.stock}
                 placeholder="Number of cars in stock"
                 onChange={(e) =>
                   setFormData({ ...formData, stock: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />

        <input 
                 type="text"
                 value={formData.color}
                 placeholder="Car color"
                 onChange={(e) =>
                   setFormData({ ...formData, color: e.target.value })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			</div>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6">
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="text"
                 value={formData.num_assurance.num_assurace}
                 onChange={(e) =>
                  setFormData({ ...formData, num_assurance: {
                    ...formData.num_assurance,
                    num_assurace: e.target.value,
                  }, })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Insurance Number</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input 
                 type="date"
                 value={formData.num_assurance.end_assurance}
                 onChange={(e) =>
                  setFormData({ ...formData, num_assurance: {
                    ...formData.num_assurance,
                    end_assurance: e.target.value,
                  }, })
                 }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
				<label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-Green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End date of insurance</label>
			</div>

          
		</div>
            <textarea id="message" name="carDesc"
           type="text"
           value={formData.tech_fiche.description}
           placeholder='Car Description'
           onChange={(e) =>
             setFormData({ ...formData, tech_fiche: {
              ...formData.tech_fiche,
              description: e.target.value,
            }, })
           }
           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
           </textarea>

           <textarea id="message" name="options"
           type="text"
           value={formData.tech_fiche.option}
           placeholder='Car Options'
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
			<input  type="text"
             value={formData.tech_fiche.puissence}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                puissence: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Horse Power /Puissance</label>
		</div>

    <div className="relative z-0 mb-6 w-full group">
			<input  type="Date"
             value={formData.tech_fiche.released_date}
             onChange={(e) =>
              setFormData({ ...formData, tech_fiche: {
                ...formData.tech_fiche,
                released_date: e.target.value,
              }, })
             }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 peer" required />
			<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Release Date</label>
		</div>
				
    
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