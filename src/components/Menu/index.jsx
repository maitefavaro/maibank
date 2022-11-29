import { MaskField } from 'react-mask-field';
import  React, {useState}  from 'react';
import './style.css'
import '../../globalStyle.css'
import { useNavigate } from 'react-router-dom';

export const Menu = () => {

    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');

    function callCadastro(){
        navigate('/cadastro')
    }

    return (
            <div id='menu' className="flex justify-around bg-center bg-cover h-full items-center bg-gradient-to-r
            from-roxo1
            via-roxo2
            to-roxo3
            background-animate" >
              <div className="bg-white w-[30%] h-fit px-16 py-16 rounded-xl flex flex-col gap-2">
                <div className=' space-y-9'>
                <h1 className="text-4xl font-bold ">Peça sua conta e cartão do MaiBank</h1>
                {/* <MaskedInput value={cpf} onChange={(event) => setCpf(event.target.value)} className="outline-hidden" type="text" /> */}
                <MaskField className="teste bg-gray-100 p-3 w-full rounded-md" placeholder="Digite seu CPF" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                </div>
                <button className="cursor-pointer w-48 px-4 py-3 transition-all duration-700 mt-10 ml-72 rounded text-white bg-roxo1 hover:bg-roxo2 font-semibold text-base text-center" onClick={ callCadastro }>Continuar</button>
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