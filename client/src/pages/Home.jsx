import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero,Stats,Banner, Faqs, Testimonials, Contact} from '../components/index';



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


   </>
  );
}

export default App;
