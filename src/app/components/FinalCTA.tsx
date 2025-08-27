'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/116629/offer/gJhwlg';
    };

    return (
        <div className="container mx-auto px-4 py-16 lg:py-24">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16">
                    Agora é a <span className="text-[#8EF27E]">sua vez</span>…
                </h2>

                <motion.div
                    className="space-y-8 lg:space-y-10 mb-12 lg:mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                        Você pode continuar tentando sozinho, fechando com clientes que não reconhecem seu valor…
                    </p>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed bg-[rgba(226,246,227,0.06)] p-6 lg:p-8 rounded-2xl border border-[#8EF27E]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Ou pode aplicar um plano <span className="text-[#8EF27E] font-bold">validado</span> que já ajudou dezenas de profissionais como você a conquistar autoridade, clientes de alto valor e aumento de lucratividade.
                    </motion.p>

                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-[#8EF27E] font-bold"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        O próximo passo é seu.
                    </motion.p>
                </motion.div>

                <motion.button
                    onClick={handleClick}
                    className="bg-[#8EF27E] text-black font-bold text-lg md:text-xl lg:text-2xl py-4 px-8 lg:py-6 lg:px-12 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    GARANTIR MEU PLANO DE AUTORIDADE DIGITAL POR R$97
                </motion.button>

                <motion.p
                    className="text-sm md:text-base text-white mt-6 opacity-75"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.75 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    Garantia de 7 dias • Pagamento 100% seguro
                </motion.p>
            </motion.div>
        </div>
    );
}