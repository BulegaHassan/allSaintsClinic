import { useState } from "react";
import { Link } from "react-router-dom";
import { medImages } from "../constants";
import ImageSwap from "./ImageSwap";
import consultation from '../assets/consultation.jpg'
const LandingToServices = () => {
  const [bigMedImg, setBigMedImg] = useState(consultation);

  return (
    <section className='flex items-center bg-blue-50 p-10'>
      <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
        <div className='flex flex-wrap '>
          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='pl-4 mb-6 border-l-4 border-blue-500 '>
              <span className='text-sm text-gray-600 uppercase dark:text-gray-400'>
                What we offer ?
              </span>
              <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300'>
                Our Services
              </h1>
            </div>
            <p className='mb-6 text-base leading-7 text-gray-500 dark:text-gray-400'>
              Welcome to All Saints Medical Center, where compassionate care
              meets cutting-edge medicine. With a legacy of excellence, our
              dedicated team of healthcare professionals strives to provide
              comprehensive and personalized medical services. From pediatrics
              to obstetrics, consultations to advanced diagnostics, we are
              committed to fostering a healing environment. Our mission is to
              ensure every patient receives exceptional care, guided by
              integrity.
            </p>
            <Link
              to='/services'
              className='px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600'
            >
              See Our Services{" "}
            </Link>
          </div>
          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='relative  justify-center items-center xl:min-h-screen max-xl:py-40 '>
              <img
                src={bigMedImg}
                alt='medImg colletion'                      
                className='object-contain mb-6 w-full relative z-10 rounded-lg'
              />

              <div className='flex sm:gap-6  absolute  max-sm:px-6'>
                {medImages.map((image, index) => (
                  <div key={index}>
                    <ImageSwap
                      index={index}
                      imgURL={image}
                      changeBigMedImage={(medImg) => setBigMedImg(medImg)}
                      bigMedImg={bigMedImg}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingToServices;
