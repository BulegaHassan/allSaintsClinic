import Collapse from "rc-collapse";
import { Panel } from "rc-collapse";
import 'rc-collapse/assets/index.css'
import faqs from "../assets/faqs.png";
const Faqs = () => {
  return (
    <section className='flex items-center'>
      <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
        <div className='px-4 mb-10 md:text-center md:mb-20'>
          <p className='mb-2 text-3xl font-semibold text-blue-500 dark:text-gray-400'>
            Frequently Asked Questions
          </p>
          <h2 className='pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300'>
            Youve got served
          </h2>
          <div className='flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
            <div className='flex-1 h-2 bg-blue-200'></div>
            <div className='flex-1 h-2 bg-blue-400'></div>
            <div className='flex-1 h-2 bg-blue-300'></div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
            <img
              src={faqs}
              alt='lady searching something'
              className='relative object-cover w-full h-96 rounded-2xl'
            />
          </div>
          <div className='w-full px-4 my-10 lg:w-1/2 lg:mb-0 '>
            <Collapse accordion={true}>
              <Panel
                header='hello'
                headerClass='my-header-class'
                className='bg-blue-200'
              >
                this is panel content
              </Panel>
              <Panel header='title2'>this is panel content2 or other</Panel>
              <Panel
                header='hello'
                headerClass='my-header-class'
                className='bg-blue-200'
              >
                this is panel content
              </Panel>
              <Panel header='title2'>this is panel content2 or other</Panel>
              <Panel
                header='hello'
                headerClass='my-header-class'
                className='bg-blue-200'
              >
                this is panel content
              </Panel>
              <Panel header='title2'>this is panel content2 or other</Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faqs;
