import { useCart } from "../../hooks/useCartHook";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import CartItemUpdateControls from "./CartItemUpdateControls";

interface CartModalProps {
    onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {

    const { cart, clearCart } = useCart()

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const formattedTotal = new Intl.NumberFormat('en-US').format(total)

    const handleRemoveAll = () => {
        clearCart()
    }

    return (
        <div className="fixed inset-0 bg-black/40 z-20" onClick={onClose}>

            <div
                className="absolute top-28.5 left-1/2 transform -translate-x-1/2 bg-white px-7 py-8 rounded-lg shadow-xl w-[calc(100%_-_3rem)]"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <Typography variant="h6Other" className="text-black">
                        CART ({cart.length})
                    </Typography>


                    <button
                        className="font-medium text-black/50 text-[15px] leading-[25px] tracking-[0px] cursor-pointer hover:underline active:text-black/38"
                        onClick={handleRemoveAll}
                    >
                        Remove all
                    </button>

                </div>

                {cart.length === 0
                    ? (<Typography variant="p" className="text-center text-black/50">
                        Your cart is empty.
                    </Typography>
                    )
                    : (
                        <>
                            {cart.map(item => (
                                <>
                                    <div key={item.id} className="flex items-center mb-4 justify-between gap-4.75">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image.mobile}
                                                alt={name}
                                                className="w-[64px] h-[64px] rounded-lg"
                                            />

                                            <div className="flex flex-col justify-between">
                                                <Typography variant="pBold" className="text-black">
                                                    {item.cartName}
                                                </Typography>

                                                <Typography variant="overlineBold" className="text-black/50">
                                                    $ {new Intl.NumberFormat('en-US').format(item.price)}
                                                </Typography>
                                            </div>
                                        </div>

                                        <CartItemUpdateControls
                                            id={item.id}
                                            quantity={item.quantity}
                                        />
                                    </div>
                                </>
                            ))}

                            <div className="flex justify-between items-center mt-8">
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

                            <Button
                                variant="primary"
                                to="/checkout"
                                className="mt-6 w-full"
                                onClick={onClose}
                            >
                                Checkout
                            </Button>
                        </>
                    )}
            </div>
        </div>
    )
}