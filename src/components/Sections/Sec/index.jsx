export const Sec = () => {
    return(
<div className="w-full flex h-screen justify-around items-center bg-gradient-to-r
           from-roxo1
           via-roxo2
           to-roxo3
            background-animate">
              <div>

                <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-white text-center mb-16'>
                  <p><a className=''>Peça agora </a> <a className="text-roxo1 font-extrabold">seu cartão de</a></p>
                  <p><a className="text-roxo1 font-extrabold">crédito MB </a><a className=''>sem anuidade</a></p>
                </div>

                <div class="grid gap-4 grid-cols-2 justify-evenly rounded-xl " >

                  <div className='text-2xl font-bold p-10 bg-roxo1 rounded-lg shadow-lg'>
                    <p><img className="mb-10" src="new_img/cifrao.png" alt="" /></p>
                    <p className='text-white'>Cartão de crédito com <br />limite de até R$20 mil  </p>
                  </div>

                  <div className='text-2xl font-bold p-10 bg-roxo1 rounded-lg shadow-lg'>
                    <p><img className="mb-10" src="new_img/cartao-de-credito.png" alt="Erro"  /></p>
                    <p className='text-white' >Comece a usar o cartão <br /> de crédito virtual logo <br /> após a aprovação </p>
                  </div>

                  <div className='text-2xl font-bold p-10 bg-roxo1 rounded-lg shadow-lg'>
                    <p><img className="mb-10" src="new_img/estrada-com-pedagio.png" alt="Erro"  /></p>
                    <p className='text-white'>Livre de mensalidades <br /> em pedágios e <br /> estacionamentos</p>
                  </div>

                  <div className='text-2xl font-bold p-10 bg-roxo1 rounded-lg shadow-lg' >
                    <p><img className="mb-10" src="new_img/giftbox.png" alt="Erro" /></p>
                    <p className='text-white'>2 meses de Disney Plus <br /> grátis e outros benefícios</p>
                  </div>

                </div>

                <div className='cursor-pointer w-48 px-4 py-3 transition-all duration-700 mt-10 mx-auto rounded text-white bg-roxo1 hover:bg-roxo2 font-semibold text-base text-center'>
                  <a href="/dashboard">Peça seu cartão </a>
                </div>
              </div>
              {/* <img className="w-[42rem]" src="img/macbook.png" alt="Erro" /> */}
            </div>
    )
}