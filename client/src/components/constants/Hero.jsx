import React, { useState, useEffect } from 'react';
import "../../widgetsDesign.css"

const Hero = () => {
  const docForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdJvdNLhbUrjyljIqntYgRKWp1oMXFv6EmbPEAvTKwZiqXj4w/viewform?vc=0&c=0&w=1&flr=0';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://catalogue.automobile.tn/big/2023/03/46892.png?t=1684245444',
    'https://www.pngmart.com/files/16/Kia-PNG-Pic.png',
      'https://www.pngall.com/wp-content/uploads/9/Renault-PNG-Pic-Background.png',
  ];

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Automatically change the image after 5 seconds
    const intervalId = setInterval(changeImage, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <header className="Hero">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 h-screen md:h-128 md:py-4 md:flex-row md:items-center md:space-x-6">
          <div
            className="flex flex-col items-center w-full md:flex-row md:w-1/2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
              <button id="buttonAnimation" className="w-3 h-3 mx-2 bg-yellow-500 rounded-full md:mx-0 focus:outline-none" onClick={changeImage}></button>
              <button id="buttonAnimation" className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none " onClick={changeImage}></button>
              <button id="buttonAnimation" className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none " onClick={changeImage}></button>
              <button id="buttonAnimation" className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none " onClick={changeImage}></button>
            </div>

            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-kanit font-medium tracking-wide text-gray-800 dark:text-black md:text-6xl">
                Discover Tunisia's Beauty on Wheels with TunisianAutoTrek
              </h1>
              <p className="mt-4 text-gray-600 dark:text-black">
                Uncover Tunisia's wonders on your terms with{' '}
                <span id="colorProjet" className=" font-bold capitalize">TunisianAutoTrek</span>'s premium rental cars.
              </p>
              <div className="mt-6">
                <a
                  href={docForm}
                  className="relative tracking-wide inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
                >
                  <span id="HeroButton" className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black uppercase text-xl">
                    Rent a car
                  </span>
                </a>
              </div>
            </div>
          </div>

{/* Car Images Container */}

       {/*    <div
            className="flex items-center justify-center w-96 h-96 md:w-1/2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              className="object-cover w-full h-full rounded-md"
              src={images[currentImageIndex]}
              alt="TunisianAutoTrek Vehicle" data-aos="fade-right"
            />
          </div> */}

{/* ________________________Replace By_______________________________ */}
<div class="myhero">
      <div class="hero2">
        <div class="box1">
          <div class="TextP">
            <div class="text">Our Garages</div>
            <div class="points">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="TextB">
            <div>
              BEST <br />
              CARS TO RENT
            </div>
            <button>
            <svg
                fill="#77a6bb"
                version="1.1"
                viewBox="0 0 24.00 24.00"
                xmlSpace="preserve"
                width="256px"
                height="256px"
                stroke="#77a6bb"
                strokeWidth="0.00024000000000000003"
>

                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <style type="text/css">
                  {`.st0 {
                    fill: none;
                           }`}
                  </style>
                  <path d="M9,18l7-6L9,6V18z"></path>
                  <rect class="st0" width="24" height="24"></rect>
                  <rect class="st0" width="24" height="24"></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div class="box1">
          <div class="thedate AA">
            <div class="day">19 July</div>
            <div class="logo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="Options AA">
            <button>
              <div>Cheack Our Dispo Cars</div>
              <div class="lola">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 12H20M20 12L16 8M20 12L16 16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
            <button class="notB">
              <div>Proposition</div>
              <div class="lola">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 12H20M20 12L16 8M20 12L16 16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="hero2">
        <div class="box1">
          <div class="TextP">
            <div class="text">Our Garages</div>
            <div class="points">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#77a6bb"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="TextB">
            <div class="Contact">Contact Our Service</div>
          </div>
        </div>
        <div class="box2">
          <div class="the30 m1">Luxury</div>
          <div class="the20 mm">
            <div>CARS</div>
            <div>discover it</div>
          </div>
        </div>
        <div class="box2">
          <div class="the30 m1">Popular</div>
          <div class="the20 mm">
            <div>CARS</div>
            <div>discover it</div>
          </div>
        </div>
        <div class="box2">
          <div class="thetex ww">Fidelity Points</div>
          <div class="ladate ww">19 July 2023</div>
          <div class="codeBar ww"></div>
          <div class="des ww">Don't Miss The Opportunity</div>
        </div>
      </div>

      
    </div>

{/* ____________________Replacing Ends here __________________________ */}

        </div>
      </header>
    </>
  );
};

export default Hero;
