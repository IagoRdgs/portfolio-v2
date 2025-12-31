import { FaGithub } from 'react-icons/fa';
import Button from '../common/Button';
import Container from './Container';
import { GoLinkExternal } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { client as SanityClient } from '../../lib/sanity';

interface CurriculumData {
    resumeUrl: string;
    githubUrl: string;
}

export default function Header() {
    const [curriculumData, setCurriculumData] = useState<CurriculumData>({} as CurriculumData);

    useEffect(() => {
        fetchCurriculum();
    }, []);

    const fetchCurriculum = async () => {
        try {
            const data = await SanityClient.fetch(
                `*[_type == 'about'][0]{"resumeUrl": resume.asset->url, "githubUrl": githubUrl}`
            );
            console.log(data);
            setCurriculumData(data);
        } catch (error) {
            console.error('Erro ao buscar currículo: ', error);
        }
    };

    return <header className='w-full h-[--header-height] py-4 fixed top-0 left-0 bg-dark-purple/80 backdrop-blur-md z-50 border-b border-light-purple'>
        <Container>
            <div className='flex gap-4 justify-center md:justify-start'>
                <Button
                    text='Ver currículo'
                    icon={<GoLinkExternal size={18} />}
                    as='a'
                    href={curriculumData?.resumeUrl}
                    target='_blank'
                    variant='secondary'
                />

                <Button
                    text='Ver GitHub'
                    icon={<FaGithub size={18} />}
                    as='a'
                    href={curriculumData?.githubUrl}
                    target='_blank'
                />
            </div>
        </Container>
    </header>
}