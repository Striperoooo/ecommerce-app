import { Link } from "react-router-dom"
import { useState } from "react"
import Burger from "../../assets/shared/tablet/icon-hamburger.svg?react"
import Logo from "../../assets/shared/desktop/logo.svg?react"
import CartButton from "../../assets/shared/desktop/icon-cart.svg?react"
import CartModal from "../Cart/CartModal"
import { useCart } from "../../hooks/useCartHook"


export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    const toggleCart = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsCartOpen(!isCartOpen)
    }

    const handleOnClose = () => {
        setIsCartOpen(false)
    }

    return (
        <>
            <header className="sticky top-0 z-10">
                <div className="bg-black border-b-1 border-white/25 h-22.5 flex items-center justify-between" >

                    <Link to="/">
                        <Burger className="ml-6 text-white cursor-pointer hover:text-d8 active:text-d8/75" />
                    </Link>

                    <Link to="/">
                        <Logo className="text-white hover:text-d8 active:text-d8/75" />
                    </Link>

                    <button
                        onClick={toggleCart}
                        className="relative group focus:outline-none"
                    >
                        <CartButton
                            className="mr-6 text-white cursor-pointer hover:text-d8 active:text-d8/75
                            group-hover:text-d8 group-active:text-d8/75
                            "
                        />
                        {totalItems > 0 && (
                            <span className="absolute -top-2.5 right-3.5 bg-d8 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center
                            group-hover:bg-[#b5673c] group-active:bg-[#a25d38]
                            ">
                                {totalItems}
                            </span>
                        )}
                    </button>

                </div>
            </header>

            {isCartOpen && <CartModal onClose={handleOnClose} />}
        </>
    )

}