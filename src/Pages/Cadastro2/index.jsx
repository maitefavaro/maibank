import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { MaskField } from 'react-mask-field';


export const Cadastro2 = () => {

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
                            <p className='font-bold text-2xl'>COMPLETE <span className='text-roxo4'>SEU CADASTRO</span></p>

                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                    CPF
                                    </label>
                                    <MaskField placeholder="CPF" className="relative block w-96 appearance-none rounded-none rounded-t-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                                </div>

                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                    Data de Nascimento
                                    </label>
                                    <input
                                    id="dt-nascimento"
                                    name="dt-nascimento"
                                    type={isDateInputHover ? 'date' : 'text'}
                                    placeholder="Data de nascimento"
                                    onFocus={() => setDateInputHover(true)}
                                    onBlur={() => setDateInputHover(false)}
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-t-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5 mt-5"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                    Password
                                    </label>
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Senha"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                    Password
                                    </label>
                                    <input
                                    id="password2"
                                    name="password2"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-5"
                                    placeholder="Confirme sua senha"
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
                                        Concluir cadastro
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}