import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
const Contact = () => {
  return (
    <>
        <Header title="Contact Us" description="Have  a question or need legal support? We're here to help. Reach out to the Hawkes team to schedule a consultation or get more information about our services." />
        <div className='flex max-lg:flex-col-reverse max-lg:items-center justify-center gap-x-14 py-14 '>
            <div className='flex flex-col gap-y-4 lg:items-start lg:ps-44 w-ful lg:w-1/2 max-lg:mt-5'>
                <span className='flex gap-x-2 text-xs items-center'><img src='/mail.png' /> info@hawkeslegal.com</span>
                <span className='flex gap-x-2 text-xs items-center'><img src='/phone.png' /> (+234) 08125540672, 020 1 3427086</span>
            </div>
            <div className='flex flex-col gap-y-3 lg:w-1/2'>
                 <span className='flex items-center gap-x-2 text-xs  leading-7'><img src='/location.png' className='object-contain' />Hawkes suite, 23A Marina, Mamman Kontagora <br/>
House, Lagos, Nigeria.</span>
                <Link href='https://maps.app.goo.gl/9qH6MDRPAZV7etNa8' className=' ps-10 text-xs capitalize text-red-300'> view on google maps</Link>
            </div>
        </div>
        <section className='flex mb-4 flex-col items-center justify-center gap-y-2'>
            <h4 className='capitalize lg:text-4xl text-2xl font-bold'>Leave us a message</h4>
            <p className='text-orange-300 tracking-wide'>We would get back to you</p>
            <form className="w-full lg:max-w-2xl max-w-lg mx-auto mt-6 flex flex-col gap-y-6 ">
          <div className="flex gap-x-8 ">
            <div className="flex-1 flex border-b border-gray-300 flex-col">
              <label className="text-xs text-gray-500 mb-1 ps-2">Full Name</label>
              <input
                type="text"
                className="border-none border-b-2 border-black focus:outline-none px-2 py-2 bg-transparent"
                placeholder=""
              />
            </div>
            <div className="flex-1 border-b border-gray-300 flex flex-col">
              <label className="text-xs text-gray-500 mb-1 ps-2">Email</label>
              <input
                type="email"
                className="border-none border-b border-black focus:outline-none px-2 py-2 bg-transparent"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col border-b border-gray-300">
            <label className="text-xs text-gray-500 mb-1 ps-2">Subject</label>
            <select className="border-none border-b text-xs border-black focus:outline-none px-2 py-2 bg-transparent">
              <option value="">Select subject</option>
              <option value="consultation">Consultation</option>
              <option value="case">Case Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col border-b border-gray-300">
            <label className="text-xs text-gray-500 mb-1 ps-2">Message</label>
            <textarea
              rows={3}
              className="border-none border-b border-black focus:outline-none focus:border-[#CB935D] px-2 py-2 bg-transparent resize-none"
              placeholder=""
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="border border-[#22314a] px-16 py-4 text-[#22314a] font-semibold text-sm uppercase bg-white hover:bg-[#f7f9fc] transition"
            >
              Submit
            </button>
          </div>
        </form>
        </section>
    </>
  )
}

export default Contact