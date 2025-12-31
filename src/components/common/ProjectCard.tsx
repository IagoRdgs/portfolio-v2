type ProjectCardProps = {
    project: {
        name: string;
        imageUrl: string;
    };
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div 
            onClick={onClick} 
            className='group relative cursor-pointer rounded-2xl overflow-hidden
                bg-white/3 border border-white/10
                transition-all duration-500 ease-out
                hover:border-light-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                hover:-translate-y-2'
        >
            {/* 1. Container da Imagem com proporção fixa (Evita a 'estranheza' de tamanhos diferentes) */}
            <div className='aspect-video w-full overflow-hidden bg-neutral-900'>
                <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700'
                />
            </div>

            {/* 2. Overlay de Informações (Aparece no Hover) */}
            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex flex-col justify-end p-6'
            >
                <p className='text-light-purple text-[10px] uppercase font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform'>
                    Ver Detalhes
                </p>
                <h3 className='text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
                    {project.name}
                </h3>
            </div>

            {/* 3. Brilho sutil no canto (Aumenta o aspecto Premium) */}
            <div className='absolute top-0 right-0 w-24 h-24 bg-light-purple/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
        </div>
    );
}