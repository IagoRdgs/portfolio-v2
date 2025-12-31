import { FaPaperPlane, FaEnvelope, FaWhatsapp } from 'react-icons/fa6';
import Container from '../components/layout/Container';

export default function Contact() {
    return (
        <section id='contact' className='relative pt-10 pb-16 md:pb-24 px-4 bg-dark-purple overflow-hidden'>
            <Container>
                <div className='absolute -bottom-24 -right-24 w-96 h-96 bg-light-purple/10 rounded-full blur-[120px] pointer-events-none' />

                <div className='mx-auto'>
                    <div className='mb-12'>
                        <h2 className='section-title'>
                            Vamos <span className='text-light-purple'>Conversar?</span>
                        </h2>
                        <div className='section-subtitle'>
                            <div className='h-px w-8 bg-light-purple/50' />
                            Gostou do meu trabalho? Entre em contato.
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                        <div className='space-y-8'>
                            <p className='text-white/70 text-lg leading-relaxed max-w-md'>
                                Estou sempre aberto a novos desafios e parcerias. Seja para um projeto,
                                uma dúvida ou apenas para trocar ideias sobre tecnologia, sinta-se à vontade!
                            </p>

                            <div className='space-y-4'>
                                <a
                                    href='mailto:iago.andreof@gmail.com'
                                    target='_blank'
                                    className='flex items-center gap-4
                                    p-5 rounded-2xl
                                    bg-white/2 border
                                    border-white/5 hover:border-light-purple/50
                                    group
                                    shadow-lg hover:shadow-purple-500/10
                                    hover:bg-white/5
                                    transition-all duration-500'
                                >
                                    <div className='w-12 h-12 flex items-center justify-center bg-light-purple/10 rounded-xl text-light-purple group-hover:scale-110 group-hover:bg-light-purple/20 transition-all'>
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className='text-white/40 text-[10px] uppercase font-bold tracking-widest'>Mande um e-mail</p>
                                        <p className='text-white font-medium group-hover:text-light-purple transition-colors'>iago.andreof@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href='https://wa.me/5585981463192'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-4
                                    p-5 rounded-2xl
                                    bg-white/2 border
                                    border-white/5 hover:border-green-500/50
                                    group
                                    shadow-lg hover:shadow-green-500/10
                                    hover:bg-white/5
                                    transition-all duration-500'
                                >
                                    <div className='w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 group-hover:bg-green-500/20 transition-all'>
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <p className='text-white/40 text-[10px] uppercase font-bold tracking-widest'>WhatsApp</p>
                                        <p className='text-white font-medium group-hover:text-green-400 transition-colors'>Chamar no chat</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <form
                            action='https://formspree.io/f/mgegjaqw'
                            method='POST'
                            className='p-8 rounded-3xl bg-white/3 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6'
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-xs uppercase tracking-widest text-white/40 font-bold ml-1'>Nome</label>
                                    <input
                                        type='text'
                                        name='name'
                                        required
                                        placeholder='Seu nome'
                                        className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-light-purple/50 focus:ring-1 focus:ring-light-purple/50 transition-all'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-xs uppercase tracking-widest text-white/40 font-bold ml-1'>E-mail</label>
                                    <input
                                        type='email'
                                        name='email'
                                        required
                                        placeholder='seu@email.com'
                                        className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-light-purple/50 focus:ring-1 focus:ring-light-purple/50 transition-all'
                                    />
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <label className='text-xs uppercase tracking-widest text-white/40 font-bold ml-1'>Mensagem</label>
                                <textarea
                                    name='message'
                                    required
                                    rows={5}
                                    placeholder='Como posso te ajudar?'
                                    className='w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-light-purple/50 focus:ring-1 focus:ring-light-purple/50 transition-all resize-none'
                                />
                            </div>

                            <button
                                type='submit'
                                className='
                                w-full group
                                inline-flex items-center justify-center gap-3
                                px-8 py-4 rounded-xl
                                bg-linear-to-r from-light-purple to-[#7c3aed]
                                border border-white/20
                                text-white text-base font-bold
                                shadow-[0_0_20px_rgba(168,85,247,0.3)]
                                hover:scale-[1.02] 
                                hover:brightness-110
                                hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
                                active:scale-95
                                transition-all duration-300
                                cursor-pointer
                            '
                            >
                                <span>Enviar Mensagem</span>
                                <FaPaperPlane className='text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}