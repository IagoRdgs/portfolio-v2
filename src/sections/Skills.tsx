import { useEffect, useState } from 'react';
import { client as SanityClient } from '../lib/sanity';
import Container from '../components/layout/Container';
import { iconMap, type IconName } from '../lib/icons';

interface SkillCategory {
    id: string,
    title: string,
    description: string[],
    tags: string[],
    skills: SkillData[]
};

interface SkillData {
    _id: string,
    title: string,
    iconName: IconName,
    customClass?: string
};

const SKILLS_QUERY = `*[_type == 'skillCategory']{
    'id': _id,
    title,
    description[],
    tags[],
    'skills': *[_type == 'skill' && references(^._id)] | order(orderRank asc) {
        _id,
        title,
        iconName,
        customClass
    }
}`;

export default function Skills() {
    const [categoriesData, setCategoriesData] = useState<SkillCategory[]>([]);

    useEffect(() => {
        fetchSkillsGrouped();
    }, []);

    const fetchSkillsGrouped = async (): Promise<void> => {
        try {
            const data = await SanityClient.fetch<SkillCategory[]>(SKILLS_QUERY);
            const filteredData = data.filter(category => category.skills.length > 0);
            setCategoriesData(filteredData);
        } catch (error) {
            console.error('Erro ao buscar skills: ', error);
        }
    };

    return <section id='skills' className='
        relative w-full h-auto
        pt-10 pb-24 -mt-36 md:-mt-28 rounded-t-[3rem]
        bg-dark-purple
        border-t border-white/10
        shadow-[0_-20px_40px_rgba(0,0,0,0.2)]
        scroll-mt-0'
    >
        <div className='absolute top-1/4 -left-24 w-96 h-96 bg-light-purple/10 blur-[130px] pointer-events-none' />

        <Container>
            <div className='space-y-16'>

                <div className='space-y-2'>
                    <h2 className='section-title'>
                        Minhas <span className='text-light-purple'>Habilidades</span>
                    </h2>
                    <div className='section-subtitle'>
                        <div className='h-px w-8 bg-light-purple/50' />
                        Tecnologias e Proficiências
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-12'>
                    {categoriesData.map(category => (
                        <div
                            key={category.id}
                            className='group p-6 md:p-10 rounded-3xl bg-white/4 border border-white/10 hover:border-light-purple/40 backdrop-blur-md shadow-2xl transition-all duration-500'
                        >
                            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                                <div className='lg:col-span-5 space-y-6'>
                                    <div className='space-y-2'>
                                        <h3 className='text-white text-2xl font-bold tracking-tight'>
                                            {category.title}
                                        </h3>
                                        <div className='h-1 w-16 bg-light-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]' />
                                    </div>

                                    <ul className='text-sm md:text-base text-white/90 space-y-4 font-normal'>
                                        {category.description.map((item, index) => (
                                            <li key={index} className='flex items-start gap-3'>
                                                <div className='mt-2 w-2 h-2 rounded-full bg-light-purple shadow-[0_0_8px_rgba(168,85,247,0.4)] shrink-0' />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex flex-wrap gap-2 pt-4'>
                                        {category.tags.map((tag, index) => (
                                            <span key={index} className='px-3 py-1 rounded-full border border-light-purple/30 bg-light-purple/10 text-[10px] font-bold text-purple-400 uppercase tracking-widest' >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className='lg:col-span-7 flex flex-wrap gap-4 content-start'>
                                    {category.skills.map(skill => {
                                        const Icon = iconMap[skill.iconName];
                                        return (
                                            <div
                                                key={skill._id}
                                                className='group/skill flex flex-col items-center justify-center gap-3 p-4 w-24 h-28 md:w-28 md:h-32 rounded-2xl 
                                                bg-white/3 border border-white/5 
                                                hover:border-light-purple/30 hover:bg-white/6
                                                hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] 
                                                transition-all duration-300'
                                            >
                                                <Icon
                                                    className='text-3xl md:text-4xl transition-all duration-500 
        group-hover/skill:scale-110 
        group-hover/skill:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]'
                                                    style={{ color: skill.customClass }}
                                                />

                                                <span className='text-[10px] md:text-xs font-bold text-white/50 group-hover/skill:text-white/90 uppercase tracking-tighter text-center transition-colors'>
                                                    {skill.title}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
}