import React, { useState } from 'react'

type Props = {
    initial?: number
    min?: number
    max?: number
    onChange?: (n: number) => void
    className?: string
}

export default function QuantitySelector({
    initial = 1,
    min,
    max,
    onChange,
    className = '',
}: Props) {

    const [quantity, setQuantity] = useState<number>(initial)

    const MIN_QUANTITY = 0

    const decrease = () => {
        setQuantity((prev) => Math.max(MIN_QUANTITY, prev - 1));
    }

    const increase = () => {
        setQuantity((prev) => prev + 1);

    }

    return (
        <div
            className={`inline-flex items-stretch justify-stretch min-w-[120px] h-12 ${className}`}
        >

            <button
                type="button"
                onClick={decrease}
                className="bg-f1f1 w-9 h-full text-black/25 text-[0.813rem] flex items-center justify-center cursor-pointer hover:text-d8 active:text-d8/75 transition"
            >
                −
            </button>

            <div className="bg-f1f1 text-black text-[0.813rem] tracking-[1px] min-w-8 h-full grow flex items-center justify-center font-medium">
                {quantity}
            </div>

            <button
                type="button"
                onClick={increase}
                className="bg-f1f1 w-9 h-full text-black/25 text-[0.813rem] flex items-center justify-center cursor-pointer hover:text-d8 active:text-d8/75 transition"
            >
                +
            </button>
        </div>
    )
}
