import { GoDotFill } from "react-icons/go"
import { Carousel1 } from "./Components/Carousel1"

export const Carousel = () => {
  return (
    <div className="flex items-center justify-center relative max-w-full bg-[#F5F7FA]">
      {/* isi carousel */}
      <Carousel1 />

      {/* dot navigation */}
      <div className="absolute bottom-5 flex flex-row gap-1">
        <GoDotFill color="#4CAF4F" />
        <GoDotFill color="#4CAF4F" className="opacity-50" />
        <GoDotFill color="#4CAF4F" className="opacity-50" />
      </div>
    </div>
  )
}
