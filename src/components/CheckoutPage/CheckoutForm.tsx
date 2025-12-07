import { useState, useRef } from "react";
import Typography from "../ui/Typography";
import InputField from "../ui/InputField";

type FormErrors = Partial<Record<keyof FormData, boolean>>

export interface FormData {
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

interface CheckoutFormProps {
    onSubmit: (formData: FormData) => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', phone: '', address: '', zip: '', city: '', country: '',
        paymentMethod: 'eMoney',
        eMoneyNumber: '', eMoneyPin: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})

    // --- Create refs for key inputs to focus them on error ---
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const addressRef = useRef<HTMLInputElement>(null);
    const zipRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const eMoneyNumberRef = useRef<HTMLInputElement>(null);
    const eMoneyPinRef = useRef<HTMLInputElement>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors(prev => ({ ...prev, [e.target.name]: false }))

        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({ ...prevData, paymentMethod: e.target.value as 'eMoney' | 'cashOnDelivery' }))
    }

    const validateForm = (data: FormData): boolean => {
        const newErrors: FormErrors = {}
        let isValid = true

        if (!data.name.trim()) newErrors.name = true
        if (!data.address.trim()) newErrors.address = true
        if (!data.city.trim()) newErrors.city = true

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            newErrors.email = true
        }

        if (!data.phone.trim()) newErrors.phone = true;

        if (data.paymentMethod === 'eMoney') {
            if (!data.eMoneyNumber.trim()) newErrors.eMoneyNumber = true;
            if (!data.eMoneyPin.trim()) newErrors.eMoneyPin = true
        }

        setErrors(newErrors)
        isValid = Object.keys(newErrors).length === 0

        if (!isValid) {
            if (newErrors.name && nameRef.current) {
                nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                nameRef.current.focus()
            } else if (newErrors.email && emailRef.current) {
                emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                emailRef.current.focus()
            } else if (newErrors.phone && phoneRef.current) {
                phoneRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                phoneRef.current.focus()
            }
            else if (newErrors.address && addressRef.current) {
                addressRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                addressRef.current.focus()
            } else if (newErrors.zip && zipRef.current) {
                zipRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                zipRef.current.focus()
            } else if (newErrors.city && cityRef.current) {
                cityRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                cityRef.current.focus()
            } else if (newErrors.country && countryRef.current) {
                countryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                countryRef.current.focus()
            } else if (newErrors.eMoneyNumber && eMoneyNumberRef.current) {
                eMoneyNumberRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                eMoneyNumberRef.current.focus()
            } else if (newErrors.eMoneyPin && eMoneyPinRef.current) {
                eMoneyPinRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                eMoneyPinRef.current.focus()
            }
            // Add other conditions for other refs if needed
        }

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm(formData)) {
            onSubmit(formData); // Only submit if the form is valid
        } else {
            console.log("Form validation failed.");
        }
    }

    return (
        <section className="bg-white px-6 py-8 rounded-lg">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                id="checkout-form"
            >
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
                        <InputField label="Name" id="name" name="name" type="text" value={formData.name} placeholder="Alexei Ward" onChange={handleChange} required error={errors.name} ref={nameRef} />

                        <InputField label="Email Address" id="email" name="email" type="email" value={formData.email} placeholder="alexei@mail.com" onChange={handleChange} required error={errors.email} ref={emailRef} />

                        <InputField label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} placeholder="+1 202-555-0136" onChange={handleChange} required error={errors.phone} ref={phoneRef} />
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
                        <InputField label="Your Address" id="address" name="address" type="text" value={formData.address} placeholder={"1137 Williams Avenue"} onChange={handleChange} required error={errors.address} ref={addressRef} />

                        <InputField label="ZIP Code" id="zip" name="zip" type="text" value={formData.zip} placeholder={"10001"} onChange={handleChange} required error={errors.zip} ref={zipRef} />

                        <InputField label="City" id="city" name="city" type="text" value={formData.city} placeholder={"New York"} onChange={handleChange} required error={errors.city} ref={cityRef} />

                        <InputField label="Country" id="country" name="country" type="text" value={formData.country} placeholder={"United States"} onChange={handleChange} required error={errors.country} ref={countryRef} />
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

                        <InputField label="e-Money Number" id="eMoneyNumber" name="eMoneyNumber" type="text" value={formData.eMoneyNumber} placeholder={"238521993"} onChange={handleChange} error={errors.eMoneyNumber} ref={eMoneyNumberRef} />

                        <InputField label="e-Money PIN" id="eMoneyPin" name="eMoneyPin" type="password" value={formData.eMoneyPin} placeholder={"6891"} onChange={handleChange} error={errors.eMoneyPin} ref={eMoneyPinRef} />
                    </div>
                )}

            </form>
        </section>
    )
}
