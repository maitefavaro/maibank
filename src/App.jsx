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


      <div className="w-full bg-cinzaa flex h-screen justify-around items-center">
            <img className="max-w-xl" src="" alt="" />
            <img className="max-w-xl" src="" alt="" />
      </div>
   
    </>
  )
}