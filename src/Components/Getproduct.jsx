import mygoals from "../Projects/Objectseven";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Getproduct = () => {
  return (
    <div className="h-full w-full mt-7 mb-7 designcode  flex justify-center">
      <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} className="mySwiper h-full w-full">
        {mygoals.map((val) => {
          return (
            <SwiperSlide key={val.id}>
              <div className="flex justify-center items-center">
                <img
                  className="object-contain h-96 w-full"
                  src={val.imgsrc}
                  alt={val.title}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Getproduct;
