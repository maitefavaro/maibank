import { Pagination } from "swiper";
import { css, height } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";

export const Quin = () => {
    return (
      <div className="bg-gradient-to-r
      from-roxo1
      via-roxo2
      to-roxo3
       background-animate">
        <div className="negao3">
              <div className='negao4'>
                <p>
                  <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>A agilidade que você precisa</p>
                  <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>em um só lugar</p>
                </p>
              </div>
              <div className='swiper'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={60}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="bg-transparent h-80"
                >
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Pix</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Shell Box</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Viagens</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>MaiBank cel</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Gift Card</h1></SwiperSlide>
                </Swiper>
              </div>
        </div>
      </div>
    )
}