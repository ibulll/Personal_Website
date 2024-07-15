import React from 'react';

const Work = () => {
  return (
    <div className="flex flex-col items-center" id='project'>
      {/* Tambahkan Judul "My Project" */}
      <h2 className="text-4xl font-bold mb-8 text-white">My <span className="primary-color">Projects</span></h2>
      
      <div className="flex flex-wrap w-full px-4 justify-center gap-8" data-aos="fade-up" data-aos-duration="1000">
        {/* Project 1 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/Project2.jpeg" className="sm:h-full" alt="foto-kelas" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-[1.5rem] text-2xl px-2 text-white">Information System PKL</h3>
          <p className="font-extralight leading-relaxed tracking-[2px] px-2 text-white">
            I made this project as a final assignment from my school to create something useful for the school. Finally I thought about creating this information system.
          </p>
          <div className="flex gap-x-2 px-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/React-icon.svg.png" alt="react" />
            </div>
            <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/Laravel.svg.png" alt="react" />
            </div>
            <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 mx-3 bg-primary font-medium text-lg rounded-md hover:bg-secondary bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow">
          <div className="rounded-md overflow-hidden ">
            <img src="/assets/Project1.png" className="h-full" alt="foto-kelas" width="w-full" />
          </div>
          <h3 className="text-white font-bold mb-3 mt-4 text-2xl px-2">My Personal Website</h3>
          <p className="text-white font-extralight leading-relaxed tracking-[2px] px-2">
            Welcome to my personal website! As a student at SMK, this site showcases my journey, projects, and skills. Explore to learn more about my academic achievements, technical skills, and personal interests. This platform serves as a digital portfolio of my growth and experiences throughout my time at SMK.
          </p>
          <div className="flex gap-x-2 px-2 py-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/React-icon.svg.png" alt="react" />
            </div>
            <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://twinkyxipplgthree.pages.dev/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="/assets/Project3.png" className="h-full" alt="Web Store" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-6 text-2xl px-2 text-white">Web Store</h3>
          <p className="font-extralight leading-relaxed tracking-[2px] px-2 text-white">This project was created to display data on the most popular and newest films or movie. Also this project helped me a lot about ReactJS</p>
          <div className="flex gap-x-2 px-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/Vue.js.svg.png" alt="react" />
            </div>
            <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="/assets/tailwind.svg" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md bg-cyan-600 hover:bg-primary">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="./UIKA-3.png" className="h-full" alt="foto-kelas" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-5 text-2xl px-2">University Web Design</h3>
          <p className="font-extralight leading-relaxed tracking-[2px] px-2">My First Commercial Design for one of the universities in the city of Bogor and really helped improve my design skills, because I learned from the project.</p>
          <div className="flex gap-x-2 px-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out px-3">
              <img src="./1667px-Figma-logo.svg.png" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
              Lihat
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="./newss.png" className="xl:h-[31vh] md:h-full" alt="foto-kelas" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-5 text-2xl px-2">List worldwide news</h3>
          <p className="font-extralight leading-relaxed tracking-[2px] px-2">This website is Api&apos;s consumption of a News Api website which provides all the news in the world</p>
          <div className="flex gap-x-2 px-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="./React-icon.svg.png" alt="react" />
            </div>
            <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="./tailwind.svg" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
              Lihat
            </a>
          </div>
        </div>
        
        {/* Project 6 (Duplicate of Project 5?) */}
        <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-md overflow-hidden ">
            <img src="./newss.png" className="xl:h-[31vh] md:h-full" alt="foto-kelas" width="w-full" />
          </div>
          <h3 className="font-bold mb-3 mt-5 text-2xl px-2">List worldwide news</h3>
          <p className="font-extralight leading-relaxed tracking-[2px] px-2">This website is Api&apos;s consumption of a News Api website which provides all the news in the world</p>
          <div className="flex gap-x-2 px-2">
            <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="./React-icon.svg.png" alt="react" />
            </div>
            <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img src="./tailwind.svg" alt="react" />
            </div>
          </div>
          <div className="my-4 mx-3 mb-7">
            <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
              Lihat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
