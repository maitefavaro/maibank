
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { css, height } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navbar } from './components/Navbar/Navbar';
import { Menu } from './components/Menu/index';
import { First } from './components/pages/First/index';
import { Sec } from './components/pages/Sec/index';



export const App = () => {

  return (
    <>
      <Fullpage>

        <FullPageSections>


          <FullpageSection style={{ height: '75vh' }}>
            <Navbar />
            <Menu />
          </FullpageSection>


          <FullpageSection style={{ height: '100vh' }}>
            <First />
          </FullpageSection>


          <FullpageSection style={{ height: '100vh' }}>
            <Sec />
          </FullpageSection>


          <FullpageSection>
            <div className="w-full bg-white flex h-screen justify-evenly items-center">
              <p>
                <h1 className='text-6xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-black text-center mb-16'>Zero anuidade</h1>
                <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>Burocracia custa caro. Somos eficientes para</p>
                <p className='text-4xl font-bold mx-auto border-transparent rounded-full text-black text-center mb-16'>você não ter que pagar tarifas.</p>
              </p>

              <p>
                <p className='text-[200px] font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>0,00</p>
              </p>
            </div>
          </FullpageSection>


          <FullpageSection>
            <div className="w-full bg-cinzaa flex h-screen justify-evenly items-center">
              <img className='w-[35rem]' src="img/yoga.svg" alt="Erro" />
              <p>
                <h1 className='text-6xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-black text-center mb-16'>E sem burocracia</h1>
                <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>Soluções simples, seguras e <a className='text-azulclaro'>100%</a> </p>
                <p className='text-4xl font-bold mx-auto border-transparent rounded-full text-black text-center '><a className='text-azulclaro'>digitais</a> para você fazer tudo</p>
                <p className='text-4xl font-bold mx-auto border-transparent rounded-full text-black text-center '>diretamente pelo celular.</p>
              </p>
            </div>
          </FullpageSection>


          <FullpageSection>
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
                  className="bg-white h-80"
                >
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Pix</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Shell Box</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Viagens</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>MaiBank cel</h1></SwiperSlide>
                  <SwiperSlide><h1 style={{ backgroundColor: 'GrayText', height: 1000, textAlign: 'center' }}>Gift Card</h1></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </FullpageSection>


        </FullPageSections>
      </Fullpage>

    </>
  )
}