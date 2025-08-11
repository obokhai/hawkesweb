import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#121E2C] text-white px-16 pb-12'>
      <div className='lg:flex max-lg:flex-col justify-between items-center border-b border-gray-600 pb-8'>
        <span className='flex flex-col justify-center gap-y-4'>
          <Image src='/logo.svg' width={60} height={60} className='w-44 h-32 lg:-ms-12 max-lg:mx-auto' />
            <div className='flex max-lg:flex-wrap max-lg:leading-12 items-center gap-x-9 text-xs'>
              <Link href='/'>Home</Link>
            <Link href='/about'>About Us</Link>
            <Link href='/team'>Team</Link>
            <Link href='/team'>Blog</Link>
            <Link href='/contact'>Contact</Link>
            </div>
        </span>
        <span className='space-y-4 w-60 flex flex-col justify-center mt-12'>
          <p className='text-xs leading-6'>Hawkes suite, 23A Marina, Mamman Kontagora House, Lagos, Nigeria</p>
          <p className='text-xs flex gap-x-2 items-center'><Image src='/mail.png' width={20} height={20}/>info@hawkeslegal.com</p>
          <p className='text-xs flex gap-x-2 items-center'><Image src='/phone.png' width={20} height={20}/> (+234) 08125540672, 020 1 3427086</p>
        </span>
      </div>
      <div className='flex justify-between items-center text-xs text-gray-400 mt-8'>
        <span className='space-x-4'><Link href='/'>Terms & Conditions</Link> <span className='border-l h-full'></span> <Link href='/'>Privacy Policy</Link></span>
        <span>Copyright 2025 Hawkes Legal</span>
      </div>
    </div>
  )
}

export default Footer