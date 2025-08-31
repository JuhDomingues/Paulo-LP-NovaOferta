'use client';

import CheckCard from "./check";

export default function SectionCheck() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-12 xl:mb-[80px] ">
            <h1
                className="text-white title font-bold text-border lg:mx-20 mx-6"
            >
                A verdade que ninguém te conta sobre o Instagram…
            </h1>
            <h1
                className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-3 lg:font-bold text-border lg:px-[12%] lg:mx-20 mx-6"
            > Eu sei que é dificil você ver pessoas que tem menos conhecimento que você, se tornando mais influentes, conseguindo se expressar com clareza nas redes sociais, influenciando muito mais pessoas que você.
            <br/><br/>Qual é o resultado disso? Elas vendem mais. <br></br> <br />
            Por que não importa se elas estiveram na universidade, se elas tem diploma ou não, o que importa é que as vozes delas falam mais do que a sua.
            
            </h1>
            <div className="flex flex-col items-center lg:flex-row justify-center mt-12 lg:mt-[5vh] w-full max-w-[1200px]">
                <div className="flex flex-col items-center text-center lg:text-left xl:mr-0 mb-4 lg:mb-0 w-full lg:w-1/2">
                    <p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] mb-8 lg:mb-[6vh] max-w-[90%]"
                    >
                        Na internet, três coisas fazem você crescer: liberdade, reconhecimento e dinheiro. E isso é possível quando você sabe como usar o Instagram para se expressar com clareza e atrair os clientes certos.
                    </p>
                    <p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] max-w-[90%]"
                    >
                        Você pode continuar no ciclo da super qualificação técnica, ou pode se posicionar como autoridade e gerar resultados reais pelo Instagram
                    </p>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <div
                        className="w-full max-w-[500px]"
                    >
                        <CheckCard text="Já se sentiu frustrado vendo outros ganharem mais sabendo menos?" />
                    </div>
                    <div
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Não tem uma estratégia para atrair quem paga bem?" />
                    </div>
                    <div
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Tem medo de se expor, procrastina por não saber a estratégia que funciona?" />
                    </div>
                </div>
            </div>
        </div>
    );
}
