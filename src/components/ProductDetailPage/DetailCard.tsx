import type { ImageSet } from "../../types";
import Typography from "../ui/Typography"
import type { ReactNode } from "react";
import ResponsiveImage from "../ui/ResponsiveImage";

interface DetailCardProps {
    name: string;
    image: ImageSet;
    isNew: boolean;
    price: number;
    description: string;
    children?: ReactNode;
}

export default function DetailCard({
    name,
    image,
    isNew,
    price,
    description,
    children
}: DetailCardProps) {

    const formattedPrice = new Intl.NumberFormat('en-US').format(price);

    return (
        <section className="flex justify-center">
            <div
                className="flex flex-col gap-8 w-full max-w-[1110px]
            md:flex-row md:gap-17.5
            lg:gap-31.25"
            >

                <ResponsiveImage
                    image={image}
                    alt={name}
                    className="md:flex-shrink-0 rounded-lg md:w-[280px] md:min-h-[480px] lg:w-[540px] lg:h-[560px]"
                    imgClassName="rounded-lg"
                />

                <div
                    className="flex flex-col gap-6
                    md:justify-center"
                >
                    {isNew &&
                        <Typography
                            variant="overline"
                            className="text-d8
                        md:text-[0.75rem] md:leading-normal md:tracking-[0.536rem]"
                        >
                            NEW PRODUCT
                        </Typography>
                    }

                    <Typography
                        variant="h4OtherTight"
                        className="text-black
                        lg:text-[2.5rem] lg:leading-[2.75rem] lg:tracking-[0.089rem]"
                        as="h1"
                    >
                        {name}
                    </Typography>

                    <Typography variant="p" className="text-black/50
                    md:max-w-[345px]
                    lg:max-w-[445px]"
                    >
                        {description}
                    </Typography>

                    <Typography variant="h6Other" className="text-black">
                        $ {formattedPrice}
                    </Typography>

                    {children}
                </div>
            </div>
        </section>
    )
}