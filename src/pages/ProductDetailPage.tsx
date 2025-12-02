import { useParams } from "react-router-dom"
import type { Product } from "../types";
import data from "../data/data.json"
import DetailCard from "../components/ProductDetailPage/DetailCard";
import FeaturesSection from "../components/ProductDetailPage/FeaturesSection";

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
        name,
        image,
        new: isNew,
        price,
        description,
        features,
        includes,
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

            <h1 className="font-bold">ADD TO CART GOES HERE</h1>

            <FeaturesSection
                features={features}
                includes={includes}
            />
        </section>
    )
}