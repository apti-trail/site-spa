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
                "Sim! O AptiTrail foi desenvolvido como um projeto acadêmico e pode ser usado gratuitamente pelos usuários."
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
        <main>
            <h1>Perguntas Frequentes</h1>

        </main>
    );
}