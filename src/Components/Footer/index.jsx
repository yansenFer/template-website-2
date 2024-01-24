import Logowhite from "../../assets/Logowhite.png"
import youtube from "../../assets/youtube.png"
import Socialicon from "../../assets/Socialicons.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"

export const Footer = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col xl:gap-0 lg:gap-0 md:gap-10 sm:gap-10 gap-10 w-full py-[64px] bg-[#263238] xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 justify-between items-center">
      <div className="flex self-start flex-col gap-[40px]">
        <img src={Logowhite} alt="logo" className="w-[138px]" />
        <div>
          <div className="text-[14px] text-[#F5F7FA]">
            Copyright © code by Yanson Ferdinand Kurniadi
          </div>
          <div className="text-[14px] text-[#F5F7FA]">All rights reserved</div>
        </div>
        <div className="flex flex-row gap-[16px]">
          <img src={instagram} alt="instagram" />
          <img src={Socialicon} alt="Socialicon" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="flex flex-col gap-[12px] self-start">
        <div className="font-semibold text-[20px] text-white">Company</div>
        <div className="text-[#F5F7FA] text-[14px]">About us</div>
        <div className="text-[#F5F7FA] text-[14px]">Blog</div>
        <div className="text-[#F5F7FA] text-[14px]">Contact us</div>
        <div className="text-[#F5F7FA] text-[14px]">Pricing</div>
        <div className="text-[#F5F7FA] text-[14px]">Testimonials</div>
      </div>
      <div className="flex flex-col gap-[12px] self-start">
        <div className="font-semibold text-[20px] text-white">Support</div>
        <div className="text-[#F5F7FA] text-[14px]">Help Center</div>
        <div className="text-[#F5F7FA] text-[14px]">Terms of service</div>
        <div className="text-[#F5F7FA] text-[14px]">Legal</div>
        <div className="text-[#F5F7FA] text-[14px]">Privacy policy</div>
        <div className="text-[#F5F7FA] text-[14px]">Status</div>
      </div>
      <div className="flex flex-col gap-[12px] self-start">
        <div className="font-semibold text-[20px] text-white">
          Stay up to date
        </div>
        <input
          placeholder="Your email address"
          className="px-[12px] py-[9px] bg-gray-700"
        ></input>
      </div>
    </div>
  )
}
