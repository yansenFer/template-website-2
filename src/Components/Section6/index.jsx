import { FaArrowRightLong } from "react-icons/fa6"

export const Section6 = () => {
  return (
    <div className="flex mt-[95px] flex-col bg-[#F5F7FA] xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 py-[32px] w-full justify-center items-center">
      <div className="text-[#263238] max-w-[887px] text-center text-[64px] font-semibold">
        Pellentesque suscipit fringilla libero eu.
      </div>
      <button className="mt-[32px] py-[14px] px-[32px] flex  flex-row items-center justify-center gap-3 bg-[#4CAF4F] rounded-md">
        <div className="text-white text-[16px] font-medium">Get A Demo</div>
        <FaArrowRightLong size={14} color="#ffff" />
      </button>
    </div>
  )
}
