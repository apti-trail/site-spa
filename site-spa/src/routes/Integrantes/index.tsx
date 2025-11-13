import type { Member } from "../../types/memberTypes";

export default function Integrantes() {
    const members: Member[] = [
        {nome: "Matheus Vecchi", rm: "RM561716", turma: "1TDSPO", foto:"./member-1.jpeg"},
        {nome: "Jonas Santos", rm: "RM563234", turma: "1TDSPO", foto:"./member-2.jpeg"}
    ]
    
    return(
        <main>
            <h1>Integrantes</h1>

            <div>
                
            </div>
        </main>
    );
}