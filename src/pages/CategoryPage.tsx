import { useParams } from "react-router-dom";
import type { Product } from "../types";
import data from "../data/data.json"
import CategoryProductCard from "../components/CategoryPage/CategoryProductCard";
import Typography from "../components/ui/Typography";
import CategoryButtons from "../components/Home/CategoryButtons";
import AboutUsSection from "../components/Home/AboutUsSection";

export default function CategoryPage() {
    const { categoryName } = useParams<{ categoryName: string }>()

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
                <Typography
                    variant="h4Other"
                    className="text-white"
                    as="h1"
                >
                    {categoryName}
                </Typography>
            </section>

            <div className="container mx-auto px-6">

                <section className="mt-16 flex flex-col gap-30 items-center justify-center">
                    {sortedProducts.map((product) => (
                        <CategoryProductCard
                            key={product.id}
                            slug={product.slug}
                            name={product.name}
                            categoryImage={product.categoryImage}
                            isNew={product.new}
                            description={product.description}
                        />
                    ))}
                </section>



                <div className="mt-43">
                    <Typography as="h2" className="sr-only">
                        Category Button Links
                    </Typography>
                    <CategoryButtons />
                </div>



                <div>
                    <Typography as="h2" className="sr-only">
                        About Us
                    </Typography>
                    <AboutUsSection />
                </div>

            </div>
        </>
    )

}



