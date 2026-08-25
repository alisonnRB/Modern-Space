"use client";

import "./index.css";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchParamsWrapper from '@/app/SearchParamsWrapper';

import profile from "@/assets/header/profile.svg";
import cart from "@/assets/header/cart.svg";
import Search from "./search";
import { useCart } from "@/script/cartContext";
import Cart from "@/components/cart";

export default function Header() {
    const [onCart, setOnCart] = useState(false);
    const { getTotalItemsCount } = useCart();

    return (
        <header className="flex fixed top-0 z-10 w-full justify-center items-center bg-transparent hover:bg-dark px-7 py-2 cursor-pointer">

            <nav className="text-white w-full flex gap-[3%]">

                <Link href={'/'} className="header-guia">
                    HOME
                </Link>

                <Link href={'/store/produtos'} className="header-guia">
                    LOJA
                </Link>

                <Link href={'/'} className="header-guia">
                    CONTATO
                </Link>

            </nav>

            <nav className="flex gap-3 items-center">
                <SearchParamsWrapper><Search /></SearchParamsWrapper>

                <Link href={"/"} >
                    <Image
                        src={profile}
                        className="min-w-[70%] w-[70%]"
                    />
                </Link>

                <span onClick={() => { setOnCart(true) }}>
                    {getTotalItemsCount() > 0 ? <div className={`w-4 h-4 text-[.8em] left-6 bottom-1 rounded-full relative bg-bg text-balck flex justify-center items-center mb-[-1em]`}>{getTotalItemsCount()}</div> : null}
                    <Image
                        src={cart}
                        className="min-w-[70%] w-[70%]"
                    />
                </span>

            </nav>

            {onCart ? <Cart setOnCart={setOnCart} /> : null}
        </header>
    );
}