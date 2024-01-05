import logo1 from "../../assets/Logo1.png"
import logo2 from "../../assets/Logo2.png"
import logo3 from "../../assets/Logo3.png"
import logo4 from "../../assets/Logo4.png"
import logo5 from "../../assets/Logo5.png"
import logo6 from "../../assets/Logo6.png"
import { FaArrowRightLong } from "react-icons/fa6"

export const Section4 = () => {
  return (
    <div className="flex flex-col mt-[48px] items-end py-[33px] bg-[#F5F7FA] xl:px-[105px] lg:px-[105px] md:px-[50px] sm:px-5 px-5">
      <div className="flex flex-col max-w-[748px]">
        <div className="text-[#717171] text-[16px] font-medium xl:text-left lg:text-left md:text-left sm:text-center text-center">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </div>
        <div className="flex flex-col">
          <div className="text-[#4CAF4F] mt-[16px] font-semibold text-[20px] xl:text-left lg:text-left md:text-left sm:text-center text-center">
            Tim Smith
          </div>
          <div className="text-[#89939E] font-normal text-[16px] xl:text-left lg:text-left md:text-left sm:text-center text-center">
            British Dragon Boat Racing Association
          </div>
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-5 mt-[42px] items-center justify-between">
            <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-6 grid-cols-3  items-center gap-[41px]">
              <img src={logo1} alt="logo1" />
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
              <img src={logo6} alt="logo6" />
            </div>
            <button className="flex flex-row items-center gap-2">
              <div className="text-[#4CAF4F] min-w-fit text-[20px] font-semibold">
                Meet all customers
              </div>
              <FaArrowRightLong size={24} color="#4CAF4F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
