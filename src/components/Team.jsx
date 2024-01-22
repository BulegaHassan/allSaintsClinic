import { FaFacebook, FaX, FaLinkedin } from "react-icons/fa6";
const data = [
  {
    id: 1,
    name: "Najjingo Becky",
    title: "Doctor",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 2,
    name: "Allen Kasule",
    title: "Doctor",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 3,
    name: "Mary Mbabazi",
    title: "Nurse",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 4,
    name: "Joy Nakakande",
    title: "Lab Technologist",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 5,
    name: "Rahma Acheng",
    title: "Nurse",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 6,
    name: "Aisha Larry",
    title: "Radiographer",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
];
const Team = () => {
  return (
    <section className='flex items-center  bg-blue-100 p-10 '>
      <div className='justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center '>
            <div className='relative flex flex-col items-center'>
              <h1 className='text-6xl font-bold leading-tight dark:text-gray-300'>
                {" "}
                Our Team
              </h1>
              <div className='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                <div className='flex-1 h-2 bg-blue-200'></div>
                <div className='flex-1 h-2 bg-blue-400'></div>
                <div className='flex-1 h-2 bg-blue-600'></div>
              </div>
            </div>
            <p className='mb-16 text-base text-center text-gray-500'>
              Our team comprises skilled software and hardware engineers
              alongside accomplished scholars, creating a synergy of innovation
              and expertise. Together, we seamlessly blend technical prowess
              with academic excellence, driving cutting-edge solutions to
              fruition.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {data.map((person) => {
            const { id, name, title, details } = person;
            return (
              <div key={id} className='relative my-24 lg:mb-0'>
                <div className='overflow-hidden bg-white rounded shadow-md dark:bg-gray-900 '>
                  <div className='absolute flex justify-center w-full -mt-20 '>
                    <div className='w-32 h-32 '>
                      <img
                        className='object-cover w-full h-full rounded-full '
                        src='https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='p-6 mt-14'>
                    <h2 className='mb-1 text-xl font-bold text-center dark:text-gray-300'>
                      {name}
                    </h2>
                    <p className='mb-4 text-base font-medium text-center text-blue-500 dark:text-gray-500'>
                      {title}
                    </p>
                    <p className='mb-4 text-base text-center text-gray-500 dark:text-gray-500'>
                      {details}
                    </p>
                    <div className='flex items-center justify-center '>
                      <div className='flex justify-between gap-2 text-blue-500 '>
                        <FaLinkedin
                          className='link hover:text-blue-600 '
                          size={20}
                        />
                        <FaX
                          className='link hover:text-blue-600 '
                          size={16}
                        />

                        <FaFacebook
                          className='link hover:text-blue-600 '
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;
