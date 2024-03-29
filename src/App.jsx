import "./App.css"
import {
  Carousel,
  Comunity,
  Footer,
  Navbar,
  OurClients,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "./Components"

function App() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Carousel />
      <OurClients />
      <Comunity />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default App
