import type { GalleryImages } from "../../types";
import ResponsiveImage from "../ui/ResponsiveImage";

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

                    <ResponsiveImage
                        image={gallery.first}
                        alt={`Gallery image for ${name}`}
                        className="md:flex-shrink-0 h-[174px] rounded-lg lg:h-auto"
                        imgClassName="rounded-lg"
                    />

                    <ResponsiveImage
                        image={gallery.second}
                        alt={`Gallery image for ${name}`}
                        className="md:flex-shrink-0 h-[174px] rounded-lg lg:h-auto"
                        imgClassName="rounded-lg"
                    />
                </div>

                <ResponsiveImage
                    image={gallery.third}
                    alt={`Gallery image for ${name}`}
                    className="md:flex-shrink-0 h-[368px] rounded-lg lg:h-auto"
                    imgClassName="rounded-lg"
                />
            </div>
        </section>

    )
}