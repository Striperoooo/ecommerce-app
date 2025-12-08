import Typography from "../ui/Typography"
import Button from "../ui/Button"
import heroImageDarkerMobile from "../../assets/home/mobile/image-header-darker.jpg"
import heroImageDarkerTablet from "../../assets/home/tablet/image-header-darker.jpg"
import heroImageDarkerDesktop from "../../assets/home/desktop/image-hero-darker.jpg"

export default function HeroSection() {
    return (
        <>

            <section
                className="relative min-h-[510px] w-full
                md:flex md:justify-center md:min-h-[639px]
                lg:px-41.25 lg:justify-start lg:min-h-[632px]"
            >

                <div className="absolute inset-0 bg-[#191919] ">

                </div>

                <div
                    style={{
                        '--mobile-image': `url(${heroImageDarkerMobile})`,

                        '--tablet-image': `url(${heroImageDarkerTablet})`,

                        '--desktop-image': `url(${heroImageDarkerDesktop})`
                    } as React.CSSProperties}

                    className="absolute inset-0 
                    bg-cover opacity-[50.21%] 
                    
                    bg-[image:var(--mobile-image)]
                    bg-[position:50%_105%] 
                    
                    md:bg-[image:var(--tablet-image)]
                    
                    lg:bg-[image:var(--desktop-image)]"
                >
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6
                md:max-w-[379px] md:px-0
                lg:items-start lg:max-w-[400px] lg:text-left">

                    <Typography
                        variant="overline"
                        className="text-white/50 mt-27"
                    >
                        NEW PRODUCT
                    </Typography>

                    <Typography
                        variant="h3Larger"
                        className="text-white mt-4
                        md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125em]
                        lg:mt-6"
                    >
                        XX99 Mark II
                        HeadphoneS
                    </Typography>

                    <Typography
                        variant="p"
                        className="text-white/75 mt-6
                        md:text-[0.938rem] md:leading-[1.563rem] md:tracking-[0px]"
                    >
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </Typography>

                    <Button
                        variant="primary"
                        className="mt-7 mb-28
                        lg:mt-10"
                        to="/product/xx99-mark-two-headphones"
                    >
                        See Product
                    </Button>

                </div>


            </section>
        </>
    )
}