import { MaskField } from 'react-mask-field';
import  React, {useState}  from 'react';
import './style.css'

export const Menu = () => {
    const [cpf, setCpf] = useState('');

    return (
            <div id='menu' className="flex justify-around bg-center bg-cover h-full items-center bg-gradient-to-r
            from-roxo1
            via-roxo2
            to-roxo5
            background-animate" >
              <div className="bg-white w-[30%] h-fit px-16 py-16 rounded-xl flex flex-col gap-2">
                <div className=' space-y-9'>
                <h1 className="text-4xl font-bold ">Peça sua conta e cartão do MaiBank</h1>
                {/* <MaskedInput value={cpf} onChange={(event) => setCpf(event.target.value)} className="outline-hidden" type="text" /> */}
                <MaskField className="teste" placeholder="Digite seu CPF" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                </div>
                <button className="w-32 p-2 mt-16 ml-auto border-transparent rounded-lg text-white bg-roxo4 hover:bg-roxo1">Continuar</button>
                </div>

                <div className="text-white w-[60rem]">
                <h1 className="negao">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='negao2 pt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, esse quos distinctio ducimus quas voluptas aperiam, possimus, iste aspernatur nostrum rerum sint. Esse laudantium quia fugit inventore illo numquam possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae ab quam non, quod pariatur sit, maiores perspiciatis iure consequuntur nihil libero temporibus corrupti reiciendis, culpa dolore labore ipsam magni!
                </p>
                </div>

            </div>
            
    )
}