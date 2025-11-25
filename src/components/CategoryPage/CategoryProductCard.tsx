import data from "../../../data.json"
import Typography from "../ui/Typography"
import Button from "../ui/Button"

export default function CategoryProductCard() {

    const product4 = data.find(item => item.id === 4)

    return (
        <section>

            <img src={product4?.categoryImage?.mobile} alt={product4?.name} className="" />

            <div className="mt-8 flex flex-col gap-6 text-center items-center">

                {product4?.new &&
                    <Typography variant="overline" className="text-d8">
                        NEW PRODUCT
                    </Typography>
                }


                <Typography variant="h4OtherTight" className="text-black">
                    {product4?.name}
                </Typography>

                <Typography variant="p" className="text-black/50">
                    {product4?.description}
                </Typography>

                <Button variant="primary" to={`/product/${product4?.slug}`}>
                    See Product
                </Button>

            </div>

        </section>
    )
}