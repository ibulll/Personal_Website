import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujyrigd', 'template_wfoneop', form.current, '6VNLXLbgvp4W2fGxS')
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="max-w-[690px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span className="primary-color">Me</span>
            </h1>
            <p className="text-normal text-lg text-gray-400 mt-2">
              Let's connect on Instagram <br /> or send me an Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M3 8.29L5.26 5.26a2" />
              </svg>
              <div className="ml-4 text-md tracking-wide w-40">
                <p>IlhamArdhanmas</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center max-w-[700px]">
            <div className="flex flex-col">
              <input type="text" name="name" placeholder="Full Name" className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-800 text-white" required />
            </div>
            <div className="flex flex-col mt-2">
              <input type="email" name="email" placeholder="Email" className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-800 text-white" required />
            </div>
            <div className="flex flex-col mt-2">
              <textarea name="message" placeholder="Your Message" className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-800 text-white" required></textarea>
            </div>
            <button type="submit" className="md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
