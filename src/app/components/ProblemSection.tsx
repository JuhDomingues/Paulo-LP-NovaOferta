'use client';


export default function ProblemSection() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-16">
            <div
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">
                    O problema do <span className="text-[#8EF27E]">digital hoje</span>…
                </h2>

                <div
                    className="space-y-6 lg:space-y-8 text-left"
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                        O Instagram é a maior plataforma de validação profissional do mundo na atualidade.
                        <br /><br />
                        É nele que clientes decidem se confiam em você — e quanto estão dispostos a pagar pelo seu trabalho.
                    </p>

                    <p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed"
                    >
                        Só que no Instagram, muitas vezes <span className="text-[#8EF27E] font-bold">o mais conhecido vence o melhor</span>.
                    </p>

                    <p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed"
                    >
                        Você é excelente no que faz, mas continua vendo profissionais menos preparados ocupando os espaços que deveriam ser seus.
                    </p>

                    <p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                    >
                        <span className="text-[#8EF27E] font-bold">Não é falta de capacidade.</span>
                        <br /><br />
                        É falta de posicionamento digital estratégico para atrair clientes de alto valor que reconheçam o seu preço e aumentem sua lucratividade.
                    </p>
                </div>
            </div>
        </div>
    );
}