import Typography from "../ui/Typography"
import Button from "../ui/Button"
import heroImageDarker from "../../assets/home/mobile/image-header-darker.jpg"


export default function HeroSection() {
    return (
        <>

            <div
                className="relative min-h-[510px] w-full"
            >


                <div className="absolute inset-0 bg-[#191919] "></div>

                <div
                    style={{ backgroundImage: `url(${heroImageDarker})` }}
                    className="absolute inset-0 
                    bg-[position:50%_105%] bg-cover opacity-[50.21%] "
                >
                </div>



                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

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
                        className="mt-7 mb-28"
                    >
                        See Product
                    </Button>

                </div>


            </div>
        </>
    )
}