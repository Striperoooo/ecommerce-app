import type { GalleryImages } from "../../types";

interface GallerySectionProps {
    gallery: GalleryImages;
    name: string;
}

export default function GallerySection({
    gallery,
    name
}: GallerySectionProps) {

    return (
        <section className="mt-22">
            <div
                className="flex flex-col gap-5
            md:flex-row md:justify-center"
            >

                <div className="flex flex-col gap-5">

                    <picture className="md:flex-shrink-0">
                        <source
                            media="(min-width: 768px)"
                            srcSet={gallery.first.tablet}
                        />

                        <img
                            src={gallery.first.mobile}
                            alt={`Gallery image for ${name}`}
                            className="h-[174px] rounded-lg"
                        />
                    </picture>

                    <picture className="md:flex-shrink-0">
                        <source
                            media="(min-width: 768px)"
                            srcSet={gallery.second.tablet}
                        />

                        <img
                            src={gallery.second.mobile}
                            alt={`Gallery image for ${name}`}
                            className="h-[174px] rounded-lg"
                        />
                    </picture>
                </div>

                <picture className="md:flex-shrink-0">
                    <source
                        media="(min-width: 768px)"
                        srcSet={gallery.third.tablet}
                    />

                    <img
                        src={gallery.third.mobile}
                        alt={`Gallery image for ${name}`}
                        className="h-[368px] rounded-lg"
                    />
                </picture>
            </div>
        </section>

    )
}