import React, { createContext, useContext, useState, useEffect } from 'react';

const CarContext = createContext();

export const CarContextProvider = ({ children }) => {
  const [selectedCarId, setSelectedCarId] = useState(null||localStorage.selectedCarId);

  const carsel = (num) => {
    setSelectedCarId(num);
    localStorage.setItem('selectedCarId', num); 
    console.log(localStorage);
  };

  useEffect(() => {
    const storedCarId = localStorage.getItem('selectedCarId');
    if (storedCarId) {
      setSelectedCarId(storedCarId);
    }
  }, []);

  return (
    <CarContext.Provider value={{ selectedCarId, carsel }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
