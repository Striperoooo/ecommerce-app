import type { ImageSet } from "../../types";
import Typography from "../ui/Typography"
import Button from "../ui/Button"

interface CategoryProductCardProps {
    slug: string;
    name: string;
    categoryImage: ImageSet;
    isNew: boolean;
    description: string;
}

export default function CategoryProductCard({ slug,
    name,
    categoryImage,
    isNew,
    description }: CategoryProductCardProps) {

    return (
        <section>

            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet={categoryImage.tablet}
                />

                <img
                    src={categoryImage.mobile}
                    alt={name}
                    className="rounded-lg mx-auto"
                />
            </picture>

            <div className="mt-8 flex flex-col gap-6 text-center items-center
            md:mt-13">

                {isNew &&
                    <Typography variant="overline" className="text-d8">
                        NEW PRODUCT
                    </Typography>
                }

                <Typography
                    variant="h4OtherTight"
                    className="text-black
                md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.089em] md:max-w-[573px]"
                >
                    {name}
                </Typography>

                <Typography
                    variant="p"
                    className="text-black/50
                md:mt-2 md:max-w-[573px]"
                >
                    {description}
                </Typography>

                <Button variant="primary" to={`/product/${slug}`}>
                    See Product
                </Button>

            </div>

        </section>
    )
}