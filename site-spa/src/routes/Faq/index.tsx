import { useState } from "react";

export default function Faq() {
    const faqs = [
        {
            pergunta: "O que é o AptiTrail?",
            resposta:
                "O AptiTrail é uma plataforma que permite criar e acompanhar trilhas de estudo de forma simples, organizada e personalizada."
        },
        {
            pergunta: "O AptiTrail é gratuito?",
            resposta:
                "Sim, mas temos o plano pago."
        },
        {
            pergunta: "Para quem o AptiTrail é indicado?",
            resposta:
                "Para estudantes, professores, equipes e qualquer pessoa que queira estruturar melhor seus estudos."
        },
        {
            pergunta: "Posso criar quantas trilhas eu quiser?",
            resposta:
                "Sim! Você pode criar quantas trilhas desejar e organizá-las da forma que preferir."
        },
        {
            pergunta: "É necessário fazer login para usar?",
            resposta:
                "Sim, o login é necessário para salvar seu progresso, trilhas e atividades."
        },
        {
            pergunta: "Como acompanho meu progresso?",
            resposta:
                "Cada trilha possui indicadores visuais de avanço, permitindo acompanhar facilmente sua evolução."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return(
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="mb-6">Perguntas Frequentes</h1>

            <section className="max-w-[800px] w-full space-y-4"> 
                {faqs.map((item, index) => (
                    <div key={index} className="w-full p-6 shadow-md bg-gray-100 rounded-xl transition">
                        <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left bg-transparent">
                            <h2 className="font-semibold text-[16px] md:text-[18px]">{item.pergunta}</h2>

                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                    openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"}`}>
                            <p className="text-gray-700 text-sm md:text-[16px] text-left">{item.resposta}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}