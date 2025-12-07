import React from 'react';
import type { ElementType } from 'react';

// Simple mapping from variant -> default HTML tag + Tailwind class string
const variantMap = {
    h1: { tag: 'p', className: 'font-bold text-[3.5rem] leading-[3.625rem] tracking-[0.125em] uppercase' },
    h2: { tag: 'p', className: 'font-bold text-[2.5rem] leading-[2.75rem] tracking-[0.094em] uppercase' },
    h3Larger: { tag: 'p', className: 'font-bold text-[2.25rem] leading-[2.5rem] tracking-[0.081em] uppercase' },
    h3: { tag: 'p', className: 'font-bold text-[2rem] leading-[2.25rem] tracking-[0.072em] uppercase' },
    h4: { tag: 'p', className: 'font-bold text-[1.75rem] leading-[2.375rem] tracking-[0.125em] uppercase' },
    h4Other: { tag: 'p', className: 'font-bold text-[1.75rem] leading-normal tracking-[0.125em] uppercase' },
    h4OtherTight: { tag: 'p', className: 'font-bold text-[1.75] leading-normal tracking-[0.063em] uppercase' },
    h5: { tag: 'p', className: 'font-bold text-[1.5rem] leading-[2.063rem] tracking-[0.106em] uppercase' },
    h5OtherWide: { tag: 'p', className: 'font-bold text-[1.5rem] leading-normal tracking-[0.107em] uppercase' },
    h5Other: { tag: 'p', className: 'font-bold text-[1.5rem] leading-[2.25rem] tracking-[0.054em] uppercase' },
    h5OtherShort: { tag: 'p', className: 'font-bold text-[1.5rem] leading-[1.75rem] tracking-[0.054em] uppercase' },
    h6: { tag: 'p', className: 'font-bold text-[1.125rem] leading-[1.5rem] tracking-[0.081em] uppercase' },
    h6Other: { tag: 'p', className: 'font-bold text-[1.125rem] leading-normal tracking-[0.081em] uppercase' },
    h6OtherTight: { tag: 'p', className: 'font-bold text-[1.125rem] leading-normal tracking-[0px] uppercase' },
    overline: { tag: 'span', className: 'font-normal text-[0.875rem] leading-normal tracking-[0.625em] uppercase' },
    overlineBold: { tag: 'span', className: 'font-bold text-[0.875rem] leading-[1.563rem] tracking-[0px] uppercase' },
    overlineBoldTight: { tag: 'span', className: 'font-bold text-[0.875rem] leading-normal tracking-[-0.016em]' },
    subtitle: { tag: 'span', className: 'font-bold text-[0.813rem] leading-[1.563rem] tracking-[0.063em] uppercase' },
    subtitleSmaller: { tag: 'span', className: 'font-bold text-[0.75rem] leading-normal tracking-[-0.013em]' },
    title: { tag: 'p', className: 'font-bold text-[0.938rem] leading-auto tracking-[0.067em] uppercase' },
    p: { tag: 'p', className: 'font-medium text-[0.938rem] leading-[1.563rem] tracking-[0px]' },
    pBold: { tag: 'p', className: 'font-bold text-[0.938rem] leading-[1.563rem] tracking-[0px]' },
} as const;

type Variant = keyof typeof variantMap; // 'h1' | 'h2' | ... inferred from the map

interface Props {
    variant?: Variant; // which design variant to use
    as?: ElementType; // optional override for the underlying tag
    className?: string; // additional classes to merge
    children?: React.ReactNode; // content
}

export default function Typography({
    variant = 'p',
    as,
    className = '',
    children,
    ...props
}: Props & React.HTMLAttributes<HTMLElement>) {

    const entry = variantMap[variant]

    const defaultTag = entry.tag
    const variantClass = entry.className

    const Tag = (as || defaultTag) as ElementType;

    return (
        <Tag className={`${variantClass} ${className}`.trim()} {...props}>
            {children}
        </Tag>
    );
}
