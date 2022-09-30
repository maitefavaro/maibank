export const Navbar = () => {
    return (
        <>
            <div className="md:flex items-center justify-between px-6 py-3 bg-transparent w-full fixed">
                <img className="h-14 rounded-full my-4 ml-4 " src="img/logo-removebg-preview.png" alt="Erro" />

                <a className="py-2 px-6 rounded-xl" href="https://api.whatsapp.com/send?phone=5519989558913&text=Ol%C3%A1!">
                    <div className=" h-6  md:flex md:flex-row md:gap-1 md:justify-end md:px-2 hidden lg:visible text-white font-bold ">
                        <p className="text-2xl">Login</p>
                        {/* <img src="img/login.png" alt="Erro" /> */}
                    </div>
                </a>

                <div className="lg:hidden ">
                    <img src="img/listagem.png" alt="Erro" />
                </div>

            </div>
        </>
    )
}