import imageBestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg"
import imageBestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg"
import imageBestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg"
import Typography from "../ui/Typography"



export default function AboutUsSection() {
    return (
        <section className="my-30">

            <div className="lg:flex lg:flex-row-reverse lg:gap-31.25 lg:items-center">

                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={imageBestGearDesktop}
                    />

                    <source
                        media="(min-width: 768px)"
                        srcSet={imageBestGearTablet}
                    />

                    <img src={imageBestGearMobile}
                        alt="Black and white photo of a person modelling a pair of headphones." className="rounded-lg mx-auto"
                    />
                </picture>

                <div
                    className="text-center
                 md:flex md:flex-col md:items-center
                 lg:text-left"
                >
                    <Typography
                        variant="h4OtherTight" className="text-black mt-10 mb-8
                    md:mt-16 md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.089em] md:max-w-[573px]"
                    >
                        Bringing you the
                        <span className="text-d8"> best </span>
                        audio gear
                    </Typography>

                    <Typography
                        variant="p"
                        className="text-black/50
                    md:max-w-[573px]"
                    >
                        Located at the heart of Angeles City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </Typography>
                </div>

            </div>
        </section>
    )
}