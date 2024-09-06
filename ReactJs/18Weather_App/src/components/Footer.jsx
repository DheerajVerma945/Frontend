import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-200 p-8 flex flex-col items-center'>
      <div className='w-full max-w-screen-lg flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
          <a 
            href="mailto:vermadheeraj945@gmail.com" 
            className='flex items-center justify-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-lg font-semibold'>📧</span>
            <span className='text-md font-medium'>Contact via Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/vermadheeraj945" 
            className='flex items-center justify-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-lg font-semibold'>🔗</span>
            <span className='text-md font-medium'>Connect on LinkedIn</span>
          </a>
        </div>
        <div className='text-center mt-6 md:mt-0'>
          <p className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            Data provided by <a href="https://openweathermap.org/api" className='text-blue-400 hover:text-blue-300' target='_blank' rel='noopener noreferrer'>OpenWeatherMap API</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
