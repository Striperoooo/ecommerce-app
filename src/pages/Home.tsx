import { Link } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import CategoryButtons from "../components/Home/CategoryButtons";
import PromotionalProducts from "../components/Home/PromotionalProducts";
import AboutUsSection from "../components/Home/AboutUsSection";


export default function Home() {
    return (
        <>
            <HeroSection />

            <div className="w-full h-full px-6">
                <CategoryButtons />
                <PromotionalProducts />
                <AboutUsSection />
            </div>

        </>
    )
}