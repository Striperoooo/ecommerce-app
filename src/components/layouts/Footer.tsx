import { Link } from "react-router-dom"
import Logo from "../../assets/shared/desktop/logo.svg?react"
import Facebook from "../../assets/shared/desktop/icon-facebook.svg?react"
import Twitter from "../../assets/shared/desktop/icon-twitter.svg?react"
import Instagram from "../../assets/shared/desktop/icon-instagram.svg?react"
import Typography from "../ui/Typography"


export default function Footer() {

    return (
        <footer className="bg-1010">

            <div className="w-full max-w-[1110px] mx-auto">
                <div className="border-t-4 border-d8 w-[101px] mx-auto
            md:ml-10
            lg:ml-0">
                </div>
            </div>


            <div
                className="flex flex-col items-center gap-12 text-center pt-12 pb-9.5 px-6
            md:items-start md:gap-8 md:pt-14 md:px-10
            lg:grid lg:grid-cols-2 lg:items-start
            lg:px-0 max-w-[1110px] mx-auto">


                <Link to="/" className="lg:col-span-1">
                    <Logo className="text-white hover:text-d8 active:text-d8/75" />
                </Link>

                <div
                    className="flex flex-col items-center gap-4
                md:flex-row md:gap-8.5 lg:justify-self-end lg:col-span-1"
                >
                    <Link to="/">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Home
                        </Typography>
                    </Link>

                    <Link to="/category/headphones">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Headphones
                        </Typography>
                    </Link>

                    <Link to="/category/speakers">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Speakers
                        </Typography>
                    </Link>

                    <Link to="/category/earphones">
                        <Typography
                            variant="subtitle"
                            className="text-white tracking-[2px] hover:text-d8 active:text-d8/75"
                        >
                            Earphones
                        </Typography>
                    </Link>
                </div>

                <Typography
                    variant="p"
                    className="text-white/50
                md:text-left lg:col-span-1 lg:max-w-[540px]">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Typography>

                <div
                    className="flex flex-col gap-12
                md:mt-12 md:flex-row md:gap-0 md:justify-between  md:w-full
                lg:contents"
                >

                    <Typography
                        variant="pBold"
                        className="font-bold text-white/50 md:text-left lg:mt-7 lg:col-start-1"
                    >
                        Copyright 2025. All Rights Reserved
                    </Typography>

                    <div
                        className="flex gap-4 items-center justify-center lg:col-start-2 lg:row-start-2 lg:justify-self-end lg:self-end">
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

            </div>

        </footer>
    )

}