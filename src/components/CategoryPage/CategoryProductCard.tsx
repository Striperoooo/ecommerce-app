import type { ImageSet } from "../../types";
import Typography from "../ui/Typography"
import Button from "../ui/Button"
import ResponsiveImage from "../ui/ResponsiveImage";

interface CategoryProductCardProps {
    slug: string;
    name: string;
    categoryImage: ImageSet;
    isNew: boolean;
    description: string;
    isReversed?: boolean;
}

export default function CategoryProductCard({ slug,
    name,
    categoryImage,
    isNew,
    description,
    isReversed = false
}: CategoryProductCardProps) {

    return (
        <section className={`lg:flex lg:gap-31.25 lg:items-center lg:justify-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

            <ResponsiveImage
                image={categoryImage}
                alt={name}
                className="lg:flex-shrink-0 rounded-lg mx-auto lg:w-[540px] lg:h-[560px]"
                imgClassName="rounded-lg"
            />

            <div className="mt-8 flex flex-col gap-6 text-center items-center
            md:mt-13
            lg:text-left lg:items-start ">

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
                md:mt-2 md:max-w-[573px]
                lg:max-w-[445px] lg:w-[445px]"
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