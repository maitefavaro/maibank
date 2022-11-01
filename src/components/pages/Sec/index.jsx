export const Sec = () => {
    return(
<div className="w-full flex h-screen justify-around items-center bg-gradient-to-r
            from-terciaria
            via-secundaria
            to-terciaria
            background-animate">
              <div>

                <div className='text-4xl font-bold p-2 mt-10 mx-auto border-transparent rounded-full text-white text-center mb-16'>
                  <p><a className='text-black'>Peça agora</a> seu cartão de</p>
                  <p>crédito MB <a className='text-black'>sem anuidade</a></p>
                </div>

                <div class="grid gap-4 grid-cols-2 justify-evenly rounded-xl ml-10" style={{ padding: '30px' }} >

                  <div className='text-2xl font-bold' style={{ border:'1px solid black', padding:'15px' }}>
                    <p><img src="new_img/cifrao.png" alt="" style={{ width: '64px', }} /></p>
                    <p className='text-white'>Cartão de crédito com <br />limite de até R$20 mil  </p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid black', padding:'15px' }}>
                    <p><img src="new_img/cartao-de-credito.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white' >Comece a usar o cartão <br /> de crédito virtual logo <br /> após a aprovação </p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid black', padding:'15px' }}>
                    <p><img src="new_img/estrada-com-pedagio.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white'>Livre de mensalidades <br /> em pedágios e <br /> estacionamentos</p>
                  </div>

                  <div className='text-2xl font-bold' style={{ border:'1px solid black', padding:'15px' }}>
                    <p><img src="new_img/giftbox.png" alt="Erro" style={{ width: '64px', }} /></p>
                    <p className='text-white'>2 meses de Disney Plus <br /> grátis e outros benefícios</p>
                  </div>

                </div>

                <div className='w-48 p-2 mt-10 mx-auto border border-principal rounded-none text-white bg-preto hover:bg-teste font-semibold text-base text-center'>
                  <a href="">Peça seu cartão </a>
                </div>
              </div>
              {/* <img className="w-[42rem]" src="img/macbook.png" alt="Erro" /> */}
            </div>
    )
}