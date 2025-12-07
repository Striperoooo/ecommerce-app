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
        <div className="mt-22">
            <section>
                <Typography
                    variant="h5Other"
                    className="text-black"
                    as="h2"
                >
                    Features
                </Typography>

                <Typography variant="p" className="mt-6 text-black/50 whitespace-pre-line">
                    {features}
                </Typography>
            </section>

            <section className="mt-15">
                <Typography
                    variant="h5Other"
                    className="text-black"
                    as="h2"
                >
                    In the box
                </Typography>

                <div className="mt-6 flex flex-col gap-2">
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