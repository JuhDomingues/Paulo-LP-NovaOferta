'use client';

import Image from "next/image";
import GreenCheck from '@/images/Symbol.svg';
import Pix from '@/images/pix.svg';
import PauloBlack from '@/images/bio.jpeg'

export default function SellingInfo() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/116629/offer/fgApD3';
    };

    return (
        <div className="container mx-auto px-4">
            {/* Seção Título Principal */}
            <div className="mb-8 md:mb-12 lg:mb-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-white mb-6 mx-2">
                    Qual é o valor real do plano?
                </h1>
            </div>

            {/* Card de Vendas */}
            <div className="flex justify-center mb-12 md:mb-20 lg:mb-24">
                <div className="w-full lg:w-11/12 xl:w-10/12 bg-[rgba(226,246,227,0.06)] py-6 md:py-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl lg:rounded-[55px] border border-[#8EF27E] px-4 md:px-8 space-y-6 lg:space-y-0">
                    {/* Texto e Lista */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-normal text-white mb-4">
                            Se eu entregasse só o Guia, <br className="hidden lg:block"/> 
                            já valeria os <strong className="text-[#8EF27E] animate-pulse">R$497</strong>.
                        </h1>
                        <h2 className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8">
                            Mas você ainda recebe o Curso (R$497) + todos os bônus (R$791).
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {[
                                "Guia de 12 Passos para Autoridade no Instagram (Valor: R$497)",
                                "Curso de Implementação Prática (Valor: R$497)",
                                "Curso de Fotos Profissionais que Geram Autoridade (Valor: R$197)",
                                "Aula Empower Life: \"Reconhecendo o Medo\" (Valor: R$97)",
                                "Sessão em Grupo de Autoridade (ao vivo) (Valor: R$497)"
                            ].map((text, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <Image className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0 animate-pulse" src={GreenCheck} alt="" />
                                    <p className="text-sm sm:text-base md:text-lg text-white text-start">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Preço e Botão */}
                    <div className="lg:w-1/2 flex flex-col items-center justify-center w-full mt-6 lg:mt-0">
                        <div className="text-center space-y-4 w-full">
                            <p className="text-lg md:text-xl text-white">
                                Valor total: <span className="line-through">R$1.785,00</span>
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                HOJE POR APENAS<br />
                                <strong className="text-[#8EF27E] animate-pulse">R$97,00</strong>
                            </h1>
                            <p className="text-base md:text-lg text-white mt-4">
                                Isso é menos do que um jantar fora — para ter em mãos o plano que pode colocar clientes de alto valor batendo à sua porta.
                            </p>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">À vista via PIX</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">Cartão em até 12x</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className="mt-6 md:mt-8 py-3 px-6 w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#8EF27E] text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                        >
                            QUERO O PLANO DE AUTORIDADE DIGITAL
                        </button>
                    </div>
                </div>
            </div>

            {/* Seção Paulo Collet */}
            <div className="mb-12 md:mb-20 lg:mb-24">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">
                    Quem é Paulo Collet ?
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
                    <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
                        <Image
                            src={PauloBlack}
                            alt="Paulo André Collet"
                            className="w-full h-auto rounded-lg"
                            width={500}
                            height={600}
                            priority={false}
                            loading="lazy"
                            quality={90}
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-4 md:space-y-6">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left">
                            Criador do método que vai transformar sua presença no Instagram.
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-white font-light text-justify leading-relaxed">
                            Paulo André Collet é mentor de carreira há 17 anos, especialista em posicionamento e autoridade profissional. Ao longo de sua trajetória, estudou e treinou com grandes referências internacionais e nacionais como Tony Robbins, T. Harv Eker e Roberto Shinyashiki, aplicando seus ensinamentos ao desenvolvimento de profissionais de alto nível.
                            <br/><br/>
                            Já atuou como treinador em mais de 400 eventos realizados em 8 estados do Brasil e no Chile.
                            <br/><br/>
                            Criador do Método Autoridade Máxima, ajuda profissionais a se tornarem referência em suas áreas e a aumentarem em até 10 vezes seu faturamento, por meio de posicionamento estratégico, influência e valorização de marca pessoal.    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}