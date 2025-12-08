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
import CartNotificationToast from "../components/Cart/CartNotificationToast";
import { useState } from "react";
import Typography from "../components/ui/Typography";
import GoBackButton from "../components/ui/GoBackButton";

export default function ProductDetailPage() {

    const [notficationMessage, setNotificationMessage] = useState<string | null>(null)

    const showNotification = (productName: string) => {
        setNotificationMessage(`${productName} added to cart!`)
    }

    const closeNotification = () => {
        setNotificationMessage(null)
    }


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
        <section
            className="px-6
        md:px-10"
        >

            <GoBackButton />

            <DetailCard
                name={name}
                image={image}
                isNew={isNew}
                price={price}
                description={description}
            >
                <AddToCartControls
                    id={id}
                    name={name}
                    cartName={cartName}
                    image={image}
                    price={price}
                    onAddtoCartSuccess={showNotification}
                />
            </DetailCard>

            {notficationMessage && (
                <CartNotificationToast
                    message={notficationMessage}
                    onClose={closeNotification}
                />
            )}

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
                <Typography as="h2" className="sr-only">
                    Category Button Links
                </Typography>
                <CategoryButtons />
            </div>

            <Typography as="h2" className="sr-only">
                About Us
            </Typography>
            <AboutUsSection />

        </section>
    )
}