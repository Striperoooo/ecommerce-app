import CheckoutForm from "../components/CheckoutPage/CheckoutForm"
import SummarySection from "../components/CheckoutPage/SummarySection"
import Typography from "../components/ui/Typography"



export default function CheckoutPage() {
    return (
        <>
            <div className="bg-fafa p-6">
                <CheckoutForm />

                <div className="mt-8">
                    <SummarySection />
                </div>
            </div>
        </>
    )
}