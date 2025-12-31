import Container from '../components/layout/Container';
import { FaCode, FaGraduationCap, FaRocket, FaTerminal } from 'react-icons/fa6';

export default function AboutMe() {
    return (
        <section id='about-me' className='w-full pt-10 pb-16 md:pb-24 bg-dark-purple backdrop-blur-sm flex items-center relative'>
            <Container>
                <div className='absolute hidden md:block top-0 left-1/4 w-96 h-96 bg-purple-900/20 blur-[120px] pointer-events-none' />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h2 className='section-title'>
                                Sobre <span className='text-light-purple'>Mim</span>
                            </h2>
                            <p className='section-subtitle'>
                                <span className='h-px w-6 bg-light-purple/50' />
                                Minha jornada e objetivos
                            </p>
                        </div>

                        <div className='space-y-4 text-white/70 text-base md:text-lg leading-relaxed font-light'>
                            <p>
                                Olá! Me chamo <strong className='text-white font-semibold'>Iago Rodrigues</strong>. Sou um desenvolvedor apaixonado por transformar lógica pura em soluções reais que impactam pessoas.
                            </p>
                            <p>
                                Atualmente, sou <span className='text-white font-medium border-b border-light-purple/30 pb-0.5'>graduando em Engenharia de Software</span> e atuo como Desenvolvedor Full Stack, unindo a precisão do backend com o cuidado visual do UI/UX.
                            </p>
                            <p>
                                Acredito que o código excelente é aquele que é limpo, escalável e, acima de tudo, resolve problemas reais de forma intuitiva.
                            </p>
                        </div>

                        <div className='pt-6'>
                            <a href='#contact' className='
                                group
                                inline-flex items-center gap-3
                                px-8 py-3.5 rounded-full
                                
                                bg-linear-to-r from-light-purple to-[#7c3aed]
                                border border-white/20
                                text-white text-base font-medium
                                
                                shadow-[0_0_20px_rgba(168,85,247,0.3)]
                                
                                hover:scale-105 
                                hover:brightness-110
                                hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                                
                                active:scale-95
                                active:brightness-90
                                active:shadow-inner
                                
                                transition-all duration-300 ease-out
                            '>
                                <FaRocket className='
                                    text-md
                                    transition-transform duration-300
                                    group-hover:translate-x-1 
                                    group-hover:-translate-y-1
                                    group-active:scale-90
                                ' />
                                <span>Vamos conversar?</span>
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2'>
                            <div className='flex items-center gap-4 p-5 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md hover:border-light-purple/20 transition-all group'>
                                <div className='shrink-0 w-12 h-12 flex items-center justify-center bg-light-purple/10 rounded-xl text-light-purple group-hover:scale-110 transition-transform'>
                                    <FaGraduationCap size={22} />
                                </div>
                                <div>
                                    <h4 className='text-white font-bold text-base'>Educação</h4>
                                    <p className='text-white/40 text-xs leading-tight flex flex-col gap-1'>
                                        Engenharia de Software
                                        <span className='text-light-purple/70'>
                                            (Em curso)
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 p-5 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md hover:border-green-500/20 transition-all group'>
                                <div className='shrink-0 w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform'>
                                    <FaTerminal size={20} />
                                </div>
                                <div>
                                    <h4 className='text-white font-bold text-base'>Objetivo</h4>
                                    <p className='text-white/40 text-xs italic leading-tight'>'Software limpo e de alto impacto.'</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl bg-white/3 border border-white/5 backdrop-blur-md hover:border-blue-500/20 transition-all group'>
                            <div className='flex items-center gap-5'>
                                <div className='shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform'>
                                    <FaCode size={24} />
                                </div>
                                <div>
                                    <h4 className='text-white font-bold text-lg'>Foco Tech</h4>
                                    <p className='text-white/40 text-sm'>Full Stack Web & Mobile</p>
                                </div>
                            </div>

                            <div className='flex gap-2 flex-wrap md:justify-end'>
                                {['React', 'Node.js', 'TypeScript'].map(t => (
                                    <span key={t} className='text-[10px] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 uppercase tracking-widest font-bold'>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
