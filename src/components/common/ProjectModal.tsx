import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import Button from './Button';
import { iconMap, type IconName } from '../../lib/icons';
import ReactMarkdown from 'react-markdown';

type ProjectModalProps = {
    project?: {
        name: string;
        description: string;
        resources: {
            title: string;
            iconName: string;
            customClass?: string;
        }[];
        imageUrl: string;
        imageAlt: string;
        links: {
            site: string;
            github: string;
        };
    };
    modalOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, modalOpen, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (modalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [modalOpen, onClose]);

    if (!modalOpen || !project) return null;

    return createPortal(
        <div className='fixed inset-0 z-9999 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity' onClick={onClose} />

            <div
                ref={modalRef}
                className='relative w-full max-w-5xl bg-dark-purple rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row max-h-[90vh]'
            >
                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 z-20 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full md:hidden transition-colors'
                >
                    <IoClose size={24} />
                </button>

                {/* Coluna Esquerda: Imagem e Links */}
                <div className='w-full md:w-1/2 relative shrink-0 flex flex-col gap-4 justify-center py-12 bg-dark-purple md:border-r border-white/5'>
                    <div className='relative flex items-center justify-center px-4 md:px-8'>
                        <img
                            src={project.imageUrl}
                            alt={project.imageAlt}
                            className='w-full h-auto max-h-[300px] object-contain rounded-lg shadow-2xl shadow-white/5'
                        />
                    </div>

                    <div className='flex w-full gap-4 px-4 md:px-8'>
                        <Button
                            as='a'
                            text='Ver projeto'
                            variant='secondary'
                            icon={<GoLinkExternal size={16} />}
                            href={project.links.site}
                            target='_blank'
                            customClass='flex-1 justify-center'
                        />

                        <Button
                            as='a'
                            text='Ver código'
                            icon={<FaGithub size={16} />}
                            href={project.links.github}
                            target='_blank'
                            customClass='flex-1 justify-center'
                        />
                    </div>

                    <div className='px-4 md:px-8'>
                        <h4 className='text-[10px] uppercase tracking-[0.2em] text-tertirary mt-8 mb-4 font-bold opacity-50'>Tecnologias</h4>
                        <div className='flex flex-wrap gap-5 pb-4'>
                            {project.resources.map((resource, index) => {
                                const Icon = iconMap[resource.iconName as IconName];
                                return (
                                    <div key={index} className='flex flex-col items-center gap-2 group'>
                                        <div
                                            className='p-2 bg-white/5 border border-white/10 rounded-xl text-tertirary flex items-center justify-center w-12 h-12 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300'
                                            title={resource.title}
                                        >
                                            {Icon && <Icon size={24} style={{ color: resource.customClass }} />}
                                        </div>
                                        <span className='text-[10px] font-medium text-tertirary/80 uppercase tracking-wider'>{resource.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Coluna Direita: Conteúdo */}
                <div className='w-full md:w-1/2 p-6 md:p-10 flex flex-col min-h-0 bg-dark-purple'>
                    <div className='flex items-start justify-between mb-6 shrink-0'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white leading-tight'>{project.name}</h3>
                        <button
                            onClick={onClose}
                            className='hidden md:block p-2 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all -mt-2 -mr-2 cursor-pointer'
                        >
                            <IoClose size={28} />
                        </button>
                    </div>

                    <div className='flex-1 overflow-y-auto pr-4 custom-scrollbar'>
                        <h4 className='text-[10px] uppercase tracking-[0.2em] text-tertirary mb-3 font-bold opacity-50'>Sobre o projeto</h4>
                        <div className='prose prose-invert max-w-none text-sm prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-white prose-strong:font-semibold flex flex-col gap-4'>
                            <ReactMarkdown>
                                {project.description}
                            </ReactMarkdown>
                        </div>


                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
