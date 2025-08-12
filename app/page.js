import Image from "next/image";
import AwardSection from "./components/AwardSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/Carousel";
import StatsBar from "./components/StatsBar";
import Link from "next/link";
export default function Home() {
  return (
    <>
  <div className="min-h-60 mb-12 relative bg-gradient-to-r py-12 from-[#0D1825] to-[#1F3044] flex px-16">
    <p className="lg:text-[9px] max-lg:hidden gap-x-8 text-white font-semibold absolute top-0 tracking-widest "> Precise. Swift.   Efficient.</p>
      <div className=" flex justify-between items-center lg:gap-x-24">
        <div className="mt-8 space-y-2 lg:w-1/2 max-lg:text-center">
        <h4 className="uppercase text-xs tracking-widest font-bold leading-8 text-white">welcome to hawkes legal</h4>
        <h1 className="lg:text-5xl text-2xl text-white capitalize leading-14">We provide the best possible <span className="text-[#CB935D] italic font-bold" >Legal Services</span></h1>
        <p className="text-white text-xs font-light leading-7 max-w-sm border-gray-200 pb-5 mb-5">
         We provide clear, strategic legal solutions to help you navigate challenges, protect your interests, and achieve lasting results.
        </p>
        <button className="bg-[#CB935D] text-white px-6 py-3 text-xs w-60 h-12 hover:bg-[#b27a4c] transition duration-300 capitalize">
          Explore
        </button> 

        </div>
        <span className="w-1/2 max-lg:hidden bg-[url(/hero.png)] bg-cover min-h-[400px] bg-no-repeat flex my-auto">
        </span>
      </div>
      {/* <span className="absolute right-0 top-0 w-96 px-6 text-white text-[10px]">Legal issues can feel overwhelming but with the right team by your side, they don’t have to be. At Hawkes Legal, we combine deep legal expertise with a personal, client-first approach to help you navigate life’s challenges with clarity and confidence. We’re here to guide you, advocate for you, and deliver results that matter.</span> */}
    </div>

    <div className="lg:px-16 px-4 py-10 space-y-10 bg-gray-100">
      <AwardSection
        imageSrc="/award.png"
        imageAlt="Award Image"
        imagePosition="left"
        title="Award Winning Firm"
        description="At Hawkes Legal, we take pride in our team’s dedication to delivering exceptional legal solutions. Our award-winning approach has earned us a reputation for excellence, and we continue to strive for innovation and success in every case we take on. Our awards and accolades are a testament to our commitment to our clients and our passion for achieving the best possible outcomes."
      />
      <AwardSection
        imageSrc="/privacy.png"
        imageAlt="Award Image"
        imagePosition="left"
        title="Your Privacy, Our Priority"
        description="At Hawkes Legal, we understand the importance of discretion and confidentiality. Our private clients receive personalized attention and tailored legal solutions, ensuring their sensitive matters are handled with utmost care and professionalism. We prioritize your privacy and work diligently to protect your interests, providing a safe and trusted environment for all your legal needs."
      />
      <AwardSection
        imageSrc="/legal.png"
        imageAlt="Award Image"
        imagePosition="left"
        title="Legal Protection"
        description="At Hawkes Legal, we believe that legal protection is a fundamental right. Our experienced team provides robust and proactive legal solutions to safeguard your personal and professional interests. From contract negotiations to dispute resolution, we offer comprehensive legal protection to give you peace of mind and confidence in your endeavors. "
      />
    </div>
    <div className="px-16 flex flex-col gap-y-6 pt-36 relative" id="practice-areas">
      <Image src='/practice.png' width={440} height={240}  className="absolute lg:size-60 max-lg:size-52 -top-8 object-contain right-0"/>
      <span className="space-y-2 max-lg:text-center">
      <h4 className="lg:text-3xl max-lg:text-xl  max-lg:font-bold">Our Practice Areas</h4>
      <p className="lg:text-xs max-lg:text-lg">Explore our core areas of legal expertise</p>
      </span>
      <Carousel />  
    </div>
  
  <div className="px-16 py-10 space-y-12">
    {/* <StatsBar /> */}
  </div>
    <div className="bg-[#1E2E45] text-center flex flex-col py-12 items-center justify-center text-white ">
      <span className="max-w-xl space-y-7 max-lg:px-4">
        <h4 className="lg:text-5xl max-lg:text-3xl font-semibold capitalize">Schedule A Consultation</h4>
        <p className="text-sm font-light leading-8">Let’s talk about your legal needs. Whether you're facing a dispute, signing an agreement, or protecting your assets, we’re here to help.</p>
        <Link href='/contact' className="bg-[#CB935D] text-white px-6 py-3 text-xs w-60 h-12 hover:bg-[#b27a4c] transition duration-300 uppercase">
            Contact Us
          </Link> 

      </span>
    </div>
    </>
  );
}
