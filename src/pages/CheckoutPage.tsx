import CheckoutForm from "../components/CheckoutPage/CheckoutForm"
import SummarySection from "../components/CheckoutPage/SummarySection"
import Typography from "../components/ui/Typography"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCartHook"
import type { FormData } from "../components/CheckoutPage/CheckoutForm"


export default function CheckoutPage() {
    const navigate = useNavigate()
    const { cart, clearCart } = useCart()

    const handleFormSubmit = (formData: FormData) => {
        console.log("Final Order Data:", {
            customerInfo: formData,
            cartItems: cart,
        });

        clearCart();
        // Navigate to the "Thank You" order confirmation page
        navigate('/order-confirmation');
    }


    return (
        <>
            <div className="bg-fafa p-6">
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
        </>
    )
}