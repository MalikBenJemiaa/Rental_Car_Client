import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero,Stats,Banner, Faqs, Testimonials, Contact} from '../components/index';
import FindByModel from '../components/FindByModel';
import CarModels from "../components/CarModels"


function App() {
  
  return (
   <>
  
   <Hero />
   <DisplayModels />
   <Stats />
   <Testimonials />
   <FindByModel/>
   <Faqs />
   <Banner />
   <Contact />
  {/* <CarModels/> */}

   </>
  );
}

export default App;
