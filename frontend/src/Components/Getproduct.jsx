import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import mygoals from '../Projects/Objectseven';
import { Pagination } from 'swiper/modules';
import 'tailwindcss/tailwind.css'; // Import the Tailwind CSS

const Getproduct = () => {
  return (
    <div className='container mx-auto my-10'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper bg-gray-100 rounded-md overflow-hidden">
        {mygoals.map((mygoal) => (
          <SwiperSlide key={mygoal.id} className='relative'>
            <img src={mygoal.img} alt={mygoal.title} className='w-full flex justify-center items-center h-64 object-cover' />
            <div className='absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-black bg-opacity-50'>
              {mygoal.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Getproduct;
