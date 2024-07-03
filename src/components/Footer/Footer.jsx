import { IoIosMedkit } from "react-icons/io";
import { FaPlus, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  const link1 = ["Home", "About Us", "Success Page", "Terms And Condition"];
  const link2 = ["Services", "Scheduling", "Contact Us", "Patient Portal"];

  return (
    <div className="bg-[#020043] text-[#FFFFF5] py-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-4xl font-semibold mb-5">
          D
          <IoIosMedkit className="bg-[#FFC637] p-1 text-[30px] rounded-full inline-block mb-2" />
          C
          <FaPlus className="p-3 font-black text-[40px] rounded-full inline-block mb-2 -ml-2" />
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="text-xs mb-5">
              123 Main Street Anytown, USA <br /> Postal Code: 12345
            </p>
            <p className="text-xs">
              Support: support@oyolloo.com <br /> (Available : 10:00am to
              07:00pm)
            </p>
          </div>
          {/* NavLinks */}
          <ul className="text-xs flex flex-col gap-3">
            {link1.map((navLink) => (
              <li key={navLink} className="inter">
                {navLink}
              </li>
            ))}
          </ul>
          {/* NavLinks */}
          <ul className="text-xs flex flex-col gap-3">
            {link2.map((navLink) => (
              <li key={navLink} className="inter">
                {navLink}
              </li>
            ))}
          </ul>

          <div>
            <h3 className="text-xs mb-3">Follow us</h3>
            <div className="flex gap-5">
              <PiFacebookLogoFill className="text-2xl"></PiFacebookLogoFill>
              <FaInstagram className="text-2xl"></FaInstagram>
              <TiSocialLinkedinCircular className="text-2xl"></TiSocialLinkedinCircular>
              <FaYoutube className="text-2xl"></FaYoutube>
            </div>

            <p className="text-xs mt-5">@docplus 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
