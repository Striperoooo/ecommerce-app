import CategoryButton from "./CategoryButtons/CategoryButton"
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"

export default function CategoryButtons() {
    return (
        <section className="mt-23 md:mt-37">
            <div className="flex flex-col gap-17
            md:flex-row md:gap-2.5
            lg:gap-7.5 lg:mx-auto">

                <CategoryButton name="HEADPHONES" image={headphone} to="/category/headphones" />
                <CategoryButton name="SPEAKERS" image={speaker} to="/category/speakers" />
                <CategoryButton name="EARPHONES" image={earphone} to="/category/earphones" />

            </div>
        </section>
    )
}