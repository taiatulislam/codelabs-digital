import Banner from "./components/Banner/Banner";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Advertisement from "./components/Advertisement/Advertisement";
import Stat from "./components/Stat/Stat";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Advertisement></Advertisement>
      <Footer></Footer>
    </div>
  );
}

export default App;
