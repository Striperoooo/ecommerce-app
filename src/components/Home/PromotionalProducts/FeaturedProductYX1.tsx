import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import imageEarphonesYX1Mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg"
import imageEarphonesYX1Tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg"
import imageEarphonesYX1Desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg"


export default function FeaturedProductYX1() {
    return (
        <div className="flex flex-col gap-6
        md:flex-row">

            <div
                style={{
                    '--mobile-image': `url(${imageEarphonesYX1Mobile})`,
                    '--tablet-image': `url(${imageEarphonesYX1Tablet})`,
                    '--desktop-image': `url(${imageEarphonesYX1Desktop})`,
                } as React.CSSProperties}

                className="w-full h-[200px] bg-cover bg-center rounded-lg px-6 py-25
                
                bg-[image:var(--mobile-image)]
            
                md:bg-[image:var(--tablet-image)]
                md:h-[320px]
                
                lg:bg-[image:var(--desktop-image)]"
            >
            </div>

            <div
                className="w-full h-[200px] rounded-lg bg-f1f1 px-6 py-10
                md:h-[320px] md:flex md:flex-col justify-center"
            >

                <Typography variant="h4Other" className="text-black">
                    YX1 EARPHONES
                </Typography>

                <Button
                    variant="secondary"
                    className="mt-7
                    md:mr-auto"
                    to="/product/yx1-earphones"
                >
                    See Product
                </Button>

            </div>

        </div>
    )
}