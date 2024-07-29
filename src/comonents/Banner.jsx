import React from 'react'

function Banner() {
  return (
    <div className='h-[70vh] bg-center md:h-[75vh] flex items-end' style={{backgroundImage:`url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c81e0119273285.609a4688873fa.jpg)`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
      <div className='text-white text-xl text-center bg-gray-200 w-[100%]' style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}>Avengure endgame</div>
    </div>
  )
}

export default Banner
