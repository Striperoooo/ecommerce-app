import { useState } from 'react';
import type { ImageSet } from '../../types';

interface ResponsiveImageProps {
    image: ImageSet;
    alt: string;
    className?: string;
    imgClassName?: string;
}

export default function ResponsiveImage({
    image,
    alt,
    className = '',
    imgClassName = ''
}: ResponsiveImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-f1f1 animate-pulse rounded-lg" />
            )}
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={image.desktop}
                />

                <source
                    media="(min-width: 768px)"
                    srcSet={image.tablet}
                />

                <img
                    src={image.mobile}
                    alt={alt}
                    className={`block w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${imgClassName}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </picture>
        </div>
    );
}
