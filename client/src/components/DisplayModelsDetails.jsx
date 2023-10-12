import React from "react";
import { Link } from "react-router-dom";
import { useCarContext } from "../pages/CarContext";

const DisplayModelsDetails = (props) => {
  const { carsel } = useCarContext();

  const { car } = props;

  return (
    <>
      <div
        className="overflow-hidden transition-shadow duration-300 bg-white border shadow-sm"
        data-aos="zoom-in"
        data-aos-offset="300"
      >
        <img
          src={props.car.carIMG}
          className="object-contain w-full h-64"
          alt={props.car.carName}
        />
        <div className="p-5">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              {props.car.carFuelType}
            </a>
            <br />
            <span className="text-gray-600">{props.car.carLocation}</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl uppercase font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {props.car.carName}
          </a>
          <p className="mb-2 text-gray-700">
            {props.car.carPrice} TND
            <span className="mx-3 text-sm text-slate-600 uppercase">
              Per Day
            </span>
          </p>
          <Link
            to={`/car/${car.id}`}
            onClick={() => carsel(car.id)}
            className="relative tracking-wide inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-normal text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
              More Details
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayModelsDetails;
