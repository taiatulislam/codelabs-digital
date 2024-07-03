import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#00c19e2a] to-[#02004378] z-10 rounded-[55px]">
        <img src={banner} alt="banner" className="w-full relative -z-10" />
      </div>
    </div>
  );
};

export default Banner;
