import React, { useState, useEffect } from 'react';


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

          <div
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
