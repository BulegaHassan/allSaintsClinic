import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const Reviews = () => {
  return (
    <div>
      <section className='flex items-center justify-center bg-blue-50 '>
        <div className='px-4 py-20 mx-auto max-w-7xl'>
          <div className='max-w-xl mx-auto'>
            <h1 className='mb-4 text-3xl font-bold text-center dark:text-white'>
              Customer Reviews{" "}
            </h1>
            <p className='mb-16 text-base text-center text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex
              cupiditate?
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 '>
              <ul className='flex items-center justify-center mb-4 mt-12'>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
              </ul>
              <p className='mb-4 text-base text-gray-500 dark:text-gray-400'>
                As a senior citizen, I am grateful for the warm and attentive
                care I received at the clinic. The medical team`s expertise and
                genuine concern made my visit comforting, ensuring my health
                needs were met with the utmost professionalism.
              </p>
              <div className='inline-block '>
                <h2 className='mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400'>
                  ~ David Kagimu
                </h2>
              </div>
            </div>
            <div className='w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 '>
              <ul className='flex items-center justify-center mb-4 mt-12'>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStarHalfStroke size={20} className='text-blue-500' />
                </li>
              </ul>
              <p className='mb-4 text-base text-gray-500 dark:text-gray-400'>
                Exceptional service for women`s health! The clinic provided me
                with compassionate care during my pregnancy journey. The staff`s
                dedication and the modern facilities made my experience truly
                outstanding. Highly recommended!
              </p>
              <div className='inline-block '>
                <h2 className='mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400'>
                  ~ Aisha Kyomuhendo
                </h2>
              </div>
            </div>
            <div className='w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 '>
              <ul className='flex items-center justify-center mb-4 mt-12'>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
                <li>
                  <FaStar size={20} className='text-blue-500' />
                </li>
              </ul>
              <p className='mb-4 text-base text-gray-500 dark:text-gray-400'>
                I recently took my son to this clinic, and I am thoroughly
                impressed. The pediatric care was top-notch, and the staff went
                above and beyond to make him feel comfortable. Grateful for
                their expertise and kindness.
              </p>
              <div className='inline-block '>
                <h2 className='mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400'>
                  ~ Alex Okullo
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Reviews;
