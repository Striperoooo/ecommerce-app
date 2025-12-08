import CheckoutForm from "../components/CheckoutPage/CheckoutForm"
import SummarySection from "../components/CheckoutPage/SummarySection"
import OrderConfirmationModal from "../components/CheckoutPage/OrderConfirmationModal"
import GoBackButton from "../components/ui/GoBackButton"
import Button from "../components/ui/Button"
import { useCart } from "../hooks/useCartHook"
import type { FormData } from "../components/CheckoutPage/CheckoutForm"
import type { CartItem } from "../context/CartContext"
import { useState } from "react"


export default function CheckoutPage() {
    const { cart, clearCart } = useCart()
    const [confirmedOrder, setConfirmedOrder] = useState<{ items: CartItem[], total: number } | null>(null)

    const handleFormSubmit = (formData: FormData) => {
        const orderItems = [...cart]
        const SHIPPING_COST = 50
        const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        const orderGrandTotal = orderTotal + SHIPPING_COST

        console.log("Final Order Data:", {
            customerInfo: formData,
            orderItems,
            orderGrandTotal,
        });

        setConfirmedOrder({ items: orderItems, total: orderGrandTotal })

        clearCart()
    }


    return (
        <>
            <div
                className="bg-fafa px-6 pb-6
            md:px-10 md:pb-29"
            >
                <GoBackButton />

                <CheckoutForm onSubmit={handleFormSubmit} />

                <div className="mt-8 bg-white px-6 py-8 rounded-lg ">
                    <SummarySection />

                    {cart.length > 0 && (
                        <Button
                            variant="primary"
                            type="submit"
                            form="checkout-form"
                            className="mt-8 w-full"
                        >
                            Continue & Pay
                        </Button>
                    )}
                </div>
            </div>

            {confirmedOrder && (
                <OrderConfirmationModal
                    orderItems={confirmedOrder.items}
                    orderTotal={confirmedOrder.total}
                    onClose={() => setConfirmedOrder(null)}
                />
            )}

        </>
    )
}