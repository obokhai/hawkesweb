import Image from 'next/image'
import React from 'react'

const Header = ({  title,
  description,
  showBorder = true,
  borderColor = "border-gray-300", // allow custom border color
  borderHeight = "h-24",
}) => {
  return (
    <div className="relative flex max-lg:flex-col items-center min-h-80 bg-gradient-to-r from-[#0D1825] justify-center to-[#1F3044] px-16 py-8 overflow-hidden">
      <p className="lg:text-[9px] max-lg:hidden gap-x-8 text-white font-semibold absolute top-4 left-16 tracking-widest "> Precise. Swift.   Efficient.</p>
       <Image
          src='/header-img.png'
          alt="Section background"
          fill
          className="object-contain object-right opacity-60 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <span className='flex justify-center items-center gap-x-4'>
            <h4 className='text-white text-4xl font-serif font-semibold'>{title}</h4>
              {showBorder && (
          <div className={`mx-8 ${borderHeight} border-l max-lg:hidden ${borderColor}`}></div>
        )}
           <div className="flex-1 max-lg:hidden">
          <p className="text-white text-[10px] w-[400px] tracking-wider leading-6">{description}</p>
        </div>
        </span>
    </div>
  )
}

export default Header