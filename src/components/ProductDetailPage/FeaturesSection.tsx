import type { ProductIncludes } from "../../types";
import Typography from "../ui/Typography"

interface FeaturesSectionProps {
    features: string;
    includes: ProductIncludes[];
}

export default function FeaturesSection({
    features,
    includes
}: FeaturesSectionProps) {

    return (
        <div
            className="mt-22
        lg:flex lg:gap-31.25"
        >
            <section className="lg:max-w-[635px]">
                <Typography
                    variant="h5Other"
                    className="text-black
                    md:text-[2rem] md:leading-[2.25rem] md:tracking-[0.071rem]"
                    as="h2"
                >
                    Features
                </Typography>

                <Typography
                    variant="p"
                    className="mt-6 text-black/50 whitespace-pre-line"
                >
                    {features}
                </Typography>
            </section>

            <section
                className="mt-15
            md:mt-30 md:flex md:gap-39
            lg:mt-0 lg:flex-col lg:gap-8"
            >
                <Typography
                    variant="h5Other"
                    className="text-black
                md:text-[2rem] md:leading-[2.25rem] md:tracking-[0.071rem]"
                    as="h2"
                >
                    In the box
                </Typography>

                <div
                    className="mt-6 flex flex-col gap-2
                md:mt-0"
                >
                    {includes.map((included) => (
                        <div
                            key={included.item}
                            className="flex gap-6"
                        >
                            <Typography variant="pBold" className="text-d8 w-[18px] h-[25px]">
                                {included.quantity}x
                            </Typography>

                            <Typography variant="p" className="text-black/50">
                                {included.item}
                            </Typography>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}