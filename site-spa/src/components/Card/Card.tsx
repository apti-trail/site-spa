import type { Member } from "../../types/memberTypes";

export default function Card({nome, rm, turma, foto, linkedin, github}: Member) {
    return(
        <div className="max-w-xs mx-auto bg-black rounded-2xl overflow-hidden p-4 text-center text-white">
            <div className="flex justify-content">
                <img src={foto} alt={`Foto de ${nome}`} />
            </div>
            <h2 className="mt-4 mx-10">{nome}</h2>
            <p>{rm}</p>
            <p>{turma}</p>
            <div className="flex items-center justify-center gap-4">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                        2.239 5 5 5h14c2.761 0 5-2.239 
                        5-5v-14c0-2.761-2.239-5-5-5zm-11 
                        19h-3v-11h3v11zm-1.5-12.268c-.966 
                        0-1.75-.79-1.75-1.764s.784-1.764 
                        1.75-1.764 1.75.79 1.75 
                        1.764-.784 1.764-1.75 
                        1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                        0v5.604h-3v-11h3v1.765c1.396-2.586 
                        7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>

                <a href={github} target="_blank" rel="noopener noreferrer">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                    >
                        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 
                        3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 
                        0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 
                        0.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 
                        17.7 3.633 17.7c-1.087-0.744 0.084-0.729 
                        0.084-0.729 1.205 0.084 1.84 1.236 
                        1.84 1.236 1.07 1.835 2.809 1.304 
                        3.495 0.997 0.108-0.775 0.418-1.305 
                        0.762-1.604-2.665-0.305-5.466-1.332-5.466-5.93 
                        0-1.31 0.469-2.381 1.236-3.221-0.135-0.303-0.54-1.524 
                        0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.96-0.267 
                        1.98-0.399 3-0.405 1.02 0.006 2.04 0.138 
                        3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 
                        0.645 1.653 0.24 2.874 0.12 3.176 0.765 0.84 
                        1.23 1.911 1.23 3.221 0 4.61-2.805 5.62-5.475 
                        5.92 0.43 0.372 0.81 1.102 0.81 2.222 
                        0 1.606-0.015 2.896-0.015 3.286 0 0.315 0.21 0.69 
                        0.825 0.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>

                </a>
            </div>
        </div>
    );
}