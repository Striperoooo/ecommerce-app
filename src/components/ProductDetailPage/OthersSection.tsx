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
                className="text-black
                md:text-[2rem] md:leading-[2.25rem] md:tracking-[0.071rem]"
                as="h2"
            >
                You may also like
            </Typography>

            <div
                className="mt-10 flex flex-col gap-14
            md:mt-14 md:flex-row md:justify-center md:gap-2.75">
                {others.map((other) => (
                    <div
                        className="flex flex-col gap-8"
                        key={other.name}
                    >
                        <picture className="md:flex-shrink-0">
                            <source
                                media="(min-width: 768px)"
                                srcSet={other.image.tablet}
                            />

                            <img
                                src={other.image.mobile}
                                alt={other.name}
                                className="rounded-lg
                            md:w-[223px] md:h-[318px]"
                            />
                        </picture>

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