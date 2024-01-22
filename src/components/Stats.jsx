import CountUp  from "react-countup";
import { FaUsers, FaUserDoctor, FaBedPulse, FaXRay } from "react-icons/fa6";
import { GiMedicalDrip, GiMicroscope } from "react-icons/gi";
const Stats = () => {
  return (
    <section className='items-center py-6  '>
      <div className='justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center '>
            <div className='relative flex flex-col items-center'>
              <h1 className='text-6xl  leading-tight  '>
                {" "}
                The numbers say it all
              </h1>
              <div className='flex w-96 mt-1 overflow-hidden rounded'>
                <div className='flex-1 h-2 bg-blue-200'></div>
                <div className='flex-1 h-2 bg-blue-400'></div>
                <div className='flex-1 h-2 bg-blue-600'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-gray-700 body-font'>
        <div className='container px-5  mx-auto'>
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <div className='flex justify-center text-blue-500'>
                  <FaUsers size={56} />
                </div>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  <CountUp duration={2.75} end={1000} suffix='+' delay={2} />
                </h2>
                <p className='leading-relaxed'>Patients Healed</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <div className='flex justify-center text-blue-500'>
                  <FaUserDoctor size={56} />
                  <FaUserDoctor size={56} />
                </div>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  <CountUp duration={2.75} end={15} delay={2} />
                </h2>
                <p className='leading-relaxed'>Medical Staff</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <div className='flex justify-center text-blue-500'>
                  <FaBedPulse size={56} />
                  <GiMedicalDrip size={56} />
                </div>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  <CountUp duration={2.75} end={25} delay={2} />
                </h2>
                <p className='leading-relaxed'>Beds</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <div className='flex justify-center text-blue-500'>
                  <FaXRay size={56} />
                  <GiMicroscope size={56} />
                </div>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  <CountUp duration={2.75} end={25} delay={2} suffix='+' />
                </h2>
                <p className='leading-relaxed'>Medical Equipments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
