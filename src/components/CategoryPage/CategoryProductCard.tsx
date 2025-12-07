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

            <img src={categoryImage.mobile} alt={name} className="rounded-lg mx-auto" />

            <div className="mt-8 flex flex-col gap-6 text-center items-center">

                {isNew &&
                    <Typography variant="overline" className="text-d8">
                        NEW PRODUCT
                    </Typography>
                }


                <Typography variant="h4OtherTight" className="text-black">
                    {name}
                </Typography>

                <Typography variant="p" className="text-black/50">
                    {description}
                </Typography>

                <Button variant="primary" to={`/product/${slug}`}>
                    See Product
                </Button>

            </div>

        </section>
    )
}