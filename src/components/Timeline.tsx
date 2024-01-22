import React from "react";
const data = [
  {
    id: 1,
    date: "January 2005",
    title: "Clinic Started",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 2,
    date: "February 2010",
    title: "Initiation of X-ray Machine",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 3,
    date: "March 2015",
    title: "Officiated new Labour ward",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 4,
    date: "April 2019",
    title: "Moved to new Home",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
  {
    id: 5,
    date: "June 2022",
    title: "Partnered with Insurace Providers",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitmamet Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorm sit amet",
  },
];

const Timeline = () => {
  return (
    <section className='items-center py-6  '>
      <div className='justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center '>
            <div className='relative flex flex-col items-center'>
              <h1 className='text-6xl font-bold leading-tight dark:text-gray-300'>
                {" "}
                Timeline
              </h1>
              <div className='flex w-24 mt-1 mb-10 overflow-hidden rounded'>
                <div className='flex-1 h-2 bg-blue-200'></div>
                <div className='flex-1 h-2 bg-blue-400'></div>
                <div className='flex-1 h-2 bg-blue-600'></div>
              </div>
            </div>
            <p className='mb-16 text-base text-center text-gray-500'>
              One step at a time, from baby steps to giant leaps. Our company
              has moved gracefully through various steps to reach this. The sky
              is not hte limit but a new beginning we adore.
            </p>
          </div>
        </div>
        <div className='w-full mx-auto lg:max-w-3xl'>
          {data.map((item) => {
            const { id, date,title, details } = item;
            return (
              <div key={id} className='relative flex justify-between'>
                <div className='flex flex-col items-center w-10 mr-4 md:w-24'>
                  <div>
                    <div className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full '>
                      <div className='w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400'></div>
                    </div>
                  </div>
                  <div className='w-px h-full bg-blue-300 '></div>
                </div>
                <div>
                  <h2 className='inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100'>
                    {date}
                  </h2>
                  <div className='relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl dark:bg-gray-900'>
                    <div className='relative  p-6'>
                      <p className='mb-2 text-xl font-bold text-gray-600 dark:text-gray-400'>
                        {title}
                      </p>
                      <p className='text-gray-700 dark:text-gray-500'>
                        {details}
                      </p>
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
export default Timeline;
