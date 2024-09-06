import React from 'react'

const currYear = new Date().getFullYear();
function Footer() {
  return (
    <div className='flex justify-center align-bottom'>
      <p >Copyright {currYear}</p>
    </div>
  )
}

export default Footer
