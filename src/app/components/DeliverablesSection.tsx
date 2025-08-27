'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GreenCheck from '@/images/Symbol.svg';

export default function DeliverablesSection() {
    const mainDeliverables = [
        {
            title: "Guia de 12 Passos para Autoridade no Instagram",
            description: "O material organizado que mostra cada passo de forma simples. Serve como manual prático para você se posicionar no digital e começar a atrair clientes de alto valor.",
            value: "R$497"
        },
        {
            title: "Curso de Implementação Prática",
            description: "Aulas curtas e diretas para você aplicar os 12 passos com clareza e rapidez. Zero enrolação, só o que gera resultado para lucrar mais sem desperdiçar tempo.",
            value: "R$497"
        }
    ];

    const bonuses = [
        {
            title: "Curso de Fotos Profissionais que Geram Autoridade",
            description: "Como criar imagens que transmitem valor e confiança — fundamentais para cobrar mais e ser percebido como premium.",
            value: "R$197"
        },
        {
            title: "Aula Empower Life: \"Reconhecendo o Medo\"",
            description: "Estratégia prática para vencer o medo da exposição e se posicionar com segurança, sem parecer amador.",
            value: "R$97"
        },
        {
            title: "Sessão em Grupo de Autoridade (ao vivo)",
            description: "Encontro exclusivo com Paulo Collet para orientação sobre comunicação e networking. O espaço certo para aprender como outros profissionais estão se tornando referência e lucrando mais com clientes de alto valor.",
            value: "R$497"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 lg:py-16">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 lg:mb-16">
                    O que você recebe <span className="text-[#8EF27E]">ao entrar</span>
                </h2>

                {/* Entregáveis Principais */}
                <motion.div
                    className="mb-12 lg:mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {mainDeliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                            >
                                <div className="flex items-start mb-4">
                                    <Image className="w-6 h-6 mt-1 mr-3 animate-pulse flex-shrink-0" src={GreenCheck} alt="" />
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-white leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <p className="text-[#8EF27E] font-bold text-lg md:text-xl">
                                    (Valor: {item.value})
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bônus Exclusivos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8EF27E] text-center mb-8 lg:mb-12">
                        Bônus Exclusivos:
                    </h3>

                    <div className="space-y-6 lg:space-y-8">
                        {bonuses.map((bonus, index) => (
                            <motion.div
                                key={index}
                                className="bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-start mb-4">
                                            <Image className="w-6 h-6 mt-1 mr-3 animate-pulse flex-shrink-0" src={GreenCheck} alt="" />
                                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                                                {bonus.title}
                                            </h4>
                                        </div>
                                        <p className="text-base md:text-lg text-white leading-relaxed">
                                            {bonus.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 md:mt-0 md:ml-6">
                                        <p className="text-[#8EF27E] font-bold text-lg md:text-xl">
                                            (Valor: {bonus.value})
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}