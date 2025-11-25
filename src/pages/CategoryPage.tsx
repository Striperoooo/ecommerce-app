import { useParams } from "react-router-dom";
import CategoryProductCard from "../components/CategoryPage/CategoryProductCard";
import data from "../../data.json"
import Typography from "../components/ui/Typography";

interface Product {
    id: number;
    slug: string;
    name: string;
    category: string;
    categoryImage: { mobile: string; tablet: string; desktop: string; };
    new: boolean;
    description: string;

}

export default function CategoryPage() {
    const { categoryName } = useParams()

    const filteredProducts: Product[] = data.filter(
        (product: Product) => product.category === categoryName
    )

    return (
        <>
            <section className="bg-black text-center py-8" >
                <Typography variant="h4Other" className="text-white">
                    {categoryName}
                </Typography>
            </section>

            <section className="mt-16 px-10 flex flex-col gap-30 items-center justify-center">
                {filteredProducts.map((product) => (
                    <CategoryProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </section>
        </>
    )

}



