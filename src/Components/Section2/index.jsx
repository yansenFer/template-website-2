import dompet from "../../assets/dompet.png"
import gambreng from "../../assets/gambreng.png"
import nunjuk from "../../assets/nunjuk.png"
import people from "../../assets/people.png"

export const Section2 = () => {
  return (
    <div className="bg-[#F5F7FA] mt-[40px] flex w-full flex-col justify-center items-center xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between w-full items-center py-[64px]">
        <div className="flex flex-col xl:items-start lg:items-start md:items-center sm:items-center items-center">
          <div className="text-[#4D4D4D] xl:text-left lg:text-left md:text-center sm:text-center text-center text-[36px] font-semibold">
            Helping a local
          </div>
          <div className="text-[36px] xl:text-left lg:text-left md:text-center sm:text-center text-center font-semibold text-[#4CAF4F]">
            business reinvent itself
          </div>
          <div className="text-[#18191F] xl:text-left lg:text-left md:text-center sm:text-center text-center mt-[8px] text-[16px]">
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[50px] xl:mt-0 lg:mt-0 md:mt-20 sm:mt-20 mt-20">
          <div className="flex flex-row  gap-[16px] items-center">
            <img src={people} alt="people" width={"48px"} height={"48px"} />
            <div className="flex flex-col">
              <div className="text-[#4D4D4D] font-bold text-[28px]">
                2,245,341
              </div>
              <div className="text-[#717171] text-[16px]">Member</div>
            </div>
          </div>
          <div className="flex flex-row  gap-[16px] items-center">
            <img src={gambreng} alt="people" width={"48px"} height={"48px"} />
            <div className="flex flex-col">
              <div className="text-[#4D4D4D] font-bold text-[28px]">46,328</div>
              <div className="text-[#717171] text-[16px]">Club</div>
            </div>
          </div>
          <div className="flex flex-row  gap-[16px] items-center">
            <img src={nunjuk} alt="people" width={"48px"} height={"48px"} />
            <div className="flex flex-col">
              <div className="text-[#4D4D4D] font-bold text-[28px]">
                828,867
              </div>
              <div className="text-[#717171] text-[16px]">Event Bookings</div>
            </div>
          </div>
          <div className="flex flex-row  gap-[16px] items-center">
            <img src={dompet} alt="people" width={"48px"} height={"48px"} />
            <div className="flex flex-col">
              <div className="text-[#4D4D4D] font-bold text-[28px]">
                1,926,436
              </div>
              <div className="text-[#717171] text-[16px]">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
