import React, { useState } from 'react'

type QuantitySelectorProps = {
    quantity: number
    onIncrement: () => void;
    onDecrement: () => void;
    small?: boolean;
}

export default function QuantitySelector({
    quantity,
    onIncrement,
    onDecrement,
    small
}: QuantitySelectorProps) {

    const containerClass =
        small
            ? "min-w-[96px] min-h-[32px]"
            : "min-w-[120px] min-h-[48px]"

    const buttonClass =
        small
            ? "px-[0.719em]"
            : "px-3.75"

    const quantityClass =
        small
            ? "px-[0.719em]"
            : "px-3.75 "

    return (
        <div
            className={`flex items-center bg-f1f1 ${containerClass}`}
        >

            <button
                type="button"
                onClick={onDecrement}
                className={`${buttonClass} text-black/50 hover:text-d8 active:text-orange-active cursor-pointer`}
            >
                −
            </button>

            <div className={`${quantityClass} font-bold text-sm`}>
                {quantity}
            </div>

            <button
                type="button"
                onClick={onIncrement}
                className={`${buttonClass} text-black/50 hover:text-d8 active:text-orange-active cursor-pointer`}
            >
                +
            </button>
        </div>
    )
}
