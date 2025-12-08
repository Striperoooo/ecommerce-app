import HeroSection from "../components/Home/HeroSection";
import CategoryButtons from "../components/Home/CategoryButtons";
import PromotionalProducts from "../components/Home/PromotionalProducts";
import AboutUsSection from "../components/Home/AboutUsSection";
import Typography from "../components/ui/Typography";


export default function Home() {
    return (
        <>
            <Typography as="h1" className="sr-only">
                Audiophile E-commerce Homepage
            </Typography>

            <HeroSection />

            <div className="w-full h-full px-6
            md:px-10
            lg:px-41.25">

                <Typography as="h2" className="sr-only">
                    Category Button Links
                </Typography>
                <CategoryButtons />

                <Typography as="h2" className="sr-only">
                    Promotional Products
                </Typography>
                <PromotionalProducts />

                <Typography as="h2" className="sr-only">
                    About Us
                </Typography>
                <AboutUsSection />
            </div>

        </>
    )
}