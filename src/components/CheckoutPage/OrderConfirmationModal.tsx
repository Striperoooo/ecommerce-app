import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Typography from "../ui/Typography"
import Button from "../ui/Button"
import CheckIcon from "../../assets/checkout/icon-order-confirmation.svg?react"
import type { CartItem } from "../../context/CartContext"

interface OrderConfirmationModalProps {
    orderItems: CartItem[]
    orderTotal: number
    onClose: () => void
}

export default function OrderConfirmationModal({
    orderItems,
    orderTotal,
    onClose
}: OrderConfirmationModalProps) {

    const navigate = useNavigate()
    const [showAllItems, setShowAllItems] = useState(false)

    const handleBackHome = () => {
        onClose()
        navigate('/')
    }

    const cartMultipleItems = orderItems.length > 1
    const toggleShowAll = () => setShowAllItems(!showAllItems)
    const numOtherItems = orderItems.length - 1
    const firstItem = orderItems[0]

    const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num)

    return (
        <div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6
        md:px-28.5">

            <div
                className="bg-white p-8 rounded-lg w-full max-h-[90vh] overflow-y-auto
            md:p-12 "
            >

                <CheckIcon className="" />

                <Typography
                    variant="h5OtherShort"
                    className="mt-6 text-black
                    md:text-[2rem] md:leading-[2.25rem] md:tracking-[0.071rem]"
                >
                    THANK YOU
                    <br />
                    FOR YOUR ORDER
                </Typography>

                <Typography
                    variant="p"
                    className="mt-4 text-black/50
                    md:mt-6"
                >
                    You will receive an email confirmation shortly.
                </Typography>

                <div
                    className="md:mt-8 md:grid md:grid-cols-2"
                >
                    {/* Order Summary Block */}
                    <div
                        className="mt-6 bg-f1f1 rounded-t-lg p-6
                    md:mt-0 md:rounded-l-lg md:rounded-r-none"
                    >
                        {/* Show only the first item initially */}

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <img
                                    src={firstItem.image.mobile}
                                    alt={firstItem.name}
                                    className="w-[50px] h-[50px] rounded-lg"
                                />

                                <div>

                                    <Typography
                                        variant="pBold"
                                    >
                                        {firstItem.cartName}
                                    </Typography>

                                    <Typography
                                        variant="overlineBold" className="text-black/50"
                                    >
                                        $ {formatNumber(firstItem.price)}
                                    </Typography>
                                </div>
                            </div>

                            <Typography
                                variant="pBold"
                                className="text-black/50"
                            >
                                x{firstItem.quantity}
                            </Typography>
                        </div>

                        {/* Conditionally show the rest of the items */}
                        {showAllItems && (
                            orderItems.slice(1).map(item => (
                                <div key={item.id} className="mt-4 flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={item.image.mobile}
                                            alt={item.name}
                                            className="w-[50px] h-[50px] rounded-lg"
                                        />

                                        <div>

                                            <Typography
                                                variant="pBold"
                                            >
                                                {item.cartName}
                                            </Typography>

                                            <Typography variant="overlineBold" className="text-black/50"
                                            >
                                                $ {formatNumber(item.price)}
                                            </Typography>

                                        </div>
                                    </div>

                                    <span className="text-sm text-black/50">
                                        x{item.quantity}
                                    </span>
                                </div>
                            ))
                        )}

                        {/* Toggle button UI */}
                        {cartMultipleItems && (
                            <button
                                onClick={toggleShowAll}
                                className="w-full font-bold text-black/50 text-[0.75rem] leading-normal tracking-[-0.21px] text-center border-t border-black/10 pt-3 mt-3 cursor-pointer hover:underline"
                            >
                                {showAllItems
                                    ? 'View Less'
                                    : `and ${numOtherItems} other item(s)`
                                }
                            </button>
                        )}
                    </div>

                    {/* Grand Total Footer */}
                    <div
                        className="bg-black text-white p-6 rounded-b-lg
                    md:rounded-lg md:rounded-l-none"
                    >

                        <Typography
                            variant="p"
                            className="text-white/50"
                        >
                            GRAND TOTAL
                        </Typography>

                        <Typography
                            variant="h6OtherTight"
                            className="mt-2 text-white"
                        >
                            $ {formatNumber(orderTotal)}
                        </Typography>
                    </div>
                </div>

                <Button
                    variant="primary"
                    onClick={handleBackHome}
                    className="w-full mt-6
                    md:mt-11.5"
                >
                    BACK TO HOME
                </Button>
            </div>
        </div>
    )
}