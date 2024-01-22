import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404)
    return (
      <main className='grid min-h-[100vh] place-items-center px-8 '>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-blue-500'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-blue-300'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7 font-bold '>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 '>
            <Link
              to='/'
              className='px-4 py-3 text-blue-700 transition-all transform border rounded-2xl border-blue-500 hover:bg-blue-600  dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500  hover:text-gray-100'
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );

  return (
    <main className='grid min-h-[100vh] place-items-center px-8 '>
      <h4 className='text-center font-bold text-4xl'>there was an error... </h4>
    </main>
  );
};
export default Error;
