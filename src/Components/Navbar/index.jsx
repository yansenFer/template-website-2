import { useState } from "react"
import Logo from "../../assets/Logo.png"
import { IoMdMenu } from "react-icons/io"

export const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  return (
    <div className=" py-[30px] bg-[#F5F7FA] gap-2 relative xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 flex flex-row justify-between w-full items-center">
      <button
        onClick={() => setIsDropdown(!isDropdown)}
        className="cursor-pointer xl:hidden lg:hidden md:block sm:block block"
      >
        <IoMdMenu size={"24px"} />
        <div
          className={` bg-[#4CAF4F] rounded-md mt-2 text-white gap-2 z-10 absolute shadow-2xl shadow-gray-400 ${
            isDropdown ? "flex" : "hidden"
          } flex-col items-center`}
        >
          <div className="mt-2 font-bold md:hidden sm:hidden flex">Login</div>
          <div className="border-b-2 border-white md:hidden sm:hidden justify-center flex font-bold w-full pb-2 ">
            Sign Up
          </div>
          <div className="pb-2 md:pt-2 sm:pt-2 pt-0 gap-2 flex flex-col px-5">
            <div>Home</div>
            <div>Service</div>
            <div>Feature</div>
            <div>Product</div>
            <div>Testimonial</div>
            <div>FAQ</div>
          </div>
        </div>
      </button>
      <img src={Logo} alt="logo" />
      <div className="xl:flex lg:flex md:hidden sm:hidden hidden min-w-fit overflow-auto flex-row xl:gap-[50px] lg:gap-[25px] text-[#18191F] text-[16px]">
        <div>Home</div>
        <div>Service</div>
        <div>Feature</div>
        <div>Product</div>
        <div>Testimonial</div>
        <div>FAQ</div>
      </div>
      <div className="xl:flex lg:flex md:flex sm:flex  hidden flex-row gap-[14px]">
        <button className="bg-transparent py-[10px] px-[20px] text-[#4CAF4F] font-medium text-[14px]">
          Login
        </button>
        <button className="bg-[#4CAF4F] py-[10px] px-[20px] min-w-fit rounded-md text-white font-medium text-[14px]">
          Sign Up
        </button>
      </div>
    </div>
  )
}
