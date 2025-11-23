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
            titulo,
            usuarioId: usuario.id
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

            <section className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md hover:shadow-lg transition">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-left">
                    <label className="font-medium">Tema da trilha</label>
                    <input type="text" placeholder="Ex: JavaScript, Python..." value={titulo} onChange={(e) => setTitulo(e.target.value)} className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2c79]" required/>

                    <button type="submit" className="bg-[#26245f] text-white h-10 rounded-lg hover:opacity-90 transition">Criar trilha</button>
                </form>
            </section>

        </main>
    );
}