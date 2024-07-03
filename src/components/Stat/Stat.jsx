import statChart from "../../assets/statChart.png";
import statContract from "../../assets/statContract.png";
import statCoin from "../../assets/statCoin.png";
import statVideo from "../../assets/statVideo.png";
import { FaStar } from "react-icons/fa6";
import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";
import reviewer3 from "../../assets/reviewer3.png";

const Stat = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-5 gap-5">
        {/* Card-1 */}
        <div className="shadow-xl rounded-2xl p-10 bg-[#FBFBFB]">
          <h3 className="text-4xl font-medium">90%</h3>
          <p className="my-3 pr-10">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img src={statChart} alt="statChart" className="mx-auto mt-5" />
        </div>

        <div className="col-span-3">
          <h1 className="text-center text-5xl font-semibold text-[#020043] mb-5">
            Comprehensive Care <br /> for Every Patient
          </h1>
          <div className="grid grid-cols-3 gap-5 place-content-end">
            {/* Card-2 */}
            <div className="shadow-xl rounded-2xl p-10 bg-[#FFFFF5]">
              <h3 className="text-4xl font-medium">5000+</h3>
              <p className="my-3 pr-10">Board-certified doctors</p>
              <img
                src={statContract}
                alt="statContract"
                className="float-right"
              />
            </div>

            {/* Card-3 */}
            <div className="shadow-xl rounded-2xl p-10 bg-[#FBFBFB] mt-10">
              <h3 className="text-4xl font-medium">
                4.8 <FaStar className="text-[#FFE03D] inline pb-2" />
              </h3>
              <p className="my-3">Over 20,000 Patient</p>
              <div className="flex items-center">
                <img src={reviewer1} alt="reviewer1" />
                <img src={reviewer2} alt="reviewer2" className="-ml-5" />
                <img src={reviewer3} alt="reviewer3" className="-ml-5" />
                <img src={reviewer1} alt="reviewer1" className="-ml-5" />
              </div>
            </div>

            {/* Card-4 */}
            <div className="shadow-xl rounded-2xl p-10 bg-[#FFFFF5] ">
              <h3 className="text-4xl font-medium">$5000</h3>
              <p className="my-3 pr-10">Money spend for poor patient</p>
              <img src={statCoin} alt="statCoin" className="float-right" />
            </div>
          </div>
        </div>

        {/* Card-5 */}
        <div className="shadow-xl rounded-2xl p-10 bg-[#FBFBFB]">
          <h3 className="text-4xl font-medium">50+</h3>
          <p className="my-3 pr-10">Free lession video for patient</p>
          <img src={statVideo} alt="statVideo" className="mx-auto mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Stat;
