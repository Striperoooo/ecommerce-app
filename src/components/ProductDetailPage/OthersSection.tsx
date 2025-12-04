import type { ProductOther } from "../../types";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

interface OthersSectionProps {
    others: ProductOther[];
}

export default function OthersSection({ others }: OthersSectionProps) {

    return (
        <section className="mt-30 text-center">
            <Typography
                variant="h5Other"
                className="text-black"
            >
                You may also like
            </Typography>

            <div className="mt-10 flex flex-col gap-14">
                {others.map((other) => (
                    <div
                        className="flex flex-col gap-8"
                        key={other.name}
                    >
                        <img
                            src={other.image.mobile}
                            alt={other.name}
                            className="rounded-lg"
                        />

                        <Typography
                            variant="h5OtherWide"
                            className="text-black"
                        >
                            {other.name}
                        </Typography>

                        <div>
                            <Button
                                variant="primary"
                                to={`/product/${other.slug}`}
                            >
                                See Product
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}