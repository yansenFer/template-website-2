import illustration from "../../../assets/Illustration.png"

export const Carousel1 = () => {
  return (
    <div className="flex flex-row items-center gap-5 w-full justify-between xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 py-[161px]">
      <div className="flex w-full flex-col">
        <div className="text-[#4D4D4D] font-semibold xl:text-[64px] lg:text-[45px] md:text-[40px] sm:text-[30px] text-[30px]">
          Lessons and insights
        </div>
        <div className="text-[#4CAF4F] font-semibold xl:text-[64px] lg:text-[45px] md:text-[40px] sm:text-[30px] text-[30px]">
          from 8 years
        </div>
        <div className="text-[#717171] text-[16px]">
          Where to grow your business as a photographer: site or social media?
        </div>
        <div>
          <button className="bg-[#4CAF4F] mt-[32px] py-[14px] rounded-md px-[32px] text-white font-medium text-[16px]">
            Register
          </button>
        </div>
      </div>
      <div className="xl:flex lg:flex md:flex sm:flex hidden w-full justify-end">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  )
}
