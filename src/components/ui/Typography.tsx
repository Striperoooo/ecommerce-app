import React from 'react';
import type { ElementType } from 'react';

// Simple mapping from variant -> default HTML tag + Tailwind class string
const variantMap = {
    h1: { tag: 'h1', className: 'font-bold text-[56px] leading-[58px] tracking-[2px] uppercase' },
    h2: { tag: 'h2', className: 'font-bold text-[40px] leading-[44px] tracking-[1.5px] uppercase' },
    h3Larger: { tag: 'h3', className: 'font-bold text-[36px] leading-[40px] tracking-[1.29px] uppercase' },
    h3: { tag: 'h3', className: 'font-bold text-[32px] leading-[36px] tracking-[1.15px] uppercase' },
    h4: { tag: 'h4', className: 'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase' },
    h4Other: { tag: 'h4', className: 'font-bold text-[28px] leading-normal tracking-[2px] uppercase' },
    h4OtherTight: { tag: 'h4', className: 'font-bold text-[28px] leading-normal tracking-[1px] uppercase' },
    h5: { tag: 'h5', className: 'font-bold text-[24px] leading-[33px] tracking-[1.7px] uppercase' },
    h5OtherWide: { tag: 'h5', className: 'font-bold text-[24px] leading-normal tracking-[1.71px] uppercase' },
    h5Other: { tag: 'h5', className: 'font-bold text-[24px] leading-[36px] tracking-[0.86px] uppercase' },
    h6: { tag: 'h6', className: 'font-bold text-[18px] leading-[24px] tracking-[1.3px] uppercase' },
    h6Other: { tag: 'h6', className: 'font-bold text-[18px] leading-normal tracking-[1.29px] uppercase' },
    overline: { tag: 'span', className: 'font-normal text-[14px] leading-normal tracking-[10px] uppercase' },
    subtitle: { tag: 'span', className: 'font-bold text-[13px] leading-[25px] tracking-[1px] uppercase' },
    title: { tag: 'p', className: 'font-bold text-[15px] leading-auto tracking-[1.07px] uppercase' },
    p: { tag: 'p', className: 'font-medium text-[15px] leading-[25px] tracking-[0px]' },
    pBold: { tag: 'p', className: 'font-bold text-[15px] leading-[25px] tracking-[0px]' },
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
