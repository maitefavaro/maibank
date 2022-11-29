import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { MaskField } from 'react-mask-field';


export const Cadastro = () => {

    const [isDateInputHover, setDateInputHover] = useState(false);

    function register_autentication(){
        console.log("alksjdfn")
    }

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection style={{ height: '100vh' }}>
                    <div className='w-full flex h-screen justify-around items-center bg-gradient-to-r
                        from-roxo1
                        via-roxo2
                        to-roxo3
                        background-animate'>
                            <div className='bg-gray-200 h-card-cadastro w-card-log flex flex-col rounded-xl items-center justify-center'>
                            <img className="h-24 rounded-full " src="new_img/logo-quad.png" alt="Erro" />
                            <p className='font-bold text-2xl'>FAÇA SEU <span className='text-roxo4'>CADASTRO</span></p>

                                <div>
                                    <label htmlFor="cpf" className="sr-only">
                                    CPF
                                    </label>
                                    <MaskField placeholder="CPF" className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                                </div>

                                <div>
                                    <label htmlFor="" className="sr-only">
                                    Email address
                                    </label>
                                    <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    autoComplete=""
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-t-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    placeholder="Nome"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                    Email address
                                    </label>
                                    <input
                                    id=  "email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-t-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    placeholder="Email"
                                    />
                                </div> 
  

                                <div>
                                    <label htmlFor="data_nascimento" className="sr-only">
                                    Data de Nascimento
                                    </label>
                                    <input
                                    id="data_nascimento"
                                    name="data_nascimento"
                                    type={isDateInputHover ? 'date' : 'text'}
                                    placeholder="Data de nascimento"
                                    onFocus={() => setDateInputHover(true)}
                                    onBlur={() => setDateInputHover(false)}
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    />
                                </div>  


                                <div>
                                    <label htmlFor="sexo" className="sr-only">
                                    Sexo
                                    </label>
                                    <input
                                    id="sexo"
                                    name="sexo"
                                    type=""
                                    autoComplete="current-"
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    placeholder="Sexo"
                                    />
                                </div>        
                                <div>
                                    <label htmlFor="senha" className="sr-only">
                                    Senha
                                    </label>
                                    <input
                                    id="senha"
                                    name="senha"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    placeholder="Senha"
                                    />
                                </div>        

                                <div>
                                    <button
                                        onClick={()=>{register_autentication()}}
                                        type="submit"
                                        
                                        className="cursor-pointer w-96 px-4 py-3 transition-all duration-700 mt-10 mx-auto rounded text-white bg-roxo1 hover:bg-roxo2 font-semibold text-base text-center"
                                        // className="group mb-4 relative flex w-96 mt-10 justify-center rounded-md border border-transparent bg-roxo1 py-2 px-4 text-sm font-medium text-white hover:bg-roxo2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        
                                        </span>
                                        Cadastrar
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}