import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
