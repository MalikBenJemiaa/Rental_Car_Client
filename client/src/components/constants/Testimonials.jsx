import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      imgSrc: "https://liveboldandbloom.com/wp-content/uploads/2020/12/Untitled-design-5-1-1-768x538.png",
      feedback: "I rented a car from Tunisian Auto Trek during my business trip to Tunisia, and I'm thrilled with the service. The website was user-friendly, and the booking process was quick. The car I rented was clean, well-maintained, and perfect for my needs. I highly recommend Tunisian Auto Trek to anyone looking for quality car rentals.",
      name: "Yara Yahyaoui"
    },
    {
      imgSrc: "https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg",
      feedback: "Tunisian Auto Trek made my vacation truly memorable. The rental process was seamless, and the car was in pristine condition. The team's professionalism and friendly service exceeded my expectations. I explored Tunisia with confidence, knowing I had reliable transportation. Thank you for a fantastic experience!",
      name: "Med Taher Cherni"
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <h2 className="font-palanquin py-8 text-4xl uppercase font-bold">
        <span className='text-normal text-yellow-400'>&#9679; </span>
        Their Words, Our Excellence
        </h2>
        <div className="flex flex-wrap -m-4">
          {testimonialsData.map((feedback, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}  data-aos="fade-up">
              <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                <p className="leading-relaxed mb-6">{feedback.feedback}</p>
                <a className="inline-flex items-center">
                  <img alt={`Feedback ${index + 1}`} src={feedback.imgSrc}  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{feedback.name}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
