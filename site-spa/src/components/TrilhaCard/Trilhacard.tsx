import type { TrilhaCardProps } from "../../types/trilhaCardProps"


export default function Trilhacard({ titulo, onClick }: TrilhaCardProps) {
    return(
        <div className="bg-white shadow-md rounded-xl p-4 
                w-full h-40                      /* mobile */
                border border-gray-200 
                hover:shadow-lg transition cursor-pointer
                flex flex-col

                sm:w-60 sm:h-44                  
                md:w-64 md:h-48                  
            ">
            <h2 className="text-base md:text-lg font-semibold text-gray-800">{titulo}</h2>

            <div className="w-full h-px  bg-gray-800 my-3"></div>

            <div className="flex flex-1 items-center justify-center">
                <button onClick={onClick} className="mt-8 bg-[#26245f] text-white h-8 px-6 rounded-lg flex items-center justify-center font-medium hover:opacity-90 transition">Entrar</button>
            </div>
        </div>
    );
}