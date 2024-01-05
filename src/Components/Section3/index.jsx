import pana from "../../assets/pana.png"

export const Section3 = () => {
  return (
    <div className="flex flex-row gap-[50px] xl:px-[105px] mt-[42px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 items-center justify-center w-full">
      <div className="py-[52px] xl:flex lg:flex md:hidden sm:hidden hidden">
        <img src={pana} alt="rafiki" />
      </div>
      <div className="flex flex-col max-w-[600px]">
        <div className="text-[#4D4D4D] xl:text-left lg:text-left md:text-center sm:text-center text-center font-semibold text-[36px]">
          How to design your site footer like we did
        </div>
        <div className="mt-[16px] text-[#717171] text-[14px] xl:text-left lg:text-left md:text-center sm:text-center text-center">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </div>
        <button className="py-[14px] max-w-[151px] px-[32px] bg-[#4CAF4F] xl:self-start lg:self-start md:self-center sm:self-center self-center mt-[32px] text-white rounded-md">
          Learn More
        </button>
      </div>
    </div>
  )
}
