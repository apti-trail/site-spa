import Card from "../../components/Card/Card";
import type { Member } from "../../types/memberTypes";


export default function Integrantes() {
    const members: Member[] = [
        {nome: "Matheus Vecchi", rm: "RM561716", turma: "1TDSPO", foto:"./member-1.jpeg", linkedin:"https://www.linkedin.com/in/matheusvecchi/", github: "https://github.com/Matheus-Vecchi"},
        {nome: "Jonas Santos", rm: "RM563234", turma: "1TDSPO", foto:"./member-2.jpeg", linkedin:"https://www.linkedin.com/in/jonas-santos-a34138220/", github: "https://github.com/JonasSantoos"}
    ]
    
    return(
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="text-center mb-6">Integrantes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {members.map((m, i) => <Card key={i} {...m}/>)}
            </div>
        </main>
    );
}