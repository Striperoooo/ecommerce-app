import Typography from "../../ui/Typography"
import Button from "../../ui/Button"

interface CategoryButtonProps {
    name: string
    image: string
    to: string
}

export default function CategoryButton({ name, image, to }: CategoryButtonProps) {
    return (
        <>
            <div className="relative bg-f1f1 w-full flex flex-col items-center text-center rounded-lg">

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[38%]">
                    <img src={image} alt={name} className="w-[150px] h-[150px] object-cover" />
                </div>


                <div>
                    <Typography variant="title" className="pt-22">{name} </Typography>
                    <Button variant="tertiary" to={to} className="mt-4 mb-5.5">SHOP</Button>
                </div>

            </div>
        </>
    )
}