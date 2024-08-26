import Link from "next/link";
import Image from "next/image";

import profile from "@/assets/header/profile.svg";
import cart from "@/assets/header/cart.svg";
import search from "@/assets/header/search.svg";

export default function Header() {
    return (
        <header className="flex justify-center items-center bg-transparent hover:bg-dark px-4">

            <nav className="text-white w-full">

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

            <nav className="flex">

                <Link href={"/"} >
                    <Image
                        src={search}
                    />
                </Link>

                <Link href={"/"} >
                    <Image
                        src={profile}
                    />
                </Link>

                <Link href={"/"} >
                    <Image
                        src={cart}
                    />
                </Link>

            </nav>
        </header>
    );
}