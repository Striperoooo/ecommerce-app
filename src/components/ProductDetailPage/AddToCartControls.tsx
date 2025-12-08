import { useState } from "react";
import Button from "../ui/Button";
import { useCart } from "../../hooks/useCartHook";
import type { ImageSet } from "../../types";
import QuantitySelector from "../ui/QuantitySelector";

interface AddToCartControlsProps {
    id: number;
    name: string;
    cartName: string;
    image: ImageSet;
    price: number;
    onAddtoCartSuccess: (productName: string) => void;
}

export default function AddToCartControls({
    id,
    name,
    cartName,
    image,
    price,
    onAddtoCartSuccess,
}: AddToCartControlsProps) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            cartName,
            image,
            price,
            quantity
        });

        onAddtoCartSuccess(name)

        setQuantity(1);
    };

    return (
        <div className="flex gap-4">
            <QuantitySelector
                quantity={quantity}
                onIncrement={increment}
                onDecrement={decrement}
            />

            <Button variant="primary" onClick={handleAddToCart}>
                ADD TO CART
            </Button>
        </div>
    );
}