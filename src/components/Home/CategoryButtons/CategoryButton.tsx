import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import headphone from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speaker from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphone from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png"

interface CategoryButtonProps {
    name: string
    imageUrl: string
    href: string
}

export default function CategoryButton({ name, imageUrl, href }: CategoryButtonProps) {
    return (
        <>
            <div className="relative bg-f1f1 w-full flex flex-col items-center text-center rounded-lg">

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[38%]">
                    <img src={imageUrl} alt={name} className="w-[150px] h-[150px] object-cover" />
                </div>


                <div>
                    <Typography variant="title" className="pt-22">{name} </Typography>
                    <Button variant="tertiary" href={href} className="mt-4 mb-5.5">SHOP</Button>
                </div>

            </div>
        </>
    )
}