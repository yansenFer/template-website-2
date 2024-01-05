import rafiki from "../../assets/rafiki.png"

export const Section1 = () => {
  return (
    <div className="flex flex-row gap-[50px] xl:px-[105px] mt-[42px] lg:px-[105px] md:px-[50px] sm:px-5 px-5 items-center justify-center w-full">
      <div className="py-[52px] xl:flex lg:flex md:hidden sm:hidden hidden">
        <img src={rafiki} alt="rafiki" />
      </div>
      <div className="flex flex-col max-w-[600px]">
        <div className="text-[#4D4D4D] xl:text-left lg:text-left md:text-center sm:text-center text-center font-semibold text-[36px]">
          The unseen of spending three years at Pixelgrade
        </div>
        <div className="mt-[16px] text-[#717171] text-[14px] xl:text-left lg:text-left md:text-center sm:text-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </div>
        <button className="py-[14px] max-w-[151px] px-[32px] bg-[#4CAF4F] xl:self-start lg:self-start md:self-center sm:self-center self-center mt-[32px] text-white rounded-md">
          Learn More
        </button>
      </div>
    </div>
  )
}
