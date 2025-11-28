import imageBestGear from "../../assets/shared/mobile/image-best-gear.jpg"
import Typography from "../ui/Typography"



export default function AboutUsSection() {
    return (
        <section className="my-30">
            <div>
                <img src={imageBestGear} alt="Black and white photo of a person modelling a pair of headphones." className="rounded-lg mx-auto" />

                <div className="text-center">
                    <Typography variant="h4OtherTight" className="text-black mt-10 mb-8">
                        Bringing you the
                        <span className="text-d8"> best </span>
                        audio gear
                    </Typography>

                    <Typography variant="p" className="text-black/50">
                        Located at the heart of Angeles City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </Typography>
                </div>

            </div>
        </section>
    )
}