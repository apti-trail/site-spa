import type { TrilhaCardProps } from "../../types/trilhaCardProps"


export default function Trilhacard({ titulo }: TrilhaCardProps) {
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
        </div>
    );
}