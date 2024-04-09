import img3 from '../../assets/img3.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
                  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto"
      >
        <div className=''>
        <SwiperSlide><img src={img3} className="w-full lg:h-auto" />
        <p></p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img1} className="w-full h-full"/></SwiperSlide>
        <SwiperSlide><img src={img2} className="w-full h-full"/></SwiperSlide>
        </div>
        
      </Swiper>
        </div>
    );
};

export default Slider;