import { useCart } from "../../hooks/useCartHook";
import QuantitySelector from "../ui/QuantitySelector";

interface CartItemUpdateControlsProps {
    id: number;
    quantity: number;
}

export default function CartItemUpdateControls({
    id,
    quantity
}: CartItemUpdateControlsProps) {
    const { updateItemQuantity, removeFromCart } = useCart()

    const handleIncrement = () => {
        updateItemQuantity(id, quantity + 1)
    }

    const handleDecrement = () => {
        if (quantity === 1) {
            removeFromCart(id)
        }
        else {
            updateItemQuantity(id, quantity - 1)
        }
    }

    return (
        <QuantitySelector
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            small={true}
        />
    )

}