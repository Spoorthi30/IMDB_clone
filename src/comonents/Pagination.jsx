import React from 'react'

const Pagination = ({handlePrev , pageNo , handleNext}) => {
  return (
    <div className='bg-gray-400 p-3 mt-4 flex justify-center px-8'>
      <div onClick={handlePrev} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>
      <div className='text-lg'>{pageNo}</div>
      <div onClick={handleNext} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
