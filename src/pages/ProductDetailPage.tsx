import { useParams } from "react-router-dom"
import type { Product } from "../types";
import data from "../data/data.json"
import DetailCard from "../components/ProductDetailPage/DetailCard";

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
        </section>
    )
}