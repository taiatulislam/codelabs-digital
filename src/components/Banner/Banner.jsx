import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="relative -z-20"
      style={{
        backgroundColor: "#e1f5ff5b",
        backgroundImage: "linear-gradient(transparent 10%, #c1d5de80 10%)",
        backgroundSize: "170px 170px",
      }}
    >
      <div className=" max-w-7xl mx-auto my-10">
        <div className="bg-gradient-to-br from-[#00c19e2a] to-[#02004378] z-10 rounded-[55px]">
          <img src={banner} alt="banner" className="w-full relative -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
