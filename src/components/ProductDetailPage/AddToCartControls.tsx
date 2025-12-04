import { useState } from "react";
import Button from "../ui/Button";
import { useCart } from "../../context/CartContext";
import type { ImageSet } from "../../types";

interface AddToCartControlsProps {
    id: number;
    name: string;
    image: ImageSet;
    price: number;
}

export default function AddToCartControls({
    id,
    name,
    image,
    price
}: AddToCartControlsProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            image,
            price,
            quantity
        });

        setQuantity(1);
    };

    return (
        <div className="flex gap-4 mt-7.75">
            <div className="min-w-[120px] flex items-center bg-f1f1">
                <button onClick={decrement} className="px-3.75 text-black/50 hover:text-d8 active:text-orange-active cursor-pointer">
                    -
                </button>
                <span
                    className="px-3.75  font-bold text-sm"
                >
                    {quantity}
                </span>
                <button onClick={increment} className="px-3.75 text-black/50 hover:text-d8 active:text-orange-active cursor-pointer">
                    +
                </button>
            </div>

            <Button variant="primary" onClick={handleAddToCart}>
                ADD TO CART
            </Button>
        </div>
    );
}