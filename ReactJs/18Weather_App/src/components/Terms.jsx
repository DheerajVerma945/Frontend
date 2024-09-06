import React from 'react';
import { Link } from 'react-router-dom';

function TermsPage() {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-800'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100'>Weather Terms</h1>
            <p className='mb-8 text-xl text-gray-700 dark:text-gray-300'>
                Here are some common weather terms and their meanings:
            </p>
            <ul className='list-disc pl-8 text-lg text-gray-800 dark:text-gray-200 max-w-4xl'>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Temperature:</strong> 
                    The measure of heat or cold in the atmosphere. It's usually expressed in Celsius or Fahrenheit. The current temperature measurement provides insights into the heat levels in the air.
                </li>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Wind Speed:</strong> 
                    The rate at which air is moving. It's commonly measured in meters per second (m/s) or miles per hour (mph). Wind speed affects how cool or warm the air feels.
                </li>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Humidity:</strong> 
                    The amount of moisture in the air, expressed as a percentage. Higher humidity can make the air feel warmer, while lower humidity can make it feel cooler.
                </li>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Pressure:</strong> 
                    The force exerted by the weight of the air above a given point. It's measured in hPa or inches of mercury (inHg) and can influence weather patterns, with lower pressure generally associated with stormy conditions.
                </li>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Visibility:</strong> 
                    The distance one can see clearly, which can be reduced by factors like fog or heavy precipitation. Higher visibility means clearer conditions, while lower visibility can signal poor weather.
                </li>
                <li className='mb-4'>
                    <strong className='text-lg font-semibold'>Cloud Cover:</strong> 
                    The fraction of the sky covered by clouds, usually expressed as a percentage. It affects how much sunlight reaches the ground and can indicate various weather conditions.
                </li>
            </ul>
            <div className='mt-8'>
                <Link to="/" className='bg-blue-600 hover:bg-blue-900 dark:bg-blue-500 dark:hover:bg-blue-600 p-4 rounded-md text-white font-semibold shadow-md transition duration-300'>
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
}

export default TermsPage;
