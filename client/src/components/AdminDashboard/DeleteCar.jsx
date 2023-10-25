import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteCar = () => {
  const [cars, setCars] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8090/Cars/getAllCars").then((response) => {
      setCars(response.data);
    });
  }, []);

  const handleDelete = async () => {
    if (selectedProduct) {
      try {
        await axios.delete(`http://localhost:5000/product/${selectedProduct.id}`);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <select onChange={(e) => setSelectedProduct(JSON.parse(e.target.value))}>
        <option value="">Select a Car</option>
        {cars.map((car) => (
          <option key={car.id} value={JSON.stringify(car)}>
            {car.productname}
          </option>
        ))}
      </select>
      <button onClick={handleDelete} disabled={!selectedProduct}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteCar;
