import React, { useState } from 'react';

const Work = () => {
  const [showDescription, setShowDescription] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

  const toggleDescription = (project) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className="flex flex-col items-center" id='project'>
      <h2 className="text-4xl font-bold mb-8 text-white">My <span className="primary-color">Projects</span></h2>

      <div className="flex flex-wrap w-full px-4 justify-center gap-8" data-aos="fade-up" data-aos-duration="1000">
        {/* Project 1 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/Project2.jpeg" className="sm:h-full" alt="Information System PKL" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-[1.5rem] text-2xl px-6 text-white">Information System PKL</h3>
          <button
            onClick={() => toggleDescription('project1')}
            className="px-4 py-2 bg-primary text-white rounded-md mb-3 mx-2"
          >
            Description
          </button>
          {showDescription.project1 && (
            <p className="font-extralight leading-relaxed tracking-[2px] px-6 text-white">
              This project aims to develop an information system to manage Field Work Practice activities for vocational school students and girls. This system facilitates the management of student data, PKL locations, schedules and final PKL reports. This project was carried out by a team of four people.
            </p>
          )}
          <div className="flex gap-x-2 px-6">
            <div className="relative group py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/React-icon.svg.png" alt="React" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
            </div>
            <div className="relative group py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/Laravel.svg.png" alt="Laravel" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Laravel</span>
            </div>
            <div className="relative group py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="Tailwind" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</span>
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 mx-3 bg-primary font-medium text-lg rounded-md hover:bg-secondary bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow">
          <div className="rounded-md overflow-hidden ">
            <img src="/assets/Project1.png" className="h-full" alt="Personal Web" width="w-full" />
          </div>
          <h3 className="text-white font-bold mb-3 mt-4 text-2xl px-6">My Personal Website</h3>
          <button
            onClick={() => toggleDescription('project2')}
            className="px-4 py-2 bg-primary text-white rounded-md mb-3 mx-2"
          >
            Description
          </button>
          {showDescription.project2 && (
            <p className="text-white font-extralight leading-relaxed tracking-[2px] px-6">
              Welcome to my personal website! As an SMK student, this site highlights my journey, projects, and skills. Discover my academic achievements, technical skills, and personal interests here. This platform serves as a digital portfolio showcasing my growth and experiences at SMK.
            </p>
          )}
          <div className="flex gap-x-2 px-6 py-2">
            <div className="relative group py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/React-icon.svg.png" alt="React" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
            </div>
            <div className="relative group py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="Tailwind" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</span>
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://ilhamardhanmas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="/assets/Project3.png" className="h-full" alt="Web Store" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-6 text-2xl px-6 text-white">Web Store</h3>
          <button
            onClick={() => toggleDescription('project3')}
            className="px-4 py-2 bg-primary text-white rounded-md mb-3 mx-2"
          >
            Description
          </button>
          {showDescription.project3 && (
            <p className="font-extralight leading-relaxed tracking-[2px] px-6 text-white">
              This project is a simple webstore that enables product browsing and checkout. It offers an easy-to-use interface but does not yet include payment integration. The focus is on user-friendly navigation and basic order management.
            </p>
          )}
          <div className="flex gap-x-2 px-6">
            <div className="relative group py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/Vue.js.svg.png" alt="Vue" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Vue</span>
            </div>
            <div className="relative group py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="Tailwind" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</span>
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="./UIKA-3.png" className="h-full" alt="" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-5 text-2xl px-6"></h3>
          <button
            onClick={() => toggleDescription('project4')}
            className="px-4 py-2 bg-primary text-white rounded-md mb-3 mx-2"
          >
            Description
          </button>
          {showDescription.project4 && (
            <p className="font-extralight leading-relaxed tracking-[2px] px-6 text-white">
              Deskripsi proyek ke-4
            </p>
          )}
          <div className="flex gap-x-2 px-2">
            <div className="relative group py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out px-3">
              <img src="./1667px-Figma-logo.svg.png" alt="Figma" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Figma</span>
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
              Lihat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
