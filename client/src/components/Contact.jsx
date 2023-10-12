import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const email = 'example@email.com';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f8xs7wa', 
    'template_o41jdny', 
    form.current,
     'K5efOxBNzYz4bgEmK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
  };

  return (
    <>
    <section className="text-gray-600 body-font relative">
    <h2 className="font-palanquin py-8 text-center text-4xl uppercase font-bold text-gray-600">
        <span className='text-normal text-yellow-400'>&#9679;</span> Stay in Touch
        </h2>
  <div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" data-aos="fade-right">
      <iframe width="100%" height="100%" className="myMap absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">El Kef, Tunisia | Seliana, Tunisia | Djerba, Tunisia</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href={`mailto:${email}`} className="text-indigo-500 leading-relaxed">contact@tunisianautotrek.tn</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">78-800-890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" data-aos="fade-left">
        <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Do You Have a Qustion ?</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please do not hesitate to contact us !</p>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" name="user_name"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Message</label>
        <textarea name="message" className="w-full bg-white rounded border  h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" value="Send" className="w-full text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Send Your Message</button>
      </form>
    </div>
  </div>
</section>
    </>
  );
};
export default Contact