import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashb.css";
import UpdateCar from "./UpdateCar";
import { Link } from "react-router-dom";

const AdminDashb = () => {
  window.scrollTo(0, 0);
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchCars = () => {
    axios
      .get("http://localhost:5000/api/cars/")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleEdit = (car) => {
    setSelectedCar(car);
    setIsUpdating(true);
  };

  const handleDelete = (carId) => {
    axios
      .delete(`http://localhost:5000/api/cars/${carId}`)
      .then(() => {
        fetchCars();
      })
      .catch((err) => console.log(err));
  };

  const handleCancelEdit = () => {
    setSelectedCar(null);
    setIsUpdating(false);
  };

  return (
    <>
      <body>
        <div className="dashboardX">
          <div className="dashboardX-body">
            <div className="dashboardX-body-main-content">
              <h2>Admin Dashboard</h2>
              <div className="search-field">
                <i className="ph-magnifying-glass"></i>
                <input type="text" placeholder="Get Car By Category" />
              </div>
              {isUpdating && (
                <UpdateCar
                  car={selectedCar}
                  onCancel={handleCancelEdit}
                  onUpdated={() => {
                    setIsUpdating(false);
                    fetchCars();
                  }}
                />
              )}
              <section className="dashboard-section">
                <div className="dashboard-section-header">
                  <h2>All Cars</h2>
                  <Link to="/addcar" className="yellow px-4 ml-4">
                    Add Car
                  </Link>
                </div>
                {cars.map((car) => (
                  <div className="dashboards" key={car.id}>
                    <div className="dashboard">
                      <div className="dashboard-logo">
                        <img src={car.carIMG} />
                      </div>
                      <dl className="dashboard-details">
                        <div>
                          <dt>{car.carName}</dt>
                          <dd>{car.carCategory}</dd>
                        </div>
                        <div>
                          <dd>Location</dd>
                          <dt>{car.carLocation}</dt>
                        </div>
                        <div>
                          <dd>Car Engine Type</dd>
                          <dt>{car.carEngineType}</dt>
                        </div>
                      </dl>
                      <div className="dashboard-number">{car.carPrice} TND</div>
                      <div
                        className="dashboard-actions green cursor-pointer"
                        onClick={() => handleEdit(car)}
                      >
                        Edit
                      </div>
                      <div
                        className="dashboard-actions red cursor-pointer"
                        onClick={() => handleDelete(car.id)}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminDashb;
