/* eslint-disable react/no-unescaped-entities */

import { FaArrowRightLong } from "react-icons/fa6"

export const Section5 = () => {
  return (
    <div className="flex mt-[48px] flex-col xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 items-center justify-center">
      <div className="text-[#4D4D4D] text-center text-[36px] font-semibold">
        Caring is the new marketing
      </div>
      <p className="text-[16px] mt-[8px] text-[#717171] text-center max-w-[628px]">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="grid xl:mt-[206px] lg:mt-[206px] md:mt-20 sm:mt-10 mt-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-24 lg:gap-24 md:gap-24 sm:gap-10 gap-10 justify-center items-center">
        <div className="max-w-[317px] min-w-fit h-full bg-[#F5F7FA] items-center justify-center text-center p-[16px] shadow-md">
          <div className="text-[#717171] text-center text-[20px] font-semibold">
            Creating Streamlined Safeguarding Processes with OneRen
          </div>
          <div className="flex mt-[24px] flex-row gap-5 items-center justify-center">
            <div className="text-[#4CAF4F] text-[20px] text-center font-semibold">
              Readmore
            </div>
            <FaArrowRightLong size={24} color="#4CAF4F" />
          </div>
        </div>
        <div className="max-w-[317px] min-w-fit h-full bg-[#F5F7FA] items-center justify-center text-center p-[16px] shadow-md">
          <div className="text-[#717171] text-center text-[20px] font-semibold">
            What are your safeguarding responsibilities and how can you manage
            them?
          </div>
          <div className="flex mt-[24px] flex-row gap-5 items-center justify-center">
            <div className="text-[#4CAF4F] text-center text-[20px] font-semibold">
              Readmore
            </div>
            <FaArrowRightLong size={24} color="#4CAF4F" />
          </div>
        </div>
        <div className="max-w-[317px] min-w-fit h-full bg-[#F5F7FA] items-center justify-center text-center p-[16px] shadow-md">
          <div className="text-[#717171] text-center text-[20px] font-semibold">
            Revamping the Membership Model with Triathlon Australia
          </div>
          <div className="flex mt-[24px] flex-row gap-5 items-center justify-center">
            <div className="text-[#4CAF4F] text-center text-[20px] font-semibold">
              Readmore
            </div>
            <FaArrowRightLong size={24} color="#4CAF4F" />
          </div>
        </div>
      </div>
    </div>
  )
}
