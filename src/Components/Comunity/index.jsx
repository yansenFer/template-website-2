import icon1 from "../../assets/Icon1.png"
import icon2 from "../../assets/Icon2.png"
import icon3 from "../../assets/Icon3.png"

export const Comunity = () => {
  return (
    <div className="mt-[40px] xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 flex flex-col w-full justify-center items-center">
      <div className="text-[#4D4D4D] text-center text-[36px] font-semibold">
        Manage your entire community in a single system
      </div>
      <div className="mt-[8px] text-[#4D4D4D] text-[16px]">
        Who is Nextcent suitable for?
      </div>
      <div className="grid mt-[16px] w-full gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-between">
        <div className="flex shadow-md max-w-[299px] px-[16px] py-[24px] flex-col justify-self-center h-full items-center justify-center">
          <img src={icon1} alt="icon1" className="w-[65px] h-[56px]" />
          <div className="text-[#4D4D4D] leading-tight text-center text-[28px] font-bold">
            Membership Organisations
          </div>
          <div className="text-[#4D4D4D] mt-[8px] text-center text-[14px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
        </div>
        <div className="flex shadow-md max-w-[299px] px-[16px] py-[24px] flex-col justify-self-center h-full items-center justify-center">
          <img src={icon2} alt="icon1" className="w-[65px] h-[56px]" />
          <div className="text-[#4D4D4D] leading-tight text-center text-[28px] font-bold">
            National Associations
          </div>
          <div className="text-[#4D4D4D] mt-[8px] text-center text-[14px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
        </div>
        <div className="flex shadow-md max-w-[299px] px-[16px] py-[24px] flex-col justify-self-center h-full items-center justify-center">
          <img src={icon3} alt="icon1" className="w-[65px] h-[56px]" />
          <div className="text-[#4D4D4D] text-center text-[28px] font-bold">
            Clubs And Groups
          </div>
          <div className="text-[#4D4D4D] mt-[8px] text-center text-[14px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
        </div>
      </div>
    </div>
  )
}
