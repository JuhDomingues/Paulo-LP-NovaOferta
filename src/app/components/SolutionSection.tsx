'use client';


export default function SolutionSection() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-16">
            <div
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">
                    Por que este plano é <span className="text-[#8EF27E]">diferente?</span>
                </h2>

                <div
                    className="space-y-8 lg:space-y-10"
                >
                    <div className="text-left">
                        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6">
                            Você talvez já tenha tentado:
                        </p>
                        
                        <ul
                            className="space-y-4 text-lg md:text-xl text-white ml-6"
                        >
                            <li className="flex items-center">
                                <span className="text-[#8EF27E] mr-3">–</span>
                                Curso de seguidores…
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#8EF27E] mr-3">–</span>
                                Fórmula mágica de likes…
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#8EF27E] mr-3">–</span>
                                Hack de algoritmo…
                            </li>
                        </ul>
                    </div>

                    <p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed"
                    >
                        Mas nada disso trouxe clientes dispostos a pagar pelo que você realmente vale.
                    </p>

                    <div
                        className="bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-4">
                            <span className="text-[#8EF27E] font-bold text-2xl md:text-3xl">O Plano de Autoridade Digital é diferente:</span>
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                            Ele mostra como transformar sua presença online em autoridade reconhecida, desejada e bem paga — para que você atraia clientes de alto valor e não precise mais se desvalorizar para fechar negócios.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}