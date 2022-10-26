
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { css, height } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navbar } from './components/Navbar/Navbar';
import { Menu } from './components/Menu/index';


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
            <div className="w-full bg-white flex h-screen justify-evenly items-center">
              <img className="w-[30rem]" src="img/cart_sombra.png" alt="Erro" />
              <div>
                <p className='font-bold text-4xl'>comigo, coisa boa nunca <br /> vem sozinha.</p>
                <p className='text-4xl'>é por isso <br /> que eu tenho um monte <br /> de vantagens pra você <br /> aproveitar.</p>
              </div>
            </div>
          </FullpageSection>


          <FullpageSection style={{ height: '100vh' }}>
            <div className="w-full bg-black flex h-screen justify-around items-center">
              <div>

                <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-white text-center mb-16'>
                  <p><a className='text-azulclaro'>Peça agora</a> seu cartão de</p>
                  <p>crédito MB <a className='text-azulclaro'>sem anuidade</a></p>
                </div>

                <div class="grid gap-4 grid-cols-2 justify-evenly rounded-xl ml-10 " style={{ padding: '30px' }} >

                  <div className='text-2xl font-bold' style={{ marginBottom: '100px' }}>
                    <p><img src="img/cifrao.png" alt="" style={{ width: '64px', }} /></p>
                    <p className='text-white'>Cartão de crédito com <br />limite de até R$20 mil  </p>
                  </div>

                  <div className='text-2xl font-bold'>
                    <p><img src="img/cartao-de-credito.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white' >Comece a usar o cartão <br /> de crédito virtual logo <br /> após a aprovação </p>
                  </div>

                  <div className='text-2xl font-bold'><p><img src="img/estrada-com-pedagio.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white'>Livre de mensalidades <br /> em pedágios e <br /> estacionamentos</p>
                  </div>

                  <div className='text-2xl font-bold'><p><img src="img/presente.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white'>2 meses de Disney Plus <br /> grátis e outros benefícios</p>
                  </div>

                </div>

                <div className='w-48 p-2 mt-10 mx-auto border-transparent rounded-full text-white bg-azulclaro hover:bg-azulescuro2 font-semibold text-base text-center'>
                  <a href="">Peça seu cartão </a>
                </div>
              </div>
              {/* <img className="w-[42rem]" src="img/macbook.png" alt="Erro" /> */}
            </div>
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