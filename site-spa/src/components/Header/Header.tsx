import { useEffect, useState } from "react"
import Navbar from "../NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const[logado, setLogado] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const atualizarLogin = () => {
            const user = sessionStorage.getItem("usuarioLogado");
            setLogado(!!user);
        };

        atualizarLogin();
        window.addEventListener("storage", atualizarLogin);

        return() => window.removeEventListener("storage", atualizarLogin);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("usuarioLogado");
        window.dispatchEvent(new Event("storage"));
        navigate("/login");
    };

    return(
        <header className="shadow-lg flex items-center px-6">
            <div className="font-bold text-xl w-1/3">
                <p>Apti<span className="text-[#2f2c79]">Trail</span></p>
            </div>

            <div className="flex-1 flex justify-end md:justify-center">
                <Navbar logado={logado} onLogout={handleLogout}/>
            </div>
            
            <div className="hidden md:flex gap-2.5 w-1/3 justify-end">
                {!logado ? (
                    <>
                        <Link to="/login">
                            <button className="text-white w-[75px] rounded-[5px] h-[32px]">Login</button>
                        </Link>

                        <Link to="/cadastro">
                            <button className="text-white bg-[#2f2c79] w-[95px] rounded-[5px] h-[32px]">Cadastro</button>
                        </Link>
                    </>
                ) : (
                    <button onClick={handleLogout} className="text-red-600 font-semibold w-[75px] rounded-[5px] h-[32px]">Sair</button>
                )}
            </div>
        </header>
    );
}