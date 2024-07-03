import advertisement from "../../assets/advertisement.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosMedkit } from "react-icons/io";

const Advertisement = () => {
  return (
    <div
      className="relative -z-20"
      style={{
        backgroundColor: "#e1f5ff5b",
        backgroundImage: "linear-gradient(transparent 10%, #c1d5de80 10%)",
        backgroundSize: "170px 170px",
      }}
    >
      <div className="max-w-7xl mx-auto my-28 relative">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 5% 50%,#020043, #0200434D)",
          }}
          className="z-10 rounded-[40px]"
        >
          <img
            src={advertisement}
            alt="advertisement"
            className="w-full relative -z-10"
          />
        </div>
        <div className="absolute top-[30%] left-16">
          <h2 className="text-5xl font-semibold text-[#FFFFF5] leading-[4rem]">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h2>
          {/* Appointment Button */}
          <div className="bg-[#FFC637] mr-5 rounded-lg py-2 px-4 inline-flex gap-1 mt-8">
            <button className="font-medium text-[#020043]">Appointment</button>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
          {/* Learn More Button */}
          <div className="border border-[#FFFFF5] rounded-lg py-2 px-4 inline-flex gap-1">
            <button className="font-medium text-[#FFFFF5]">Learn More</button>
            <MdOutlineArrowOutward className="text-xl text-[#FFFFF5]" />
          </div>
        </div>

        {/* Logo */}
        <h1 className="text-[#FFFFF5] text-4xl font-semibold mb-5 absolute top-10 right-10">
          D
          <IoIosMedkit className="bg-[#FFC637] p-1 text-[30px] rounded-full inline-block mb-2" />
          C
          <FaPlus className="p-3 font-black text-[40px] rounded-full inline-block mb-2 -ml-2" />
        </h1>
      </div>
    </div>
  );
};

export default Advertisement;
