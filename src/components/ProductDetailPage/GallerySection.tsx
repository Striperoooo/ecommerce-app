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
            md:flex-row md:justify-center
            lg:px-0 max-w-[1110px] mx-auto w-full"
            >

                <div className="flex flex-col gap-5
                lg:w-full lg:justify-between"
                >

                    <picture className="md:flex-shrink-0">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={gallery.first.desktop}
                        />

                        <source
                            media="(min-width: 768px)"
                            srcSet={gallery.first.tablet}
                        />

                        <img
                            src={gallery.first.mobile}
                            alt={`Gallery image for ${name}`}
                            className="h-[174px] rounded-lg
                            lg:h-auto"
                        />
                    </picture>

                    <picture className="md:flex-shrink-0">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={gallery.second.desktop}
                        />

                        <source
                            media="(min-width: 768px)"
                            srcSet={gallery.second.tablet}
                        />

                        <img
                            src={gallery.second.mobile}
                            alt={`Gallery image for ${name}`}
                            className="h-[174px] rounded-lg
                            lg:h-auto"
                        />
                    </picture>
                </div>

                <picture className="md:flex-shrink-0">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={gallery.third.desktop}
                    />

                    <source
                        media="(min-width: 768px)"
                        srcSet={gallery.third.tablet}
                    />

                    <img
                        src={gallery.third.mobile}
                        alt={`Gallery image for ${name}`}
                        className="h-[368px] rounded-lg
                        lg:h-auto"
                    />
                </picture>
            </div>
        </section>

    )
}