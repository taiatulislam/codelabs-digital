import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";
import reviewer3 from "../../assets/reviewer3.png";
import { FaStar } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto my-28">
      <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
        Testimonial
      </p>
      <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
        What they say about us
      </p>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {/* SLider-1 */}
        <SwiperSlide>
          <div className="bg-[#FFFFF5] p-7 rounded-xl">
            <h3 className="text-xl font-semibold">
              Expertise and Compassion Combined
            </h3>
            <p className="text-sm mt-3">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={reviewer1} alt="Reviewer 1" />
              <div>
                <p className="text-sm font-semibold">
                  Sarah D, <span className="font-normal">IT Professional</span>
                </p>
                <div className="flex text-[#FFE03D] gap-2 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLider-2 */}
        <SwiperSlide>
          <div className="bg-[#FFFFF5] p-7 rounded-xl">
            <h3 className="text-xl font-semibold">
              Life-Saving Care, Life-Changing Experience
            </h3>
            <p className="text-sm mt-3">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={reviewer2} alt="Reviewer 2" />
              <div>
                <p className="text-sm font-semibold">
                  Michael R,
                  <span className="font-normal">Business Executive</span>
                </p>
                <div className="flex text-[#FFE03D] gap-2 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLider-3 */}
        <SwiperSlide>
          <div className="bg-[#FFFFF5] p-7 rounded-xl">
            <h3 className="text-xl font-semibold">
              A Partner in Health and Wellness
            </h3>
            <p className="text-sm mt-3">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they&apos;ve become my trusted
              partner in health and
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={reviewer3} alt="Reviewer 3" />
              <div>
                <p className="text-sm font-semibold">
                  Davis S,
                  <span className="font-normal">Lawyer</span>
                </p>
                <div className="flex text-[#FFE03D] gap-2 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLider-4 */}
        <SwiperSlide>
          <div className="bg-[#FFFFF5] p-7 rounded-xl">
            <h3 className="text-xl font-semibold">
              Expertise and Compassion Combined
            </h3>
            <p className="text-sm mt-3">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={reviewer1} alt="Reviewer 1" />
              <div>
                <p className="text-sm font-semibold">
                  Sarah D, <span className="font-normal">IT Professional</span>
                </p>
                <div className="flex text-[#FFE03D] gap-2 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
