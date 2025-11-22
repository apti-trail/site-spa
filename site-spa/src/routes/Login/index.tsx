import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoLogin } from "../../types/tipoLogin";

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<TipoLogin>();

    const onSubmit = async (data: TipoLogin) => {
        try {
            const response = await fetch("https://java-api-trail.onrender.com/usuarios/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                alert("E-mail ou senha incorretos!");
                return;
            }

            const usuario = await response.json();

            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));

            window.dispatchEvent(new Event("storage"));

            alert("Login realizado com sucesso!");
            
            navigate("/");
        } catch(error) {
            console.error(error);
            alert("Erro ao fazer login.");
        }
    }

    return(
        <main className="min-h-screen flex flex-col items-center text-center px-6 py-20 bg-gray-50">
            <h1 className="mb-12 font-bold">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md flex flex-col space-y-4 text-left">
                <input type="email" placeholder="E-mail" {...register("email", { required: "O e-mail é obrigatório" })} className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2c79]" />
                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

                <input type="password" placeholder="Senha" {...register("senha", { required: "A senha é obrigatória" })} className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2c79]" />
                {errors.senha && <span className="text-red-600 text-sm">{errors.senha.message}</span>}

                <button type="submit" className="bg-[#26245f] text-white h-10 rounded-lg mt-4 hover:opacity-90 transition mx-auto w-[140px]">Entrar</button>
            </form>
        </main>
    );
}