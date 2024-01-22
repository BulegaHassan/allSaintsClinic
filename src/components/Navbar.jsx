import { useState } from "react" 
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='bg-blue-300'>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 mb-3 align-element'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link to='/'
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
              href='#pablo'
            >
              all saints medical center
            </Link>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars size={25} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <span className='ml-2'>About</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <span className='ml-2'>Services</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <span className='ml-2'>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar