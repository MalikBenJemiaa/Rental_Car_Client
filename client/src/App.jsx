import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Protected, SearchResults, MoreDetails, Navbar, Footer } from "./components/index";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Signin from "./pages/Signin";
import Contact from "./components/Contact";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import Signup from "./pages/Signup";
import { CarContextProvider } from './pages/CarContext.jsx';
import AdminDashb from "./components/AdminDashboard/AdminDashb";
import AddCar from "./components/AdminDashboard/AddCar";
import CarModels from './components/CarModels'
import './carCardsStyling.css'
AOS.init();

const App = () => {
    const [selectedCarId, setSelectedCarId] = useState(null); // State for selected car's ID

    const carsel=(num)=>{
      setSelectedCarId(num)
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    
  return (
    <>
      <AuthContextProvider>
      <div>
      {isVisible && (
        <button id="button"  className="show" onClick={scrollToTop}>
        </button>
      )}
    </div>
        <Navbar />
      <CarContextProvider> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:query" element={<SearchResults />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/CarModels" element ={<CarModels/>}></Route>
          <Route path="/admindashboard" element={<AdminDashb />}></Route>
          <Route path="/addcar" element={<AddCar />}></Route>
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          ></Route>
            <Route path="/car/:id" element={<MoreDetails  />} /> 
        </Routes>
        </CarContextProvider> 
        <Footer />
        <Routes>

        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
