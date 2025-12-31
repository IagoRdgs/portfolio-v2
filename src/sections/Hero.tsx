import Container from '../components/layout/Container';
import hero from '../assets/profile.png';
import { FaChevronDown, FaFigma, FaLaptopCode, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { TbDevicesCode } from 'react-icons/tb';


export default function Hero() {
    return <section id='hero' className='
        w-full min-h-svh
        pb-24 md:pb-36
        pt-28
    '>
        <Container>
            <div className='absolute top-1/4 hidden md:block left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-light-purple/10 blur-[120px] pointer-events-none' />


            <div className='relative w-fit mx-auto mb-6 md:mb-8'>
                <div className='bg-[url(/wave.svg)] bg-no-repeat bg-center bg-cover
                        w-48 h-48 md:w-64 md:h-64 rounded-full
                        border-2 border-light-purple/50
                        overflow-hidden relative shadow-2xl shadow-purple-500/10'
                >
                    <img src={hero} alt='Iago Rodrigues' className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='flex flex-col gap-4 items-center'>
                <div className='text-center space-y-2'>
                    <p className='text-purple-100/70 text-lg md:text-xl font-base'>Olá, eu sou</p>
                    <h1 className='
                            bg-[url(/background_text.png)] bg-clip-text bg-repeat
                            text-white/20 text-[38px] md:text-6xl font-black
                            uppercase tracking-wide leading-none
                            animate-text-bg-anim
                        '>
                        Iago Rodrigues
                    </h1>
                </div>

                <p className='text-purple-100/70 text-base md:text-lg text-center font-medium tracking-wide'>
                    Desenvolvedor Full Stack | Web & Mobile
                </p>

                <div className='flex gap-3 items-center rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] border border-purple-500/30 bg-purple-500/5 px-5 py-2 text-purple-200'>
                    <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]'></span>
                    Disponível para oportunidades
                </div>

                <div className='flex items-center gap-4 z-50 mt-2 md:mt-0
                    md:fixed md:right-6 md:top-1/2 md:-translate-y-1/2
                    md:flex md:flex-col
                    p-1 md:p-2 rounded-full
                    bg-white/3 border border-white/10
                    backdrop-blur-md shadow-2xl'>
                    <a href='https://linkedin.com/in/Iago-rdgs' target='_blank'
                        className='
                            w-12 h-12
                            flex items-center justify-center
                            rounded-full text-purple-100/70 md:text-white/50
                            hover:bg-[#0e76a8]/80 hover:text-white hover:shadow-[0_0_14px_rgba(14,118,168,0.4)]
                            active:bg-[#0e76a8]/80 active:text-white active:shadow-[0_0_14px_rgba(14,118,168,0.4)]
                            transition-all duration-300'
                    >
                        <FaLinkedinIn size={20} />
                    </a>

                    <div className='h-6 w-px md:h-px md:w-6 bg-white/10 mx-auto'></div>

                    <a href='https://wa.me/5585981463192' target='_blank'
                        className='
                            w-12 h-12
                            flex items-center justify-center
                            rounded-full text-purple-100/70 md:text-white/50
                            hover:bg-[#25D366]/80 hover:text-white hover:shadow-[0_0_14px_rgba(37,211,102,0.4)]
                            active:bg-[#25D366]/80 active:text-white active:shadow-[0_0_14px_rgba(37,211,102,0.4)]
                            transition-all duration-300'
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>

            <div className='max-w-xl mx-auto flex gap-8 justify-between mt-8 md:mt-18 relative pb-12'>
                <div className='flex flex-col items-center gap-3 group'>
                    <div className='p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-light-purple/30 transition-colors'>
                        <FaLaptopCode className='text-3xl md:text-4xl text-white/80 group-hover:text-light-purple transition-colors' />
                    </div>
                    <span className='text-xs font-bold uppercase tracking-widest text-white/40'>Web</span>
                </div>

                <div className='flex flex-col items-center gap-3 group'>
                    <div className='p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-light-purple/30 transition-colors'>
                        <TbDevicesCode className='text-3xl md:text-4xl text-white/80 group-hover:text-light-purple transition-colors' />
                    </div>
                    <span className='text-xs font-bold uppercase tracking-widest text-white/40'>Mobile</span>
                </div>

                <div className='flex flex-col items-center gap-3 group'>
                    <div className='p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-light-purple/30 transition-colors'>
                        <FaFigma className='text-3xl md:text-4xl text-white/80 group-hover:text-light-purple transition-colors' />
                    </div>
                    <span className='text-xs font-bold uppercase tracking-widest text-purple-100/50'>UI/UX</span>
                </div>

                <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/20 animate-bounce'>
                    <FaChevronDown size={20} />
                </div>
            </div>
        </Container>
    </section>
}
