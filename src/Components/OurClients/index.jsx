import logo1 from "../../assets/Logo1.png"
import logo2 from "../../assets/Logo2.png"
import logo3 from "../../assets/Logo3.png"
import logo4 from "../../assets/Logo4.png"
import logo5 from "../../assets/Logo5.png"
import logo6 from "../../assets/Logo6.png"
import logo7 from "../../assets/Logo7.png"

export const OurClients = () => {
  return (
    <div className="flex flex-col mt-[40px] items-center justify-center xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5">
      <div className="text-[#4D4D4D] text-[36px] font-semibold">
        Our Clients
      </div>
      <div className="text-[#717171]  mt-[8px] text-[16px] ">
        We have been working with some Fortune 500+ clients
      </div>
      <div className="grid xl:grid-cols-7 py-[25px] mt-[16px] lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 grid-cols-4 xl:gap-[136px] lg:gap-[100px] md:gap[70px] sm:gap-10 gap-5 items-center justify-center">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
        <img src={logo7} alt="logo7" />
      </div>
    </div>
  )
}
