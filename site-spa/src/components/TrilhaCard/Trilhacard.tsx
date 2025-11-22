import type { TrilhaCardProps } from "../../types/trilhaCardProps"


export default function Trilhacard({ titulo, onClick }: TrilhaCardProps) {
    return(
        <div className="bg-white shadow-md rounded-xl p-5 w-64 h-48 border border-gray-200 
                       hover:shadow-lg transition cursor-pointer 
                       flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">{titulo}</h2>

            <div className="w-full h-px  bg-gray-800 my-3"></div>

            <div className="flex flex-1 items-center justify-center">
                <button onClick={onClick} className="mt-8 bg-[#26245f] text-white h-8 px-6 rounded-lg flex items-center justify-center font-medium hover:opacity-90 transition">Entrar</button>
            </div>
        </div>
    );
}