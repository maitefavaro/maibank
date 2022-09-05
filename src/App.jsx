import  React, {useState}  from 'react';
import MaskedInput from './MaskedInput';
import bgimg from '../public/img/back_desfocada.jpg'


export const App = () => {
  const [cpf, setCpf] = useState('');
  return (
    <>
        <div className="flex w-full bg-center bg-cover h-full items-center" 
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
          <div className="bg-white w-[50rem] h-fit px-16 py-16 rounded-xl flex flex-col gap-2 ml-20 mb-60">
            <div className=' space-y-9'>
              <h1 className="text-4xl font-bold ">Peça sua conta e cartão do MaiBank</h1>
              <MaskedInput value={cpf} onChange={(event) => setCpf(event.target.value)} className="" type="text" />
            </div>
            <button className="w-32 p-2 mt-16 ml-auto border-transparent rounded-lg text-white bg-verdeagua hover:bg-verdeagua_escuro">Continuar</button>
          </div>
          <div className="rounded-xl w-full">
            <img className="h-screen" src="img/sem_fundo.png" alt="" />
          </div>
        </div>

    
      <div className="w-full bg-white flex h-screen justify-evenly items-center">
            <img className="w-[30rem]" src="img/cart_sombra.png" alt="Erro" />
            <img className="w-[35rem]" src="img/comigo.png" alt="Erro" />
      </div>


      {/* <div className="w-full bg-cinzaa flex h-screen justify-around items-center">
            <img className="w-[35rem]" src="img/teste.png" alt="" />
            <img className="w-[40rem]" src="img/celularr.png" alt="" />
      </div> */}


      <div className="w-full bg-cinzaa flex h-screen justify-around items-center">
        <div>
          <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-black text-center mb-16'>
            <p><a className='text-teal-400'>peça agora</a> seu cartão de</p>
            <p>crédito MB <a className='text-teal-400'>sem anuidade</a></p>  
          </div>
        <div class="grid gap-4 grid-cols-2 justify-evenly bg-cinzaa rounded-xl ml-10 " style={{padding:'30px'}} >
            <div className='text-2xl font-bold' style={{marginBottom:'100px'}}><p><img src="img/cifrao.png" alt="" style={{width:'64px', }}/></p><p>Cartão de crédito com </p>limite de até R$20 mil</div>
            <div className='text-2xl font-bold'><p><img src="img/credito.png" alt="" style={{width:'64px',}}/></p><p>Comece a usar o cartão</p><p> de crédito virtual logo</p> após a aprovação</div>
            <div className='text-2xl font-bold'><p><img src="img/pedagio.png" alt="" style={{width:'64px', }}/></p><p>Livre de mensalidades</p><p> em pedágios e</p> estacionamentos</div>
            <div className='text-2xl font-bold'><p><img src="img/presente.png" alt="" style={{width:'64px', }}/></p><p>2 meses de Disney Plus</p> grátis e outros benefícios</div>          
            </div>
              <div className='w-48 p-2 mt-10 mx-auto border-transparent rounded-full text-white bg-verdeagua hover:bg-verdeagua_escuro font-semibold text-base text-center'>
              <a href='<a href="https://api.whatsapp.com/send?phone=5519989558913&text=Ol%C3%A1!">'>Peça seu cartão </a>
              </div>
        </div>
            <img className="w-[40rem]" src="" alt="" />
      </div>

      <div className="w-full bg-white flex h-screen justify-evenly items-center">
            <img className="w-[30rem]" src="" alt="" />
            <img className="w-[35rem]" src="" alt="" />
      </div>
   
    </>
  )
}