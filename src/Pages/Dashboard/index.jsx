import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { getSession } from "./../../Session";
export const Dashboard = () => {
  const navigate = new useNavigate();
  useEffect(() => {
    console.log(getSession());

    if (!getSession()) {
      navigate("/login");
    }
  }, []);

  function deslogar() {
    navigate("/");
  }
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh" }}>
          <div
            className="w-full flex px-2 sm:px-4 py-2.5 h-screen justify-around  bg-gradient-to-r
                        from-roxo1
                        via-roxo2
                        to-roxo3
                        background-animate"
          >
            <div class="container flex flex-wrap md:flex items-center justify-between px-6 py-3 bg-transparent w-full fixed">
              <a href="" class="">
                <img
                  src="/img/logo-removebg-preview.png"
                  class="h-6 mr-3 sm:h-9"
                  alt="MB Logo"
                />
              </a>

              <div className="flex flex-row gap-4">
                <div
                  class="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-5 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        class="block text-white bg-roxo3 hover:underline rounded md:bg-transparent md:text-roxo3 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo3 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Pricing
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a
                  href="#"
                  onClick={deslogar}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-roxo2 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </a>
              </div>
              </div>
              
            </div>
            <div>oi</div>
          </div>
        
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
