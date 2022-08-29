import  React, {useState}  from 'react';
import MaskedInput from './MaskedInput';


export const App = () => {
  const [cpf, setCpf] = useState('');
  return (
    <>
        <div className="w-full bg-cinzaa flex h-screen">
          <div className="bg-white w-[50rem] h-fit px-16 py-16 my-40 ml-40 rounded-xl flex flex-col gap-2">
            <h1 className="text-4xl font-bold ">Peça sua conta e cartão do MaiBank</h1>
            <MaskedInput value={cpf} onChange={(event) => setCpf(event.target.value)} className="" type="text" />

            <button className="w-32 p-2 mt-16 ml-auto border-transparent rounded-lg text-white bg-verdeagua hover:bg-verdeagua_escuro">Continuar</button>
          </div>
          <div className="rounded-xl w-full">
            <img className="h-full" src="" alt="" />
          </div>
        </div>

      <div className="w-full bg-white flex h-screen ">
        <div className="rounded-xl w-96 h-80 ml-40 justify-center">
            <img className="h-full" src="img/cartoes.png" alt="Erro" />
          </div>
        <div >
          <div className="rounded-xl w-96 h-80 ml-40 justify-center">
            <img className="h-full" src="img/comigo.png" alt="Erro" />
          </div>
        </div>
      </div>
      <div className="w-full bg-cinzaa flex h-screen justify-items-center">
        <div className="rounded-xl w-96 h-80 ml-40 justify-center">
            <img className="h-full" src="img/cartoes.png" alt="Erro" />
          </div>
        <div >
          <div className="rounded-xl w-96 h-80 ml-40 justify-center">
            <img className="h-full" src="img/comigo.png" alt="Erro" />
          </div>
        </div>
      </div>
   
    </>
  )
}