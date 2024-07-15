import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Certi1 from '../assets/Certi1.jpeg';
import Certi2 from '../assets/Certi2.jpeg';
import Certi3 from '../assets/Certi3.jpeg';

const Certificate = () => {
  const [certificates] = useState([
    { 
      id: 1, 
      name: 'SmkCoding', 
      issuer: 'Coursera', 
      date: '2022-08-23', 
      img: Certi2, 
      pdf: '/assets/Dicoding.pdf' 
    },
    { 
      id: 2, 
      name: 'SmkCoding', 
      issuer: 'Coursera', 
      date: '2023-10-05', 
      img: Certi1, 
      pdf: '/assets/SmkCoding.pdf' 
    },
    { 
      id: 3, 
      name: 'SmkCoding', 
      issuer: 'Coursera', 
      date: '2022-09-16', 
      img: Certi3, 
      pdf: '/assets/Dicoding2.pdf' 
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div className="bg-[#232325] min-h-screen p-6 overflow-hidden" id="certificate">
      <h1 className="text-4xl text-center font-bold text-white mb-6">
        My <span className="primary-color">Certificates</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => {
          // Tentukan data-aos berdasarkan posisi elemen dalam grid
          let aosAnimation;
          if (index % 3 === 0) {
            aosAnimation = 'fade-right'; // Elemen kiri
          } else if (index % 3 === 1) {
            aosAnimation = 'fade-up'; // Elemen tengah
          } else {
            aosAnimation = 'fade-left'; // Elemen kanan
          }
          
          return (
            <div
              key={certificate.id}
              className="relative p-4 bg-white rounded shadow group"
              data-aos={aosAnimation}
              data-aos-delay={index * 100}
            >
              <h2 className="text-2xl font-semibold">{certificate.name}</h2>
              <p className="text-gray-600">Issuer: {certificate.issuer}</p>
              <p className="text-gray-600">Date: {certificate.date}</p>
              <div className="relative mt-4">
                {certificate.img && (
                  <img
                    src={certificate.img}
                    alt={certificate.name}
                    className="w-full h-auto rounded"
                  />
                )}
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-primary-color bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-bold rounded transition-opacity duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
