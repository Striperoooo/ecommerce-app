import { Link } from "react-router-dom"
import Burger from "../../assets/shared/tablet/icon-hamburger.svg?react"
import Logo from "../../assets/shared/desktop/logo.svg?react"
import Cart from "../../assets/shared/desktop/icon-cart.svg?react"

export default function Header() {

    return (
        <>
            <header className="">
                <div className="bg-black border-b-1 border-white/25 h-22.5 flex items-center justify-between" >

                    <Link to="/">
                        <Burger className="ml-6 text-white cursor-pointer hover:text-d8 active:text-d8/75" />
                    </Link>

                    <Link to="/">
                        <Logo className="text-white hover:text-d8 active:text-d8/75" />
                    </Link>

                    <Link to="/">
                        <Cart className="mr-6 text-white cursor-pointer hover:text-d8 active:text-d8/75" />
                    </Link>

                </div>
            </header>
        </>
    )

}