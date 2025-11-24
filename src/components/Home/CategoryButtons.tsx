import CategoryButton from "./CategoryButtons/CategoryButton"
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"

export default function CategoryButtons() {
    return (
        <section className="mt-23">
            <div className="flex flex-col gap-17">

                <CategoryButton name="HEADPHONES" image={headphone} href="/headphones" />
                <CategoryButton name="SPEAKERS" image={speaker} href="/speakers" />
                <CategoryButton name="EARPHONES" image={earphone} href="/earphones" />

            </div>
        </section>


    )
}