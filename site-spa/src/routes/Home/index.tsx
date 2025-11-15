export default function Home() {
    return(
        <main className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="mb-6">Bem vindo ao Apti<span className="text-[#2f2c79]">Trail</span></h1>

            <h2 className="max-w-[600px] text-black">O AptiTrail é uma plataforma criada para facilitar a criação, organização e acompanhamento de trilhas de estudo personalizadas.</h2>

            <section className="max-w-[900px] w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-center mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-[#2f2c79]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3m3-3c1.657 0 3 1.343 3 3m-3-3v10m0 0l-3-3m3 3l3-3" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Monte suas trilhas</h3>
                    <p className="text-gray-600 text-sm">Crie trilhas personalizadas do jeito que quiser.</p>
                </div>

                <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-center mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-[#2f2c79]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Acompanhe seu progresso</h3>
                    <p className="text-gray-600 text-sm">Veja sua evolução em cada trilha de estudo.</p>
                </div>

                <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-center mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-[#2f2c79]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Organização total</h3>
                    <p className="text-gray-600 text-sm">Visualize suas trilhas em um único lugar.</p>
                </div>
            </section>

            <section className="mt-20 max-w-[700px] text-center">
                <h2 className="font-bold mb-4">Comece sua jornada de aprendizado agora mesmo!</h2>
                <button className="bg-[#26245f] text-white h-10">Criar trilha</button>
            </section>


        </main>
    );
}