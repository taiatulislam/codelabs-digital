import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosMedkit } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const navLinks = ["Home", "Services", "Blog", "About us"];

  return (
    <div className="bg-[#F1FAFF]">
      <div className="p-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-[#020043] text-4xl font-semibold">
            D
            <IoIosMedkit className="bg-[#FFC637] p-1 text-[30px] rounded-full inline-block mb-2" />
            C
            <FaPlus className="p-3 font-black text-[40px] rounded-full inline-block mb-2 -ml-2" />
          </h1>

          {/* NavLinks */}
          <ul className="text-black flex gap-7">
            {navLinks.map((navLink) => (
              <li key={navLink} className="text-[#020043] inter">
                {navLink}
              </li>
            ))}
          </ul>

          {/* Appointment Button */}
          <div className="border border-[#343268] rounded-lg py-2 px-4 flex gap-1">
            <button className="font-medium text-[#020043]">Appointment</button>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
