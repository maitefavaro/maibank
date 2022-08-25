export const App = () => {
  return (
    <>
        <div className="w-full bg-cinzaa flex h-screen">
          <div className="bg-white w-[50rem] px-4 py-3 my-40 ml-40 rounded h-80 flex flex-col gap-2 justify-center">
            <h1 className="text-2xl font-bold">Peça sua conta e cartão do MaiBank</h1>
            <input type="text" placeholder="Digite seu CPF" />
            <button className="w-32 ml-auto mt-44 border-transparent rounded-lg text-white bg-verdeagua hover:bg-teal-300" >Continuar</button>
          </div>
          <div className="rounded-xl w-full">
            <img className="h-full" src="img/sem_fundo.png" alt="Erro" />
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