import type { ImageSet } from "../../types";
import Typography from "../ui/Typography"
import Button from "../ui/Button"

interface DetailCardProps {
    name: string;
    image: ImageSet;
    isNew: boolean;
    price: number;
    description: string;
}

export default function DetailCard({
    name,
    image,
    isNew,
    price,
    description
}: DetailCardProps) {

    const formattedPrice = new Intl.NumberFormat('en-US').format(price);

    return (
        <section className="mt-6  flex justify-center">
            <div className="flex flex-col gap-6  ">
                <img src={image.mobile} alt={name} className=" rounded-lg" />

                {isNew &&
                    <Typography variant="overline" className="text-d8">
                        NEW PRODUCT
                    </Typography>
                }

                <Typography variant="h4OtherTight" className="text-black">
                    {name}
                </Typography>

                <Typography variant="p" className="text-black/50">
                    {description}
                </Typography>

                <Typography variant="h6Other" className="text-black">
                    $ {formattedPrice}
                </Typography>

            </div>
        </section>
    )
}