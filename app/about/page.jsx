import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>

   <Header title='About Us' description='Hawkes is a trusted legal partner dedicated to helping clients navigate complex legal matters with clarity and confidence. We deliver practical, results-driven solutions tailored to your unique needs.'/>
    <div className='flex max-lg:flex-col items-center px-16 justify-center my-2'>
        <span className='flex flex-col max-lg:px-14 min-w-[400px] lg:border-r gap-y-3 lg:border-black pe-12'>
            <h3 className='capitalize lg:text-4xl text-2xl my-4 font-bold'>About hawkes Legal</h3>
            <p className='leading-8 text-xs tracking-wide max-lg:max-w-lg'>Hawkes Legal is a bespoke Nigerian law firm offering legal and business advisory services to a global clientele.  <br/>
The firm was founded with a vision of creating a value driven practice with global standards epitomizing efficiency and professionalism. <br/>Our clients entrust us with important legal decisions impacting on their business whilst we endeavor to be uptodate on the Law as it impacts our clients.    <br/>
Our team is versatile, resourceful and always willing to attend to every detail of our clients’ concerns.</p>
        </span>
        <Image src='/justice.svg' width={12} height={12} className='object-contain max-lg:hidden h-92 w-full' />
    </div>
    </>
  )
}

export default AboutUs