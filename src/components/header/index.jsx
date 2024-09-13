import Link from "next/link";
import Image from "next/image";

import profile from "@/assets/header/profile.svg";
import cart from "@/assets/header/cart.svg";
import search from "@/assets/header/search.svg";

export default function Header() {
    return (
        <header className="flex fixed top-0 z-10 left-0 w-full justify-center items-center bg-transparent hover:bg-dark px-7 py-2 cursor-pointer">

            <nav className="text-white w-full flex gap-4">

                <Link href={'/'} >
                    HOME
                </Link>

                <Link href={'/'}>
                    LOJA
                </Link>

                <Link href={'/'}>
                    CONTATO
                </Link>

            </nav>

            <nav className="flex gap-4 items-center">

                <Link href={"/"} >
                    <Image
                        src={search}
                        className="w-[70%]"
                    />
                </Link>

                <Link href={"/"} >
                    <Image
                        src={profile}
                        className="w-[70%]"
                    />
                </Link>

                <Link href={"/"} >
                    <Image
                        src={cart}
                        className="w-[70%]"
                    />
                </Link>

            </nav>
        </header>
    );
}