import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaUsers, FaUserDoctor, FaBedPulse, FaXRay } from "react-icons/fa6";
import { GiMedicalDrip, GiMicroscope } from "react-icons/gi";
const LandingHero = () => {
  return (
    <section className='flex items-center bg-blue-50 p-10'>
      <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
        <div className='flex flex-wrap '>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
            <div className='flex flex-wrap'>
              <div className='p-4 md:w-1/2 sm:w-1/2 w-full'>
                <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                  <div className='flex justify-center text-blue-500'>
                    <FaUsers size={56} />
                  </div>
                  <h2 className='title-font flex justify-center font-medium text-3xl text-gray-900'>
                    <CountUp duration={2.75} end={1000} suffix='+' delay={2} />
                  </h2>
                  <p className='leading-relaxed flex justify-center'>
                    Patients Healed
                  </p>
                </div>
              </div>
              <div className='p-4 md:w-1/2 sm:w-1/2 w-full'>
                <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                  <div className='flex justify-center text-blue-500'>
                    <FaUserDoctor size={56} />
                    <FaUserDoctor size={56} />
                  </div>
                  <h2 className='title-font font-medium flex justify-center text-3xl text-gray-900'>
                    <CountUp duration={2.75} end={15} delay={2} />
                  </h2>
                  <p className='leading-relaxed flex justify-center'>
                    Medical Staff
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='p-4 md:w-1/2 sm:w-1/2 w-full'>
                <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                  <div className='flex justify-center text-blue-500'>
                    <FaBedPulse size={56} />
                    <GiMedicalDrip size={56} />
                  </div>
                  <h2 className='title-font flex justify-center font-medium text-3xl text-gray-900'>
                    <CountUp duration={2.75} end={25} delay={2} />
                  </h2>
                  <p className='leading-relaxed flex justify-center'>Beds</p>
                </div>
              </div>
              <div className='p-4 md:w-1/2 sm:w-1/2 w-full'>
                <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                  <div className='flex justify-center text-blue-500'>
                    <FaXRay size={56} />
                    <GiMicroscope size={56} />
                  </div>
                  <h2 className='title-font flex justify-center font-medium text-3xl text-gray-900'>
                    <CountUp duration={2.75} end={25} delay={2} suffix='+' />
                  </h2>
                  <p className='leading-relaxed flex justify-center'>
                    Medical Equipments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
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
              ensure every patient receives exceptional care, guided by integrity.
            </p>
            <Link
              to='/about'
              className='px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600'
            >
              More About Us{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingHero;
