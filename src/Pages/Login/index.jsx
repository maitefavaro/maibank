import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import "swiper/css";
import "swiper/css/pagination";
import { MaskField } from 'react-mask-field';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { createSession } from './../../Session'

export const Login = () => {
    const navigate = useNavigate();
    // const navigate = useNavigation()
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    function logar() {
        const credenciais = {
            'cpf': cpf,
            'senha': password
        }

        axios.post("http://127.0.0.1:8000/api/logar/", credenciais)
            .then((response) =>{
                console.log(response)
                console.log(response['status'])
                if (response['status'] == '200'){
                    createSession(cpf)
                    navigate(`/dashboard/${cpf}`)            
                }
            }).catch(err => {
                console.log(err)
            })


        // axios.get("http://127.0.0.1:8000/api/usuario/")
        //     .then((response) => {
        //         console.log(response.data)
        //         response.data.forEach(element => {
        //             if (element.cpf == cpf && element.senha == password) {
        //                 console.log("lskjdsdisjifidfj")
        //                 createSession(cpf)
        //                 navigate(`/dashboard/${cpf}`)
        //             }
        //         }
        //         );

        //     })
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
                        <div className='bg-gray-200 h-card-login w-card-log flex flex-col rounded-xl items-center justify-center'>
                            <img className="h-24 rounded-full " src="new_img/logo-quad.png" alt="Erro" />
                            <p className='font-bold text-2xl'>FAÇA SEU <span className='text-roxo4'>LOGIN</span></p>
                            <p className='text-sm mb-10'>Não possui login? <a className='italic text-roxo4 hover:underline hover:text-principal' href="/cadastro">Faça seu cadastro!</a></p>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        CPF
                                    </label>
                                    <MaskField onChange={(event) => { setCpf(event.target.value) }} placeholder="CPF" className="relative block w-96 appearance-none rounded-none rounded-t-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-5" mask="___.___.___-__" replacement={{ _: /\d/ }} />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        onChange={(event) => { setPassword(event.target.value) }}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-96 appearance-none rounded-none rounded-b-md border border-none h-12 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Senha"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex mr-64 mt-7">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-roxo4"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Lembre de mim
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={logar}
                                        type="submit"
                                        className="cursor-pointer w-96 px-4 py-3 transition-all duration-700 mt-10 mb-6 mx-auto rounded text-white bg-roxo1 hover:bg-roxo2 font-semibold text-base text-center"
                                    // className="group mb-4 relative flex w-96 mt-10 justify-center rounded-md border border-transparent bg-roxo1 py-2 px-4 text-sm font-medium text-white hover:bg-roxo2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                        </span>
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}