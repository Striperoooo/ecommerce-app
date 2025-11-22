import Typography from "../ui/Typography"
import Button from "../ui/Button"
import heroImage from "../../assets/home/mobile/image-header.jpg"


export default function HeroSection() {
    return (
        <>

            <div
                style={{ backgroundImage: `url(${heroImage})` }}
                className="min-h-[510px] w-full bg-center bg-cover"
            >

                <div className="flex flex-col items-center justify-center text-center px-6">

                    <Typography
                        variant="overline"
                        className="text-white/50 mt-27"
                    >
                        NEW PRODUCT
                    </Typography>

                    <Typography
                        variant="h3Larger"
                        className="text-white mt-4"
                    >
                        XX99 Mark II
                        HeadphoneS
                    </Typography>

                    <Typography
                        variant="p"
                        className="text-white/75 mt-6"
                    >
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </Typography>

                    <Button
                        variant="primary"
                        className="mt-7"
                    >
                        See Product
                    </Button>

                </div>


            </div>
        </>
    )
}