'use client';

import Card_cart from "./card_cart";
import { useCart } from "@/script/cartContext";

export default function Cart({ setOnCart }) {

    const { cart, total } = useCart();

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
            <div className="bg-bg w-[30vw] h-full flex flex-col">
                <span className="flex flex-row justify-between p-5">
                    <h1 className="font-bold text-[1.4em]">CARRINHO</h1>

                    <h2 className="font-bold text-[1.4em] cursor-pointer" onClick={() => { setOnCart(false) }}>X</h2>
                </span>

                <div className="flex flex-col w-full px-10 gap-10 h-full py-4 overflow-auto">
                    {cartItens()}
                </div>

                <div className="bg-white h-[25%] p-5 ">
                    <span className="flex flex-row justify-between py-3 border-solid border-b-4 border-main">
                        <h1>TOTAL</h1>
                        <h1>R$ {" " + ((parseFloat(total)).toFixed(2)).replace('.', ',')}</h1>
                    </span>

                    <div className="flex flex-col justify-center items-center gap-4 mt-4">
                        <button className="bg-black w-[80%] h-1/2 py-2 px-3 text-white">COMPRAR</button>
                        <button className="bg-motion w-[80%] h-1/2 py-2 px-3 whitespace-nowrap" onClick={() => { setOnCart(false) }}>CONTINUAR COMPRANDO</button>
                    </div>

                </div>
            </div>


        </div>
    );
}