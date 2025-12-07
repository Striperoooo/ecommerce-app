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
            <div className="flex flex-col gap-5">
                <img
                    src={gallery.first.mobile}
                    alt={`Gallery image for ${name}`}
                    className="h-[174px] rounded-lg"
                />

                <img
                    src={gallery.second.mobile}
                    alt={`Gallery image for ${name}`}
                    className="h-[174px] rounded-lg"
                />

                <img
                    src={gallery.third.mobile}
                    alt={`Gallery image for ${name}`}
                    className="h-[368px] rounded-lg"
                />
            </div>
        </section>

    )
}