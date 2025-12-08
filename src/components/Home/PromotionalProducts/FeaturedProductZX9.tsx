import NewPatternCircles from "../../../assets/home/desktop/new-pattern-circles.svg?react"
import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import imageSpeakerZX9 from "../../../assets/home/mobile/image-speaker-zx9.png"
import imageSpeakerZX9Desktop from "../../../assets/home/desktop/image-speaker-zx9.png"




export default function FeaturedProductZX9() {
    return (

        <div className="relative bg-d8 w-full h-[600px] overflow-hidden rounded-lg
        md:h-[689px]
        lg:h-[560px]">
            <div
                className="flex flex-col items-center text-center px-6
            lg:flex-row lg:justify-center  lg:relative lg:gap-34.5 lg:h-full"
            >

                <NewPatternCircles className="absolute z-0 text-white/25 top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2

                w-[944px] h-[944px] lg:absolute lg:top-[80%] lg:left-[calc(50%-250px)] lg:transform lg:-translate-y-1/2
                " />

                <div className="relative">
                    <picture className="lg:flex-shrink-0">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={imageSpeakerZX9Desktop}
                        />

                        <img
                            src={imageSpeakerZX9}
                            alt="Speaker ZX9"
                            className="mt-13.75 w-[172.25px] h-[207px]
                    xl:w-[410px] xl:h-[493px] lg:mt-24 lg:z-2" />
                    </picture>
                </div>

                <div className="relative lg:text-left">

                    <Typography variant="h3Larger" className="mt-8 text-white
                md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0px]">
                        ZX9
                        <br />
                        SPEAKER
                    </Typography>

                    <Typography variant="p" className="mt-6 text-white/75
                md:max-w-[350px]">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </Typography>

                    <Button
                        variant="secondary"
                        className="mt-6"
                        to="/product/zx9-speaker"
                    >
                        See Product
                    </Button>
                </div>

            </div>
        </div>

    )
}