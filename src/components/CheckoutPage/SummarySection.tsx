import { useCart } from "../../hooks/useCartHook"
import Typography from "../ui/Typography"


export default function SummarySection() {

    const { cart } = useCart()

    const SHIPPING_COST = 50
    const VAT_RATE = 0.20

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    const vat = total * VAT_RATE

    const grandTotal = total + SHIPPING_COST

    const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num)
    const formattedTotal = formatNumber(total)
    const formattedShipping = formatNumber(SHIPPING_COST)
    const formattedVat = formatNumber(vat)
    const formattedGrandTotal = formatNumber(grandTotal)


    return (
        <section className="">

            <div className="flex justify-between items-center mb-6">

                <Typography
                    variant="h6Other"
                    className="text-black"
                    as="h2"
                >
                    Summary
                </Typography>
            </div>

            {cart.length === 0
                ? (<Typography variant="pBold" className="text-center text-black/50">
                    Your cart is empty.
                </Typography>
                )
                : (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center mb-4 justify-between gap-4.75">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image.mobile}
                                        alt={item.name}
                                        className="w-[64px] h-[64px] rounded-lg"
                                    />

                                    <div className="flex flex-col justify-between">
                                        <Typography variant="pBold" className="text-black">
                                            {item.cartName}
                                        </Typography>

                                        <Typography variant="overlineBold" className="text-black/50">
                                            $ {formatNumber(item.price)}
                                        </Typography>
                                    </div>
                                </div>

                                <Typography
                                    variant="pBold"
                                    className="text-black/50"
                                >
                                    x{item.quantity}
                                </Typography>
                            </div>
                        ))}

                        <div className="mt-8">

                            <div className="flex justify-between items-center ">
                                <Typography variant="p"
                                    className="text-black/50"
                                >
                                    TOTAL
                                </Typography>

                                <Typography variant="h6OtherTight"
                                    className="text-black"
                                >
                                    $ {formattedTotal}
                                </Typography>
                            </div>

                            <div className="flex justify-between items-center ">
                                <Typography variant="p"
                                    className="text-black/50"
                                >
                                    SHIPPING
                                </Typography>

                                <Typography variant="h6OtherTight"
                                    className="text-black"
                                >
                                    $ {formattedShipping}
                                </Typography>
                            </div>

                            <div className="flex justify-between items-center ">
                                <Typography variant="p"
                                    className="text-black/50"
                                >
                                    VAT (INCLUDED)
                                </Typography>

                                <Typography variant="h6OtherTight"
                                    className="text-black"
                                >
                                    $ {formattedVat}
                                </Typography>
                            </div>

                            <div className="mt-6 flex justify-between items-center ">
                                <Typography variant="p"
                                    className="text-black/50"
                                >
                                    GRAND TOTAL
                                </Typography>

                                <Typography variant="h6OtherTight"
                                    className="text-d8"
                                >
                                    $ {formattedGrandTotal}
                                </Typography>
                            </div>

                        </div>



                    </>
                )}
        </section>

    )
}