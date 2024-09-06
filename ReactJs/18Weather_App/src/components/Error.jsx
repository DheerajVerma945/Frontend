import React from 'react';
import { useRouteError, useNavigate, NavLink } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();
    const handleError = () => {
        navigate(-1);
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen p-6 bg-gray-100'>
            <figure className='mb-8'>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxgan4UFsste0Vsfg_UWxMhh7szx-H5rROg&s" 
                    alt="Error 404 Page not found" 
                    className='h-70 w-96 object-cover'
                />
            </figure>
            <div className="text-center mb-6">
                <p className='text-lg text-gray-700'>
                    The page you are looking for could not be found.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
                <button 
                    onClick={handleError} 
                    className="bg-blue-500 p-3 rounded-md text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 text-center"
                >
                    Back to Previous Page
                </button>
                <NavLink 
                    to="/" 
                    className="bg-blue-500 p-3 rounded-md text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 text-center"
                >
                    Back to Home Page
                </NavLink>
            </div>
        </div>
    );
}

export default ErrorPage;
