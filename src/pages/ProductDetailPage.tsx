import { useParams } from "react-router-dom"
import type { Product } from "../types";
import data from "../data/data.json"
import DetailCard from "../components/ProductDetailPage/DetailCard";
import FeaturesSection from "../components/ProductDetailPage/FeaturesSection";
import GallerySection from "../components/ProductDetailPage/GallerySection";
import OthersSection from "../components/ProductDetailPage/OthersSection";
import CategoryButtons from "../components/Home/CategoryButtons";
import AboutUsSection from "../components/Home/AboutUsSection";
import AddToCartControls from "../components/ProductDetailPage/AddToCartControls";

export default function ProductDetailPage() {
    const { productSlug } = useParams<{ productSlug: string }>()

    const currentProduct: Product | undefined = data.find(
        (product: Product) => product.slug === productSlug
    )

    if (!currentProduct) {
        return (
            <div className="my-10 ml-4">
                404 - Product Not Found
            </div>
        )
    }

    const {
        id,
        name,
        cartName,
        image,
        new: isNew,
        price,
        description,
        features,
        includes,
        gallery,
        others
    } = currentProduct


    return (
        <section className="px-6">
            <DetailCard
                name={name}
                image={image}
                isNew={isNew}
                price={price}
                description={description}
            />

            <AddToCartControls
                id={id}
                name={name}
                cartName={cartName}
                image={image}
                price={price}
            />

            <FeaturesSection
                features={features}
                includes={includes}
            />

            <GallerySection
                gallery={gallery}
                name={name}
            />

            <OthersSection
                others={others}
            />

            <div className="mt-43">
                <CategoryButtons />
            </div>

            <AboutUsSection />

        </section>
    )
}