import React from 'react';
import about4 from '../assets/about4.jpeg';

const About = () => {
    return (
        <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
            <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6x1 mx-auto">


                <div>
                    <div className="w-[330px] h-full">
                        <img
                            src={about4}
                            alt=""
                            className="object-cover rounded-x1 h-[300px] filter grayscale
                                brightness-50"
                        />
                    </div>
                </div>


                <div>
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <h3 className="text-4xl font-semibold mb-5">About<span className="primary-color"> Me</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                            I am a student at SMKN 1 Ciomas majoring in Software Development with a great interest in Programming. I have relevant technical 
                            skills and project experience and would like to develop further through practical field work.
                            </p>
                        </div>
                    </div>

                    <div className="flex mt-10 items-center gap-7">

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
