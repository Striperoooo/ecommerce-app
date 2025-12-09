import { useState, useEffect } from "react"
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
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => setIsAnimating(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleBackHome = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsMounted(false);
            onClose();
            navigate('/');
        }, 300);
    }

    const cartMultipleItems = orderItems.length > 1
    const toggleShowAll = () => setShowAllItems(!showAllItems)
    const numOtherItems = orderItems.length - 1
    const firstItem = orderItems[0]

    const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num)

    if (!isMounted) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6
        md:px-28.5">
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />

            <div
                className={`bg-white p-8 rounded-lg w-full max-h-[90vh] overflow-y-auto relative
            md:p-12 md:max-w-[540px] transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
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
                    md:mt-0 md:rounded-l-lg md:rounded-r-none md:flex md:flex-col md:items-between md:justify-center md:p-4"
                    >
                        {/* Show only the first item initially */}

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4
                            md:gap-2">

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
                                className="text-black/50
                                md:ml-5"
                            >
                                x{firstItem.quantity}
                            </Typography>
                        </div>

                        {/* Conditionally show the rest of the items */}
                        {showAllItems && (
                            orderItems.slice(1).map(item => (
                                <div key={item.id} className="mt-4 flex items-center justify-between
                                "
                                >

                                    <div className="flex items-center gap-4
                                    md:gap-2"
                                    >

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

                                    <Typography
                                        variant="pBold"
                                        className="text-black/50
                                md:ml-5"
                                    >
                                        x{item.quantity}
                                    </Typography>
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
                    md:rounded-lg md:rounded-l-none md:flex md:flex-col md:justify-center"
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