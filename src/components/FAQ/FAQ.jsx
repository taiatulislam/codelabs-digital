import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="max-w-7xl mx-auto">
      <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
        Faq
      </p>
      <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
        Frequently Asked Question
      </p>

      <div className="flex flex-col gap-3">
        <div>
          <div className="bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl">
            <h3 className="text-xl font-semibold py-5">
              What are your office hours?
            </h3>
            <div>
              <button
                className={`${isActive ? "block" : "hidden"}`}
                onClick={() => setIsActive(!isActive)}
              >
                <FaChevronUp />
              </button>
              <button
                className={`${isActive ? "hidden" : "block"}`}
                onClick={() => setIsActive(!isActive)}
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
          <p
            className={`${
              isActive ? "text-sm pl-16 pr-28 py-4 text-[#000000d1]" : "hidden"
            }`}
          >
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
        <div className="bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl">
          <h3 className="text-xl font-semibold py-5">
            How can I schedule an appointment?
          </h3>
          <button>
            <FaChevronDown />
          </button>
        </div>
        <div className="bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl">
          <h3 className="text-xl font-semibold py-5">
            Do you accept insurance?
          </h3>
          <button>
            <FaChevronDown />
          </button>
        </div>
        <div className="bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl">
          <h3 className="text-xl font-semibold py-5">
            What should I bring to my appointment?
          </h3>
          <button>
            <FaChevronDown />
          </button>
        </div>
        <div className="bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl">
          <h3 className="text-xl font-semibold py-5">
            Do you offer telemedicine appointments?
          </h3>
          <button>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
