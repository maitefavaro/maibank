import  React, {useState}  from 'react';
import { Fullpage,FullPageSections,FullpageSection,FullpageNavigation } from '@ap.cx/react-fullpage';
import bgimg from '../public/img/back_desfocada.jpg'
import { MaskField } from 'react-mask-field';
import { height } from '@mui/system';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navbar } from './components/Navbar/Navbar';


export const App = () => {
  const [cpf, setCpf] = useState('');
  return (
    <>
    
      <Fullpage>
      
        <FullPageSections>
        <Navbar/>

          <FullpageSection style={{height: '100vh'}}>
            <div className="flex justify-between bg-center bg-cover h-full items-center" 
              style={{
                backgroundImage: `url(${bgimg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <div className="bg-white w-[30%] h-fit px-16 py-16 rounded-xl flex flex-col gap-2 ml-20 mb-60">
                <div className=' space-y-9'>
                  <h1 className="text-4xl font-bold ">Peça sua conta e cartão do MaiBank</h1>
                  {/* <MaskedInput value={cpf} onChange={(event) => setCpf(event.target.value)} className="outline-hidden" type="text" /> */}
                  <MaskField className="teste" placeholder="Digite seu CPF" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                </div>
                <button className="w-32 p-2 mt-16 ml-auto border-transparent rounded-lg text-white bg-verdeagua hover:bg-verdeagua_escuro">Continuar</button>
            </div>

            <div className="rounded-xl">
              <img className="h-screen mr-2 opacity-95" src="img/dario2.png" alt="Erro" />
            </div>

          </div>
          </FullpageSection>


          <FullpageSection style={{height: '100vh'}}>
            <div className="w-full bg-white flex h-screen justify-evenly items-center">
              <img className="w-[30rem]" src="img/cart_sombra.png" alt="Erro" />
              <img className="w-[35rem]" src="img/comigo.png" alt="Erro" />
            </div>
          </FullpageSection>


          <FullpageSection style={{height: '100vh'}}>
            <div className="w-full bg-cinzaa flex h-screen justify-around items-center">
              <div>
                <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-black text-center mb-16'>
                  <p><a className='text-teal-400'>peça agora</a> seu cartão de</p>
                  <p>crédito MB <a className='text-teal-400'>sem anuidade</a></p>  
                </div>
                <div class="grid gap-4 grid-cols-2 justify-evenly bg-cinzaa rounded-xl ml-10 " style={{padding:'30px'}} >
                  <div className='text-2xl font-bold' style={{marginBottom:'100px'}}><p><img src="img/cifrao.png" alt="" style={{width:'64px', }}/></p><p>Cartão de crédito com </p>limite de até R$20 mil</div>
                  <div className='text-2xl font-bold'><p><img src="img/credito.png" alt="Erro" style={{width:'64px',}}/></p><p>Comece a usar o cartão</p><p> de crédito virtual logo</p> após a aprovação</div>
                  <div className='text-2xl font-bold'><p><img src="img/pedagio.png" alt="Erro" style={{width:'64px', }}/></p><p>Livre de mensalidades</p><p> em pedágios e</p> estacionamentos</div>
                  <div className='text-2xl font-bold'><p><img src="img/presente.png" alt="Erro" style={{width:'64px', }}/></p><p>2 meses de Disney Plus</p> grátis e outros benefícios</div>          
                </div>
                <div className='w-48 p-2 mt-10 mx-auto border-transparent rounded-full text-white bg-verdeagua hover:bg-verdeagua_escuro font-semibold text-base text-center'>
                  <a href='<a href="https://api.whatsapp.com/send?phone=5519989558913&text=Ol%C3%A1!">'>Peça seu cartão </a>
                </div>
              </div>
                <img className="w-[42rem]" src="img/cel_card.png" alt="Erro" />
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
                <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>Soluções simples, seguras e <a className='text-teal-400'>100%</a> </p>
                <p className='text-4xl font-bold mx-auto border-transparent rounded-full text-black text-center '><a className='text-teal-400'>digitais</a> para você fazer tudo</p>
                <p className='text-4xl font-bold mx-auto border-transparent rounded-full text-black text-center '>diretamente pelo celular.</p>
              </p>
            </div>
          </FullpageSection>


          <FullpageSection>
            <div className="w-full bg-white flex h-screen justify-evenly items-center">
              <p>
                <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>A agilidade que você precisa</p>
                <p className='text-4xl font-bold p-2 mx-auto border-transparent rounded-full text-black text-center '>em um só lugar</p>
              </p>
              <div>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={40}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="bg-blue-100 h-80"
                  >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
              </div>
              </div>
          </FullpageSection>


        </FullPageSections>
      </Fullpage>

    </>
  )
}