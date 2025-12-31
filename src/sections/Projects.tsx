import { useEffect, useState } from 'react';
import { client as SanityClient } from '../lib/sanity';
import Container from '../components/layout/Container';
import ProjectCard from '../components/common/ProjectCard';
import ProjectModal from '../components/common/ProjectModal';

type Project = {
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
}

export default function Projects() {
    const [projectData, setProjectData] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await SanityClient.fetch(
                `*[_type == 'project']| order(orderRank asc){
                    name, 
                    description, 
                    'resources': resources[]->{
                        title,
                        iconName,
                        customClass
                    }, 
                    'imageUrl': image.asset->url, 
                    'imageAlt': image.alt, 
                    links
                }`
            );
            setProjectData(data);
        } catch (error) {
            console.error('Erro ao buscar projetos:', error);
        }
    };

    return <section id='projects' className='
            w-full pt-10 pb-16 md:pb-24
            bg-dark-purple'>
        <Container>
            <div className='py-8 space-y-16'>
                <div className='space-y-2'>
                    <h2 className='section-title'>
                        Meus <span className='text-light-purple'>Projetos</span>
                    </h2>

                    <div className='section-subtitle'>
                        <div className='h-px w-6 bg-light-purple/50' />
                        Trabalhos selecionados
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectData.map((project: Project, index: number) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => {
                                setSelectedProject(project);
                                setModalOpen(true);
                            }}
                        />
                    ))}
                </div>
            </div>
        </Container>

        <ProjectModal
            project={selectedProject}
            modalOpen={modalOpen}
            onClose={() => setModalOpen(false)}
        />

    </section>
}   
