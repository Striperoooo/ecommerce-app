import React from 'react';
import type { ElementType } from 'react';


const variantMap = {
    primary: {
        // base + hover + active combined as utility classes
        className:
            'bg-d8 font-bold text-white text-[13px]  tracking-[1px] px-7.5 py-3.75 uppercase cursor-pointer',
        hover: 'hover:bg-fba',
        active: 'active:bg-fba/75',
    },
    secondary: {
        className: 'bg-white border-2 border-black font-bold text-black text-[13px]  tracking-[1px] px-7.5 py-3.75 uppercase cursor-pointer',
        hover: 'hover:bg-black hover:text-white',
        active: 'active:bg-black-hover',
    },
    tertiary: {
        className: 'bg-transparent font-bold text-black/50 text-brand px-3 py-1 uppercase cursor-pointer after-chevron',
        hover: 'hover:text-d8',
        active: 'active:text-orange-active',
    },
} as const;

type Variant = keyof typeof variantMap;

interface Props {
    variant?: Variant; // which button style to use
    className?: string; // extra classes to merge
    as?: ElementType;
    children?: React.ReactNode;
}

// Minimal, readable Button wrapper. Works well with Tailwind and a simple design system.
export default function Button({
    variant = 'primary',
    className = '',
    as,
    children,
    ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {

    const entry = variantMap[variant];

    const variantClass = entry.className;
    const variantHover = entry.hover;
    const variantActive = entry.active;

    const baseClass = 'inline-flex items-center justify-center gap-2 transition ease-in-out';

    // merge all class pieces into a single string
    const combined = `${baseClass} ${variantClass} ${variantHover} ${variantActive} ${className}`.trim();

    // allow overriding the element type (button by default)
    const Tag = (as || 'button') as ElementType;

    return (
        <Tag className={combined} {...props}>
            {children}
        </Tag>
    );
}


