import type { IconType } from 'react-icons';
import {
    FaCss3Alt,
    FaDatabase,
    FaHtml5,
    FaJs,
    FaReact
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
    SiAxios,
    SiExpress,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';


export const iconMap = {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    SiNodedotjs,
    FaReact,
    SiNextdotjs,
    TbBrandReactNative,
    SiAxios,
    SiExpress,
    SiGit,
    SiPrisma,
    SiTailwindcss,
    SiTypescript,
    FaDatabase
} as const satisfies Record<string, IconType>;

export type IconName = keyof typeof iconMap;
