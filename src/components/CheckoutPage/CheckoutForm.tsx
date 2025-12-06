import { useState } from "react";
import Typography from "../ui/Typography";
import InputField from "../ui/InputField";

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    paymentMethod: 'eMoney' | 'cashOnDelivery';
    eMoneyNumber: string;
    eMoneyPin: string;
}

export default function CheckoutForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', phone: '', address: '', zip: '', city: '', country: '',
        paymentMethod: 'eMoney',
        eMoneyNumber: '', eMoneyPin: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({ ...prevData, paymentMethod: e.target.value as 'eMoney' | 'cashOnDelivery' }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Integrate navigation to final confirmation page here.
    }

    return (
        <section className="bg-white px-6 py-8 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <Typography
                    variant="h4OtherTight"
                    className="text-black"
                >
                    Checkout
                </Typography>

                {/* BILLING DETAILS Section */}
                <div className=''>
                    <Typography
                        variant="subtitle"
                        className="text-d8 "
                    >
                        Billing Details
                    </Typography>

                    <div className="mt-4 flex flex-col gap-4">
                        <InputField label="Name" id="name" name="name" type="text" value={formData.name} placeholder="Alexei Ward" onChange={handleChange} />

                        <InputField label="Email Address" id="email" name="email" type="email" value={formData.email} placeholder="alexei@mail.com" onChange={handleChange} />

                        <InputField label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} placeholder="+1 202-555-0136" onChange={handleChange} />
                    </div>
                </div>

                {/* SHIPPING INFO Section */}
                <div className=''>
                    <Typography
                        variant="subtitle"
                        className="text-d8 "
                    >
                        Shipping info
                    </Typography>
                    <div className="mt-4 flex flex-col gap-4">
                        <InputField label="Your Address" id="address" name="address" type="text" value={formData.address} placeholder={"1137 Williams Avenue"} onChange={handleChange} />

                        <InputField label="ZIP Code" id="zip" name="zip" type="text" value={formData.zip} placeholder={"10001"} onChange={handleChange} />

                        <InputField label="City" id="city" name="city" type="text" value={formData.city} placeholder={"New York"} onChange={handleChange} />

                        <InputField label="Country" id="country" name="country" type="text" value={formData.country} placeholder={"United States"} onChange={handleChange} />
                    </div>
                </div>

                {/* PAYMENT DETAILS Section */}
                <div className=''>
                    <Typography
                        variant="subtitle"
                        className="text-d8 "
                    >
                        Payment details
                    </Typography>

                    <div className="mt-4 flex flex-col gap-4">
                        <label className="block text-xs font-bold leading-normal tracking-[-0.21px] text-black ">
                            Payment Method
                        </label>

                        {/* Radio Button 1: e-Money */}
                        <div className="mt-1">

                            <label className="flex items-center  gap-4 border border-input-border rounded-lg p-4 cursor-pointer hover:border-d8">

                                <input type="radio" name="paymentMethod" value="eMoney" checked={formData.paymentMethod === 'eMoney'} onChange={handlePaymentChange} className="h-5 w-5 text-d8" />

                                <Typography
                                    variant="overlineBoldTight"
                                    className="text-black"
                                >
                                    e-Money
                                </Typography>
                            </label>
                        </div>

                        {/* Radio Button 2: Cash on Delivery */}
                        <div className="mt-1">

                            <label className="flex items-center  gap-4 border border-input-border rounded-lg p-4 cursor-pointer hover:border-d8">

                                <input type="radio" name="paymentMethod" value="cashOnDelivery" checked={formData.paymentMethod === 'cashOnDelivery'} onChange={handlePaymentChange} className="h-5 w-5 text-d8" />

                                <Typography
                                    variant="overlineBoldTight"
                                    className="text-black"
                                >
                                    Cash on Delivery
                                </Typography>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Conditionally rendered fields based on radio selection */}
                {formData.paymentMethod === 'eMoney' && (
                    <div className="mt-4 flex flex-col gap-4">

                        <InputField label="e-Money Number" id="eMoneyNumber" name="eMoneyNumber" type="text" value={formData.eMoneyNumber} placeholder={"238521993"} onChange={handleChange} />

                        <InputField label="e-Money PIN" id="eMoneyPin" name="eMoneyPin" type="password" value={formData.eMoneyPin} placeholder={"6891"} onChange={handleChange} />
                    </div>
                )}

            </form>
        </section>
    )
}
