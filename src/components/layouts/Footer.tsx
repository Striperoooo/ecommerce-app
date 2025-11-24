import { Link } from "react-router-dom"
import Logo from "../../assets/shared/desktop/logo.svg?react"
import Facebook from "../../assets/shared/desktop/icon-facebook.svg?react"
import Twitter from "../../assets/shared/desktop/icon-twitter.svg?react"
import Instagram from "../../assets/shared/desktop/icon-instagram.svg?react"
import Typography from "../ui/Typography"


export default function Footer() {

    return (
        <footer className="bg-1010">

            <div className="mx-auto border-t-4 border-d8 w-[101px]"></div>

            <div className="flex flex-col items-center gap-12 text-center pt-12 pb-9.5 px-6">
                <Link to="/">
                    <Logo className="text-white hover:text-d8 active:text-d8/75" />
                </Link>

                <div className="flex flex-col items-center gap-4 ">
                    <Link to="">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Home
                        </Typography>
                    </Link>

                    <Link to="">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Headphones
                        </Typography>
                    </Link>

                    <Link to="">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Speakers
                        </Typography>
                    </Link>

                    <Link to="">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Earphones
                        </Typography>
                    </Link>
                </div>

                <Typography variant="p" className="text-white/50 ">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Typography>

                <Typography variant="pBold" className="font-bold text-white/50  ">Copyright 2025. All Rights Reserved</Typography>

                <div className="flex gap-4 items-center justify-center">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook className="text-white hover:text-d8 active:text-d8/75" />
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="text-white hover:text-d8 active:text-d8/75" />
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram className="text-white hover:text-d8 active:text-d8/75" />
                    </a>
                </div>

            </div>

        </footer>
    )

}