import { useEffect, useState } from "react"
import Navbar from "../NavBar/Navbar";


export default function Header() {
    return(
        <header className="shadow-lg flex items-center px-6">
            <div className="font-bold text-xl w-1/3">
                <p>Apti<span className="text-[#2f2c79]">Trail</span></p>
            </div>
            <div className="flex-1 flex justify-end md:justify-center">
                <Navbar/>
            </div>
            
            <div className="hidden md:flex gap-2.5 w-1/3 justify-end">
                <button className="text-white w-[75px] rounded-[5px] h-[32px]">Login</button>
                <button className="text-white bg-[#2f2c79] w-[95px] rounded-[5px] h-[32px]">Cadastro</button>
            </div>
        </header>
    );
}