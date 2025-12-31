import { FaHeart, FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss, SiSanity } from 'react-icons/si';
import Container from './Container';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full py-12 px-4 bg-dark-purple border-t border-white/5 relative overflow-hidden'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-light-purple/50 to-transparent' />

            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='flex flex-col items-center md:items-start gap-2'>
                        <div className='text-xl font-black uppercase tracking-tighter text-white'>
                            Iago<span className='text-light-purple'>Rodrigues</span>
                        </div>
                        <p className='text-white/40 text-xs font-medium'>
                            &copy; {currentYear} • Todos os direitos reservados.
                        </p>
                    </div>

                    <nav className='flex gap-6 text-white/40 text-xs uppercase font-bold tracking-widest'>
                        <a href='#hero' className='hover:text-light-purple transition-colors'>Sobre</a>
                        <a href='#skills' className='hover:text-light-purple transition-colors'>Skills</a>
                        <a href='#projects' className='hover:text-light-purple transition-colors'>Projetos</a>
                        <a href='#contact' className='hover:text-light-purple transition-colors'>Contato</a>
                    </nav>

                    <div className='flex flex-col items-center md:items-end gap-2'>
                        <p className='text-white/30 text-[10px] uppercase font-bold tracking-[0.2em]'>
                            Built with
                        </p>
                        <div className='flex gap-4 text-white/20'>
                            <div className='group relative'>
                                <FaReact size={18} className='hover:text-[#61dafb] transition-colors' title='React' />
                            </div>
                            <div className='group relative'>
                                <SiTailwindcss size={18} className='hover:text-[#38bdf8] transition-colors' title='Tailwind CSS' />
                            </div>
                            <div className='group relative'>
                                <SiSanity size={18} className='hover:text-[#f03e2f] transition-colors' title='Sanity CMS' />
                            </div>
                            <div className='group relative'>
                                <FaNodeJs size={18} className='hover:text-[#339933] transition-colors' title='Node.js' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mt-12 pt-8 border-t border-white/5 flex justify-center items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest'>
                    Desenvolvido com <FaHeart className='text-light-purple animate-pulse' /> por Iago Rodrigues.
                </div>
            </Container>
        </footer>
    );
}