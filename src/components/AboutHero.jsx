import { Link } from "react-router-dom"
import { RiDoubleQuotesL } from "react-icons/ri";
const AboutHero = () => {
  return (
    <section className='flex items-center bg-blue-50  dark:bg-gray-800 '>
      <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
        <div className='flex flex-wrap '>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='relative lg:max-w-md'>
              <img
                src='https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg'
                alt='aboutimage'
                className='relative z-10 object-cover w-full rounded h-96'
              />
              <div className='absolute bottom-0 right-0 z-10 p-4 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 '>
                <p className='text-lg font-semibold md:w-72'>
                  <RiDoubleQuotesL size={30} className='text-blue-300' />
                  Successfully Providing Medical Services for{" "}
                  <span className='text-blue-500'>25</span> years
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0 '>
            <div className='pl-4 mb-6 border-l-4 border-blue-500 '>
              <span className='text-sm text-gray-600 uppercase dark:text-gray-400'>
                Who we are?
              </span>
              <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300'>
                About Us
              </h1>
            </div>
            <p className='mb-6 text-base leading-7 text-gray-500 dark:text-gray-400'>
              Welcome to All Saints Medical Center, where compassionate care
              meets cutting-edge medicine. With a legacy of excellence, our
              dedicated team of healthcare professionals strives to provide
              comprehensive and personalized medical services. From pediatrics
              to obstetrics, consultations to advanced diagnostics, we are
              committed to fostering a healing environment. Our mission is to
              ensure every patient receives exceptional care, guided by our
              values of integrity, empathy, and innovation. Trust us with your
              well-being; your health is our priority.
            </p>
            <Link
              to='/services'
              className='px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600'
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutHero