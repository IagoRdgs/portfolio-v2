import type { ReactElement, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type commonProps = {
    text: string,
    icon?: ReactElement,
    iconPos?: 'left' | 'right',
    variant?: 'primary' | 'secondary' | 'tertiary',
    customClass?: string
};

type buttonAsButton = commonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
};

type buttonAsLink = commonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a',
    href: string,
    target: string
};

type ButtonProps = buttonAsButton | buttonAsLink;

export default function Button({
    as = 'button',
    text,
    icon,
    iconPos = 'right',
    variant = 'primary',
    customClass,
    ...rest
}: ButtonProps) {
    const baseStyle = 'text-md px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ease-out group font-medium';
    
    const variants = {
        primary: 'bg-light-purple border border-light-purple text-white hover:bg-light-purple/40 hover:border-light-purple focus:bg-light-purple/40',
        secondary: 'bg-gray-200 border border-gray-200 text-light-purple hover:bg-light-purple/40 hover:backdrop-blur-md hover:text-white hover:border-light-purple',
        tertiary: `
            bg-linear-to-r from-light-purple to-[#7c3aed] 
            border border-white/20 
            text-white font-bold rounded-full px-8 py-3.5
            shadow-[0_0_20px_rgba(168,85,247,0.4)]
            hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
            active:scale-95 active:brightness-90
        `
    };

    const content = (
        <>
            {icon && iconPos === 'left' && (
                <span className='transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1'>
                    {icon}
                </span>
            )}
            <span>{text}</span>
            {icon && iconPos === 'right' && (
                <span className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                    {icon}
                </span>
            )}
        </>
    );

    const combinedClasses = `${baseStyle} ${variants[variant]} ${customClass}`;

    if (as === 'a') return (
        <a className={combinedClasses} {...rest as any}>
            {content}
        </a>
    );

    return (
        <button className={combinedClasses} {...rest as any}>
            {content}
        </button>
    );
};