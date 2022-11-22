import { Pagination } from "swiper";
import { css, height } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";

export const Quin = () => {
    return (
      <div className="bg-gradient-to-r
      from-roxo1
      via-roxo2
      to-roxo3
       background-animate flex justify-center flex-col items-center">
        <div className="negao3">
              <div className='mb-20'>
                  <p className='text-5xl font-bold p-2 mx-auto border-transparent rounded-full text-white text-center '>A agilidade que você precisa</p>
                  <p className='text-5xl font-bold p-2 mx-auto border-transparent rounded-full text-white text-center '>em um só lugar</p>
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
                  <SwiperSlide className="bg-roxo1 items-center flex-col flex justify-center gap-4 text-white font-bold"> <img src="new_img/pix.svg" className="w-24" alt="" /><h1>Pix</h1></SwiperSlide>

                  <SwiperSlide className="bg-roxo1 items-center flex-col flex justify-center gap-4 text-white font-bold"> <img src="imgs/gas-station (1).png" className="w-24" alt=""/><h1>Shell Box</h1></SwiperSlide>

                  <SwiperSlide className="bg-roxo1 items-center flex-col flex justify-center gap-4 text-white font-bold"> <img src="imgs/plane (1).png" className="w-24" alt=""/><h1>Viagens</h1></SwiperSlide>

                  <SwiperSlide className="bg-roxo1 items-center flex-col flex justify-center gap-4 text-white font-bold"> <img src="imgs/cell-phone (1).png" className="w-24" alt=""/><h1>MaiBank Cel</h1></SwiperSlide>

                  <SwiperSlide className="bg-roxo1 items-center flex-col flex justify-center gap-4 text-white font-bold"> <img src="imgs/giftbox (1).png" className="w-24" alt=""/><h1>Gift Card</h1></SwiperSlide>
                </Swiper>
              </div>
        </div>
      </div>
    )
}