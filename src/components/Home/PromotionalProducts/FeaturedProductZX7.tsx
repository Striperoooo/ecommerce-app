import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import imageSpeakerZX7Mobile from "../../../assets/home/mobile/image-speaker-zx7.jpg"
import imageSpeakerZX7Tablet from "../../../assets/home/tablet/image-speaker-zx7.jpg"
import imageSpeakerZX7Desktop from "../../../assets/home/desktop/image-speaker-zx7.jpg"


export default function FeaturedProductZX7() {
    return (
        <div
            style={{
                '--mobile-image': `url(${imageSpeakerZX7Mobile})`,
                '--tablet-image': `url(${imageSpeakerZX7Tablet})`,
                '--desktop-image': `url(${imageSpeakerZX7Desktop})`
            } as React.CSSProperties}

            className="w-full h-[320px] bg-cover bg-center rounded-lg px-6 py-25

            bg-[image:var(--mobile-image)]
            
            md:bg-[image:var(--tablet-image)]
            md:px-15.5
            
            lg:bg-[image:var(--desktop-image)]"

        >

            <div className="">
                <Typography variant="h4Other" className="text-black">
                    ZX7 SPEAKER
                </Typography>

                <Button
                    variant="secondary"
                    className="mt-7"
                    to="/product/zx7-speaker"
                >
                    See Product
                </Button>
            </div>

        </div>
    )
}