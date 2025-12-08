import FeaturedProductZX9 from "./PromotionalProducts/FeaturedProductZX9"
import FeaturedProductZX7 from "./PromotionalProducts/FeaturedProductZX7"
import FeaturedProductYX1 from "./PromotionalProducts/FeaturedProductYX1"

export default function PromotionalProducts() {
    return (
        <section
            className="mt-30 mb-10 flex flex-col gap-6
        lg:gap-12"
        >
            <FeaturedProductZX9 />
            <FeaturedProductZX7 />
            <FeaturedProductYX1 />
        </section>

    )
}