import { GiNoseSide } from "react-icons/gi";
import {
  FaCapsules,
  FaChildren,
  FaMicroscope,
  FaXRay,
  FaUserDoctor,
} from "react-icons/fa6";
import { MdPregnantWoman, MdOutlineElderly } from "react-icons/md";
import { LiaAmbulanceSolid } from "react-icons/lia";

const services = [
  {
    id: 1,
    icon: <FaCapsules size={30} color='white' />,
    name: "General Medicine",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 2,
    icon: <FaChildren size={30} color='white' />,
    name: "Paediatrics",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 3,
    icon: <FaMicroscope size={30} color='white' />,
    name: "Laboratory Services",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 4,
    icon: <MdPregnantWoman size={35} color='white' />,
    name: "Gynaecology",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 5,
    icon: <GiNoseSide size={30} color='white' />,
    name: "ENT",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 6,
    icon: <FaXRay size={30} color='white' />,
    name: "X-ray",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 7,
    icon: <LiaAmbulanceSolid size={30} color='white' />,
    name: "Ambulance",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 8,
    icon: <MdOutlineElderly size={30} color='white' />,
    name: "Elderly Care",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
  {
    id: 9,
    icon: <FaUserDoctor size={30} color='white' />,
    name: "Consultation",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem  cupiditate similique, iure minus sed fugit obcaecati minima quam  reiciendis dicta!",
  },
];
const ServicesCards = () => {
  return (
    <section className='flex items-center justify-center  '>
      <div className='px-4 py-20 mx-auto max-w-7xl'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center '>
            <div className='relative flex flex-col items-center'>
              <h1 className='text-6xl font-bold leading-tight '>
                {" "}
                Our Services
              </h1>
              <div className='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                <div className='flex-1 h-2 bg-blue-200'></div>
                <div className='flex-1 h-2 bg-blue-400'></div>
                <div className='flex-1 h-2 bg-blue-600'></div>
              </div>
            </div>            
          </div>
        </div>
        <p className='mb-16 text-base text-center text-2xl text-gray-500 '>
          Our clinic delivers exceptional healthcare services, specializing in
          pediatrics, obstetrics and gynecology. Our comprehensive offerings
          include expert consultations, cutting-edge diagnostics in our
          state-of-the-art lab, and a range of other specialized medical
          services, ensuring unparalleled care for every patient.
        </p>
        <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((feat) => {
            const { id, name, icon, details } = feat;
            return (
              <div
                key={id}
                className='w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg'
              >
                <div className='inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full'>
                  {icon}
                </div>
                <h3 className='mb-4 text-2xl font-semibold dark:text-white'>
                  {" "}
                  {name}
                </h3>
                <p className='text-base text-gray-500 dark:text-gray-400'>
                  {details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesCards;
