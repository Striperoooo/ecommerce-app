import Typography from "../ui/Typography"
import Button from "../ui/Button"

interface CategoryProductCardProps {
    product: {
        slug: string;
        name: string;
        categoryImage: { mobile: string; tablet: string; desktop: string; };
        new: boolean;
        description: string;
    }
}

export default function CategoryProductCard({ product }: CategoryProductCardProps) {

    return (
        <section>

            <img src={product.categoryImage.mobile} alt={product.name} className="rounded-lg mx-auto" />

            <div className="mt-8 flex flex-col gap-6 text-center items-center">

                {product.new &&
                    <Typography variant="overline" className="text-d8">
                        NEW PRODUCT
                    </Typography>
                }


                <Typography variant="h4OtherTight" className="text-black">
                    {product.name}
                </Typography>

                <Typography variant="p" className="text-black/50">
                    {product.description}
                </Typography>

                <Button variant="primary" to={`/product/${product.slug}`}>
                    See Product
                </Button>

            </div>

        </section>
    )
}