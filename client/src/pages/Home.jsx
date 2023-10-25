import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero,Stats,Banner, Faqs, Testimonials, Contact} from '../components/index';
import CarModels from "../components/CarModels"


function App() {
  
  return (
   <>
  
   <Hero />
   <DisplayModels />
   <Stats />
   <Testimonials />
   <Faqs />
   <Banner />
   <Contact />
  {/* <CarModels/> */}

   </>
  );
}

export default App;
