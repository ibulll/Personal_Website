import React, { useEffect, useState } from 'react';
import Foto from '../assets/Foto.jpeg';
import { AiFillMail, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div className="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center" id="home">
                <div className={`flex-col my-auto mx-auto relative z-20 transition-all duration-1000 ease-in-out ${animate ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi! I am Ilham</p>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                        <TypeAnimation
                            sequence={[
                                "Junior",
                                1000,
                                "Web Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="primary-color"
                        />
                    </h1>
                    <div className="flex justify-center items-center">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">I am a student at SMKN 1 Ciomas</p>
                    </div>
                    <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
                        <a href="mailto:ilhamardanmas@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillMail /></a>
                        <a href="https://github.com/ibulll" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillGithub /></a>
                        <a href="https://www.instagram.com/ilhamardnms/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillInstagram /></a>
                    </div>
                    <div className="relative inline-flex group my-3 z-20">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <a
                            href="/assets/CV.pdf"
                            download
                            title="Download CV"
                            role="button"
                            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 z-20"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className={`my-auto transition-all duration-1000 ease-in-out ${animate ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
                    <img className="w-[300px] sm:w-[450px] mx-auto h-auto rounded-full grayscale hover:grayscale-0 transition duration-300 ease-in-out" src={Foto} alt="Profil" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
