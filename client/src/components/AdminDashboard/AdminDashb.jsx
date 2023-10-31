import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashb.css";
import UpdateCar from "./UpdateCar";
import { Link } from "react-router-dom";

const AdminDashb = () => {
  // window.scrollTo(0, 0);
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchCars = () => {
    axios
      .get("http://localhost:8090/Cars/getAllCars")
      .then((res) => {
        setCars(res.data);
        console.log("fatching successfuly",res.data);
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
    console.log("the id to delete is ",carId)
    axios
      .delete(`http://localhost:8090/Cars/deleteCars/${carId}`)
      .then(() => {
        console.log("car is deleted successfully..");
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
                  <div className="dashboards" key={car.mat}>
                    <div className="dashboard">
                      <div className="dashboard-logo">
                        <img src={car.photo1} />
                      </div>
                      <dl className="dashboard-details">
                        <div>
                          <dt>{car.model}</dt>
                          <dd>{car.tech_fiche.marque}</dd>
                        </div>
                        <div>
                          <dd>Horse Power</dd>
                          <dt>{car.tech_fiche.puissence}</dt>
                        </div>
                        <div>
                          <dd>Vehicule Gear</dd>
                          <dt>{car.tech_fiche.boite}</dt>
                        </div>
                        <div>
                          <dd>Car Engine Type</dd>
                          <dt>{car.tech_fiche.energie}</dt>
                        </div>
                      </dl>
                      <div className="dashboard-number">{car.price_per_day} TND</div>
                      <div
                        className="dashboard-actions green cursor-pointer"
                        onClick={() => handleEdit(car)}
                      >
                        Edit
                      </div>
                      <div
                        className="dashboard-actions red cursor-pointer"
                        onClick={() => handleDelete(car.mat)}
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
