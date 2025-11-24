import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import imageSpeakerZX7 from "../../../assets/home/mobile/image-speaker-zx7.jpg"


export default function FeaturedProductZX7() {
    return (
        <div
            style={{ backgroundImage: `url(${imageSpeakerZX7})` }}
            className="w-full h-[320px] bg-cover bg-center rounded-lg px-6 py-25"
        >

            <div className="">
                <Typography variant="h4Other" className="text-black">
                    ZX7 SPEAKER
                </Typography>

                <Button variant="secondary" className="mt-7">
                    See Product
                </Button>
            </div>

        </div>
    )
}