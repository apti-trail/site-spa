import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoCadastro } from "../../types/tipoCadastro";

export default function Cadastro() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<TipoCadastro>();

    const onSubmit = async (data: TipoCadastro) => {
        try {
            const response = await fetch("https://java-api-trail.onrender.com/usuarios", {
                method: "POST",
                headers: { "ContentType": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                alert("Erro ao cadastrar usuário!");
                return;
            }

            alert("Cadastro realizado com sucesso!");
            navigate("/login");
        } catch(error) {
            console.error(error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return(

    );
}