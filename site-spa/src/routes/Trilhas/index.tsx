import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { TipoTrilha } from "../../types/tipoTrilha";
import Trilhacard from "../../components/TrilhaCard/Trilhacard";


export default function Trilhas() {
    const navigate = useNavigate();
    const[trilhas, setTrilhas] = useState<TipoTrilha[]>([]);
    const[hasFetched, setHasFetched] =useState(false);

    useEffect(() => {
        if (hasFetched) return;
        setHasFetched(true);

        const usuarioLogado = sessionStorage.getItem("usuarioLogado");

        if (!usuarioLogado) {
            navigate("/login");
            return;
        }

        const usuario = JSON.parse(usuarioLogado);
        const usuarioId = usuario.id;

        const fetchData = async () => {
            try {
                const response = await fetch(`https://java-api-trail.onrender.com/trilhas/usuario/${usuarioId}`);

                if (!response.ok) {
                    throw new Error("Erro ao buscar trilhas");
                }

                const data = await response.json();
                setTrilhas(data);
            } catch (error) {
                console.error("Erro ao carregar trilhas:", error);
            }
        };

        fetchData();
    }, [navigate]);

    return (
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="mb-6">Minhas trilhas</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {trilhas.map((trilha) => (
                    <Trilhacard
                        key={trilha.id}
                        titulo={trilha.titulo}
                        onClick={() => navigate(`/trilha/${trilha.id}`)}
                    />
                ))}
            </div>
        </main>
    );
}