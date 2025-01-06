'use client';

import Card_cart from "./card_cart";
import { useCart } from "@/script/cartContext";

export default function Cart({ setOnCart }) {

    const { cart } = useCart();

    const cartItens = () => {
        const list = [];

        for (let i = 0; i < cart.length; i++) {
            let item = <Card_cart item={cart[i]} />
            list.push(item);
        }

        return list;
    }
    return (
        <div className="bg-[rgba(0,0,0,.23)] h-[100vh] w-[100vw] fixed top-0 left-0 z-50 flex flex-row justify-end cursor-default">
            <div className="bg-bg w-[30vw] h-full">
                <span className="flex flex-row justify-between p-5">
                    <h1 className="font-bold text-[1.4em]">CARRINHO</h1>

                    <h2 className="font-bold text-[1.4em] cursor-pointer" onClick={() => { setOnCart(false) }}>X</h2>
                </span>

                <div className="flex flex-col w-full px-10 gap-10">
                    {cartItens()}
                </div>
            </div>


        </div>
    );
}