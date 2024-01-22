import doctor1 from "../assets/videos/doctor1.mp4";
// import { FaStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
const services = [
  { name: " General Medicine" },
  { name: "Paediatrics" },
  { name: "Laboratory Services" },
  { name: "Gynaecology" },
  { name: "ENT" },
  { name: "X-ray" },
  { name: "Ambulance" },
];
const ServicesHero = () => {
  return (
    <section className='flex items-center py-4  '>
      <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6'>
        <div className='flex flex-wrap '>
          <div className='w-full px-4 mb-10 xl:w-1/2 lg:mb-8'>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 '>
                <video
                  src={doctor1}
                  loop
                  autoPlay
                  controls
                  className='object-cover w-full mb-6 rounded-lg h-96'
                ></video>
                
              </div>              
            </div>
          </div>
          <div className='w-full px-4 mb-10 xl:w-1/2 lg:mb-8'>
            <span className='text-xl font-semibold text-blue-500  capitalize'>
              What we offer
            </span>
            <h2 className='mt-2 mb-4 text-2xl font-bold text-gray-700 '>
              We  provide quality medical services
            </h2>
            <p className='mb-4 text-base leading-7 text-gray-500 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul className='mb-10'>
              <li className='flex items-center mb-4 text-base text-gray-600'>
                <span className='mr-3 text-blue-500 dark:text-blue-400  '>
                  <FaStar size={20} />
                </span>
                Lorem ipsum, or lipsum known, is dummy text used
              </li>
              <li className='flex items-center mb-4 text-base text-gray-600 '>
                <span className='mr-3 text-blue-500 dark:text-blue-400  '>
                  <FaStar size={20} />
                </span>
                The purpose of lorem create a natural looking block of text
              </li>
              <li className='flex items-center mb-4 text-base text-gray-600 '>
                <span className='mr-3 text-blue-500 dark:text-blue-400  '>
                  <FaStar size={20} />
                </span>
                The passage experienced in popularity during the 1960s
              </li>
              <li className='flex items-center mb-4 text-base text-gray-600 '>
                <span className='mr-3 text-blue-500 dark:text-blue-400  '>
                  <FaStar size={20} />
                </span>
                Desktop publishers bundled the text with their software.
              </li>
            </ul>
          </div>
          <div className='w-full flex justify-evenly flex-wrap '>
            {services.map((service) => (
              <button
                key={service.name}
                className='px-4 py-3 my-3  active text-blue-700 transition-all transform border rounded-2xl border-blue-500 hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100'
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesHero;
