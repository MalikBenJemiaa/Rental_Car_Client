import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h2 className="banner-title">
              Onward to Adventure: Choose Tunisian Auto Trek Today!
            </h2>
            <p className="banner-description">
              Set your course for excitement with our trusted services
            </p>
          </div>
          <div className="banner-image">
            <img
              src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2017/10/car-png-13.png?resize=780%2C463&ssl=1"
              alt="Adventure Car"
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
