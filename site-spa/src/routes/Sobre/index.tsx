export default function Sobre() {
    return(
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="mb-6">Sobre o Apti<span className="text-[#2f2c79]">Trail</span></h1>

            <h2 className="max-w-[700px] text-gray">
                O AptiTrail é uma plataforma pensada para ajudar estudantes e equipes a criarem, organizarem 
                e acompanharem trilhas de estudo de forma simples e eficiente. Nosso objetivo é tornar 
                o aprendizado mais acessível, estruturado e motivador.
            </h2>

            <section className="max-w-[800px] mt-12 space-y-4">
                <h1>Nossa missão</h1>
                <p className="text-gray-700 text-[16px] md:text-[18px]">Facilitar a jornada de aprendizado, oferecendo uma experiência intuitiva para criação de trilhas, 
                acompanhamento de progresso e incentivo ao desenvolvimento contínuo.</p>
            </section>

            <section className="max-w-[800px] mt-12 space-y-6">
                <h1>Valores do projeto</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                    <div className="p-6 shadow-md rounded-xl bg-gray-100">
                        <h2 className="font-semibold mb-2">Simplicidade</h2>
                        <p className="text-gray-700 text-sm">Interface clara e fácil de navegar, ideal para qualquer usuário.</p>
                    </div>

                    <div className="p-6 shadow-md rounded-xl bg-gray-100">
                        <h2 className="font-semibold mb-2">Organização</h2>
                        <p className="text-gray-700 text-sm">Trilhas estruturadas que ajudam a manter o foco nos estudos.</p>
                    </div>

                    <div className="p-6 shadow-md rounded-xl bg-gray-100">
                        <h2 className="font-semibold mb-2">Evolução</h2>
                        <p className="text-gray-700 text-sm">Acompanhamento contínuo do progresso e incentivo ao aprendizado</p>
                    </div>
                </div>
            </section>
        </main>
    );
}