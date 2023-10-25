import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: "How can I reserve a car with Tunisian Auto Trek ?",
      content:
        "Making a reservation with Tunisian Auto Trek is easy. You can visit our website and use the online reservation form. Just select the pickup and return dates, choose the car model you prefer, and provide your contact information. Once submitted, our team will review the request and confirm the availability of the car for your desired dates.",
    },
    {
      title: "What happens if the car breaks down during the rental period ?",
      content:
        "In the unlikely event that the car experiences a mechanical issue during your rental, please contact our 24/7 roadside assistance hotline immediately. We'll provide you with guidance on what steps to take. Depending on the situation, we may arrange for a replacement vehicle or dispatch a mechanic to assist you. Your safety and convenience are our top priorities.",
    },
    {
      title: "What is the process for returning the rental car after hours ?",
      content:
        "We understand that schedules can vary. If you need to return the rental car outside of our regular business hours, simply park the car in our designated return area and lock the vehicle. Please ensure you've removed all personal belongings. We'll provide you with instructions on how to drop off the keys securely. Our team will inspect the car and process the return during the next business hours.",
    }
  ];

  return (
    <div className="h-auto pb-24 bg-white grid place-items-center">
        <h2 className="font-palanquin py-8 text-4xl uppercase font-bold text-gray-600">
        <span id="webSiteTextColor" className='text-normal '>&#9679;</span> Frequently Asked Questions
        </h2>
      <div className="w-6/12 mx-auto rounded border" data-aos="fade-up">
        <div className="bg-white p-10 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800">Have Questions? Find Your Answers Here!</h3>
          <p className="text-sm font-light text-gray-600 my-3">
          Quick answers to commonly asked questions about our services
          </p>
          <div className="h-1 w-full mx-auto border-b my-5"></div>
          {accordionItems.map((item, index) => (
            <div className="hover:text-black" key={index}>
              <div
                className={`accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 ${
                  activeAccordion === index ? 'bg-black text-white' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <i className={`fas ${activeAccordion === index ? 'fa-minus' : 'fa-plus'}`}></i>
                <h3>{item.title}</h3>
              </div>
              <div
                className={`accordion-content px-5 pt-0 overflow-hidden ${
                  activeAccordion === index ? 'max-h-content' : 'max-h-0'
                }`}
              >
                <p className="leading-6 font-light py-6 pl-9 text-justify text-slate-600">&#9656; {item.content}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
