import { useParams } from "react-router-dom";
import CategoryProductCard from "../components/CategoryPage/CategoryProductCard";
import data from "../../data.json"
import Typography from "../components/ui/Typography";
import CategoryButtons from "../components/Home/CategoryButtons";
import AboutUsSection from "../components/Home/AboutUsSection";

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

    const sortedProducts = filteredProducts.sort((productA, productB) => {
        if (productB.new && !productA.new) {
            return 1
        }
        if (productA.new && !productB.new) {
            return -1
        }
        return productB.id - productA.id;
    })

    return (
        <>
            <section className="bg-black text-center py-8" >
                <Typography variant="h4Other" className="text-white">
                    {categoryName}
                </Typography>
            </section>

            <div className="container mx-auto px-6">

                <section className="mt-16 flex flex-col gap-30 items-center justify-center">
                    {sortedProducts.map((product) => (
                        <CategoryProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </section>

                <div className="mt-43">
                    <CategoryButtons />
                </div>

                <div>
                    <AboutUsSection />
                </div>

            </div>
        </>
    )

}



