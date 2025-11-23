import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CriarTrilha() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const usuarioLogado = sessionStorage.getItem("usuarioLogado");

        if (!usuarioLogado) {
            navigate("/login");
            return;
        }

        const usuario = JSON.parse(usuarioLogado);

        const novaTrilha = {
            titulo: titulo,
            usuario: { id: usuario.id }
        };

        try {
            const response = await fetch("https://java-api-trail.onrender.com/trilhas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novaTrilha)
            });

            if (!response.ok) {
                throw new Error("Erro ao criar trilha.");
            }

            alert("Trilha criada com sucesso!");
            navigate("/trilhas");

        } catch (error) {
            console.error(error);
            alert("Erro ao criar trilha");
        }
    };


    return(
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="mb-6">Criar Trilha</h1>

            <section>
                <form onSubmit={handleSubmit}></form>
            </section>

        </main>
    );
}