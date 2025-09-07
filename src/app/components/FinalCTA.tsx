'use client';


export default function FinalCTA() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/116629/offer/Ak10v6';
    };

    return (
        <div className="container mx-auto px-4 py-16 lg:py-24">
            <div
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16">
                    Agora é a <span className="text-[#8EF27E]">sua vez</span>…
                </h2>

                <div
                    className="space-y-8 lg:space-y-10 mb-12 lg:mb-16"
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                        Você pode continuar tentando sozinho, fechando com clientes que não reconhecem seu valor…
                    </p>

                    <p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                    >
                        Ou pode aplicar um plano <span className="text-[#8EF27E] font-bold">validado</span> que já ajudou dezenas de profissionais como você a conquistar autoridade, clientes de alto valor e aumento de lucratividade.
                    </p>

                    <p
                        className="text-xl md:text-2xl lg:text-3xl text-[#8EF27E] font-bold"
                    >
                        O próximo passo é seu.
                    </p>
                </div>

                <button
                    onClick={handleClick}
                    className="bg-[#8EF27E] text-black font-bold text-lg md:text-xl lg:text-2xl py-4 px-8 lg:py-6 lg:px-12 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                    GARANTIR MEU PLANO DE AUTORIDADE DIGITAL POR R$67
                </button>

                <p
                    className="text-sm md:text-base text-white mt-6 opacity-75"
                >
                    Garantia de 7 dias • Pagamento 100% seguro
                </p>
            </div>
        </div>
    );
}