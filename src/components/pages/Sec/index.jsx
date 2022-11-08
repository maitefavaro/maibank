export const Sec = () => {
    return(
<div className="w-full flex h-screen justify-around items-center bg-gradient-to-r
           from-roxo1
           via-roxo2
           to-roxo3
            background-animate">
              <div>

                <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-white text-center mb-16'>
                  <p><a className=''>Peça agora </a> <a className="text-purple-400">seu cartão de</a></p>
                  <p><a className="text-purple-400">crédito MB </a><a className=''>sem anuidade</a></p>
                </div>

                <div class="grid gap-4 grid-cols-2 justify-evenly rounded-xl ml-10" style={{ padding: '30px' }} >

                  <div className='text-2xl font-bold' style={{ border:'1px solid #8439FF', padding:'22px' , backgroundColor:'#000'}}>
                    <p><img src="new_img/cifrao.png" alt="" style={{ width: '64px', paddingBottom:'15px'}} /></p>
                    <p className='text-white'>Cartão de crédito com <br />limite de até R$20 mil  </p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid #8439FF', padding:'22px' , backgroundColor:'#000'}}>
                    <p><img src="new_img/cartao-de-credito.png" alt="Erro" style={{ width: '64px', paddingBottom:'15px'}} /></p>
                    <p className='text-white' >Comece a usar o cartão <br /> de crédito virtual logo <br /> após a aprovação </p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid #8439FF', padding:'22px' , backgroundColor:'#000'}}>
                    <p><img src="new_img/estrada-com-pedagio.png" alt="Erro" style={{ width: '64px', paddingBottom:'15px'}} /></p>
                    <p className='text-white'>Livre de mensalidades <br /> em pedágios e <br /> estacionamentos</p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid #8439FF', padding:'22px' , backgroundColor:'#000'}}>
                    <p><img src="new_img/giftbox.png" alt="Erro" style={{ width: '64px', paddingBottom:'15px'}} /></p>
                    <p className='text-white'>2 meses de Disney Plus <br /> grátis e outros benefícios</p>
                  </div>

                </div>

                <div className='w-48 p-2 mt-10 mx-auto border border-principal rounded text-white bg-preto hover:bg-gradient-to-r from-preto to-roxo1 font-semibold text-base text-center'>
                  <a href="">Peça seu cartão </a>
                </div>
              </div>
              {/* <img className="w-[42rem]" src="img/macbook.png" alt="Erro" /> */}
            </div>
    )
}