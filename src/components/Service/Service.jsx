import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto my-28">
      <div className="grid grid-rows-2 gap-5 p-10 rounded-xl bg-[#FFFFF5]">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
              Service
            </p>
            <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
              Empowering Health, <br /> Enriching Lives
            </p>
            <p className="text-[#4D4C7B] max-w-sm">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            {/* Appointment Button */}
            <div className="bg-[#FFC637] rounded-lg py-2 px-4 inline-flex gap-1 mt-8">
              <button className="font-medium text-[#020043]">
                Appointment
              </button>
              <MdOutlineArrowOutward className="text-xl" />
            </div>
          </div>
          {/* Service-1 */}
          <div className="relative">
            <img src={service1} alt="Service1" className="w-full" />
            <div className="w-[70%] bg-[#02004399] rounded-3xl text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-3xl font-semibold mb-4">
                Advanced Technology
              </h3>
              <p className="max-w-[280px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* Service-2 */}
          <div className="relative">
            <img src={service2} alt="Service2" className="w-full" />
            <div className="w-[70%] bg-[#02004399] rounded-3xl text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-3xl font-semibold mb-4">
                Online Doctor Meet
              </h3>
              <p className="max-w-[280px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
          {/* Service-3 */}
          <div className="relative">
            <img src={service3} alt="Service3" className="w-full" />
            <div className="w-[70%] bg-[#02004399] rounded-3xl text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-3xl font-semibold mb-4">
                Consultancy your health
              </h3>
              <p className="max-w-[280px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
