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
            <section
                className="bg-black text-center py-8
            md:py-25">

                <Typography
                    variant="h4Other"
                    className="text-white
                    md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.089em]"
                    as="h1"
                >
                    {categoryName}
                </Typography>
            </section>

            <div
                className="w-full px-6
            md:px-10
            lg:px-0 max-w-[1110px] mx-auto">

                <section className="mt-16 flex flex-col gap-30 items-center justify-center
                lg:gap-40">
                    {sortedProducts.map((product, index) => (
                        <CategoryProductCard
                            key={product.id}
                            slug={product.slug}
                            name={product.name}
                            categoryImage={product.categoryImage}
                            isNew={product.new}
                            description={product.description}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </section>



                <div className="mt-43">
                    <Typography as="h2" className="sr-only">
                        Category Button Links
                    </Typography>
                    <CategoryButtons />
                </div>



                <div className="">
                    <Typography as="h2" className="sr-only">
                        About Us
                    </Typography>
                    <AboutUsSection />
                </div>

            </div>
        </>
    )

}



