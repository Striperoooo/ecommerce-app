import { Link } from "react-router-dom"
import { useState } from "react"
import Burger from "../../assets/shared/tablet/icon-hamburger.svg?react"
import Logo from "../../assets/shared/desktop/logo.svg?react"
import CartButton from "../../assets/shared/desktop/icon-cart.svg?react"
import CartModal from "../Cart/CartModal"
import { useCart } from "../../hooks/useCartHook"
import NavModal from "../Header/NavModal"
import Typography from "../ui/Typography"

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    const toggleCart = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsCartOpen(!isCartOpen)
    }

    const handleOnClose = () => {
        setIsCartOpen(false)
    }

    const toggleNav = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsNavOpen(!isNavOpen)
    }

    const handleNavClose = () => {
        setIsNavOpen(false)
    }

    return (
        <>
            <header
                className="sticky top-0 z-20
                lg:px-41.25 lg:bg-black"
            >

                <div
                    className="bg-black border-b-1 border-white/25 h-22.5 flex items-center justify-between
                md:justify-start md:gap-10.5  lg:justify-between lg:gap-0
                lg:mx-auto lg:max-w-[1110px]"
                >

                    <button onClick={toggleNav} className="lg:hidden">
                        <Burger className="ml-6 text-white cursor-pointer hover:text-d8 active:text-d8/75" />
                    </button>

                    <Link to="/">
                        <Logo className="text-white hover:text-d8 active:text-d8/75" />
                    </Link>

                    <nav
                        className="hidden 
                    lg:flex lg:gap-8.5"
                    >
                        <Link to="/">
                            <Typography variant="subtitle" className="text-white hover:text-d8 active:text-d8/75">
                                HOME
                            </Typography>
                        </Link>
                        <Link to="/category/headphones">
                            <Typography variant="subtitle" className="text-white hover:text-d8 active:text-d8/75">
                                HEADPHONES
                            </Typography>
                        </Link>
                        <Link to="/category/speakers">
                            <Typography variant="subtitle" className="text-white hover:text-d8 active:text-d8/75">
                                SPEAKERS
                            </Typography>
                        </Link>
                        <Link to="/category/earphones">
                            <Typography variant="subtitle" className="text-white hover:text-d8 active:text-d8/75">
                                EARPHONES
                            </Typography>
                        </Link>
                    </nav>

                    <button
                        onClick={toggleCart}
                        className="relative group focus:outline-none
                        md:ml-auto lg:ml-0"
                    >
                        <CartButton
                            className="mr-6 text-white cursor-pointer hover:text-d8 active:text-d8/75
                            group-hover:text-d8 group-active:text-d8/75
                            lg:mr-0"
                        />
                        {totalItems > 0 && (
                            <span className="absolute -top-2.5 right-3.5 bg-d8 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center
                            group-hover:bg-[#b5673c] group-active:bg-[#a25d38]
                            lg:-right-3.5">
                                {totalItems}
                            </span>
                        )}
                    </button>

                </div>
            </header>

            <NavModal isOpen={isNavOpen} onClose={handleNavClose} />
            <CartModal isOpen={isCartOpen} onClose={handleOnClose} />
        </>
    )

}