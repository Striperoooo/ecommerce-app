import Typography from "../../ui/Typography"
import Button from "../../ui/Button"
import imageEarphonesYX1 from "../../../assets/home/mobile/image-earphones-yx1.jpg"


export default function FeaturedProductYX1() {
    return (
        <div className="flex flex-col gap-6">

            <div
                style={{ backgroundImage: `url(${imageEarphonesYX1})` }}
                className="w-full h-[200px] bg-cover bg-center rounded-lg px-6 py-25"
            >
            </div>

            <div className="w-full h-[200px] rounded-lg bg-f1f1 px-6 py-10">

                <Typography variant="h4Other" className="text-black">
                    YX1 EARPHONES
                </Typography>

                <Button
                    variant="secondary"
                    className="mt-7"
                    to="/product/yx1-earphones"
                >
                    See Product
                </Button>

            </div>

        </div>
    )
}