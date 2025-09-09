import Image from "next/image";

export default function AwardSection({
  imageSrc,
  imageAlt,
  imagePosition = "left", // "left" or "right"
  title ,
  description
}) {
  const isLeft = imagePosition === "left";
  return (
    <div className="flex max-lg:flex-col max-lg:p-2 items-center lg:gap-x-12 lg:px-16 bg-[#f7f9fc] lg:p-10 rounded-lg">
      {isLeft && (
        <div className="flex-shrink-0 ">
          {/* <div className="bg-[#22314a] w-40 h-40 max-lg:mb-6 flex items-start lg:items-center lg:justify-center lg:pe-12"> */}
            <Image src={imageSrc} alt={imageAlt} width={550} height={550} className="w-[180px] h-full" />
          {/* </div> */}
        </div>
      )}
      <div className={`mx-10 lg:pl-10 h-60 flex flex-col max-lg:mt-2 max-lg:text-center justify-center lg:px-12 flex-1 ${isLeft ? "lg:border-l lg:border-black" : "lg:order-first lg:border-r lg:border-black"}`}>
        <h2 className="lg:text-3xl text-xl font-bold mb-4 text-[#22314a]">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {!isLeft && (
        <div className="flex-shrink-0 pe-12">
          {/* <div className="bg-[#22314a] w-40 h-40 flex items-center justify-center rounded"> */}
            <Image src={imageSrc} alt={imageAlt} width={350} height={350} className="w-[180px] h-full" />
          {/* </div> */}
        </div>
      )}
    </div>
  );
}