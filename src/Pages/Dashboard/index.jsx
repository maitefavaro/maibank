import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import { getSession } from "./../../Session"
export const Dashboard = () => {

    const navigate = new useNavigate()
    useEffect(() => {
        console.log(getSession())
        
        if(!getSession()){
            navigate('/login')
        }
    },[])

    function deslogar(){
        navigate('/')
    }
    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection style={{ height: '100vh' }}>
                    <div className='w-full flex px-2 sm:px-4 py-2.5 h-screen justify-around  bg-gradient-to-r
                        from-roxo1
                        via-roxo2
                        to-roxo3
                        background-animate'>
                        <div class="container flex flex-wrap md:flex items-center justify-between px-6 py-3 bg-transparent w-full fixed">
                            <a href="" class="">
                                <img src="img/logo-removebg-preview.png" class="h-6 mr-3 sm:h-9" alt="MB Logo" />
                            </a>
                            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-roxo3 hover:underline rounded md:bg-transparent md:text-roxo3 md:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                <a href="#" class="block py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                <a href="#" onClick={deslogar} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}