import {
  FaFacebook,
  FaX,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <section className='flex flex-col  lg:justify-end '>
      <div className='w-full bg-blue-200 '>
        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0'>
          
          <div className='flex flex-wrap  py-10 -mx-3'>
            <div className='w-full  px-4 md:w-1/2 lg:w-4/12 mb-11 lg:mb-0'>
              <h2 className='mb-4 text-xl uppercase text-gray-600 '>
                about all saints medical center{" "}
              </h2>
              <div className=' mb-4 border-b-2 border-blue-600 dark:border-gray-600'></div>
              <p className='text-base font-normal leading-6  dark:text-gray-400'>
                All Saints Medical Center stands as a beacon of compassionate
                healthcare. With a skilled team and cutting-edge facilities,
                they prioritize patient well-being, providing comprehensive,
                personalized medical services with unwavering commitment and
                expertise
              </p>
            </div>
            <div className='w-full px-4 md:w-1/4 lg:w-2/12  mb-11 lg:mb-0'>
              <h2 className='mb-4 text-xl uppercase text-gray-600 '>Pages </h2>
              <ul>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>

                  <a href='#' className='inline-block text-base font-normal  '>
                    Home
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>
                  <a href='#' className='inline-block text-base font-normal  '>
                    About Us
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>
                  <a href='#' className='inline-block text-base font-normal  '>
                    Services
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>
                  <a href='#' className='inline-block text-base font-normal  '>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0'>
              <h2 className='mb-4 text-xl uppercase text-gray-600 '>
                Useful Links{" "}
              </h2>
              <ul>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>

                  <a href='#' className='inline-block text-base font-normal  '>
                    Terms of use
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>
                  <a href='#' className='inline-block text-base font-normal  '>
                    Appointment
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <span className='mr-2 text-blue-500   '>
                    <BsFillArrowRightCircleFill size={20} />
                  </span>
                  <a href='#' className='inline-block text-base font-normal  '>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full  px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-3/12'>
              <h2 className='mb-4 text-lg uppercase text-gray-600 '>
                Contact Info
              </h2>
              <p className='flex items-center mb-4'>
                <span className='mr-2 text-blue-500   '>
                  <FaLocationDot size={20} />
                </span>
                <span className=' '>Bukejje Stage, Makindye</span>
              </p>
              <p className='flex items-center mb-4 '>
                <span className='mr-2 text-blue-500   '>
                  <FaEnvelope size={20} />
                </span>
                <span className=' '>support@allsaintsmedical.com</span>
              </p>
              <p className='flex items-center mb-4'>
                <span className='mr-2 text-blue-500   '>
                  <FaPhone size={20} />
                </span>
                <span className=' '>+256-778 558 353</span>
              </p>
            </div>
          </div>
        </div>
        <div className='py-5 flex justify-evenly text-gray-600 bg-blue-300  '>
          <p>© Copyright 2024 . All Rights Reserved</p>
          <div className='flex justify-start  '>
            <NavLink
              href='#'
              type='button'
              className='m-1 flex justify-center  items-center leading-normal  uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded-full   hover:border-blue-700 hover:bg-blue-700 w-9 h-9'
            >
              <FaLinkedin className='text-blue-500' />
            </NavLink>
            <NavLink
              href='#'
              type='button'
              className='m-1 flex justify-center  items-center leading-normal  uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded-full   hover:border-blue-700 hover:bg-blue-700 w-9 h-9'
            >
              <FaX className='text-blue-500' />
            </NavLink>
            <NavLink
              href='#'
              type='button'
              className='m-1 flex justify-center  items-center leading-normal  uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded-full   hover:border-blue-700 hover:bg-blue-700 w-9 h-9'
            >
              <FaWhatsapp className='text-blue-500' />
            </NavLink>{" "}
            <NavLink
              href='#'
              type='button'
              className='m-1 flex justify-center  items-center leading-normal  uppercase transition duration-150 ease-in-out border-2 border-blue-400 rounded-full   hover:border-blue-700 hover:bg-blue-700 w-9 h-9'
            >
              <FaFacebook className='text-blue-500' />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
