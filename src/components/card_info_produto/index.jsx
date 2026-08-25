'use client';

import { useState } from "react";
import { useCart } from "@/script/cartContext";

export default function Info_product({ product }) {
    const [qtd, setQtd] = useState(1);
    const { addItemToCart } = useCart();

    const [inAnimation, setAnimation] = useState(false);

    const animationCardForAddItem = async (item) => {
        if (inAnimation) {
            return;
        }

        setAnimation(true);
        for (let i = 0; i < qtd; i++) {
            addItemToCart(item);
        }


        await delay(1000);

        setAnimation(false);

    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }


    const cor = () => {
        const list = [];

        for (let i = 0; i < (product.cores).length; i++) {
            let a = (<div
                className="rounded-full p-3 mt-4"
                style={{ backgroundColor: product.cores[i] }}
            ></div>)

            list.push(a);
        }

        return list;
    }


    return (
        <span className="h-full w-[40%] relative  mr-10 flex flex-row justify-center items-center">

            <div className="bg-white p-10 w-[60%] h-[60%] flex flex-col">
                <h1 className="text-main font-bold">{product.nome}</h1>
                {product.desconto != 0 ? <p className="font-light text-[.7em] text-black line-through ">R$ {" " + ((product.price).toFixed(2)).replace('.', ',')}</p> : null}
                <p className="font-bold text-dark">R$ {" " + ((product.price - (product.price * product.desconto)).toFixed(2)).replace('.', ',')}</p>

                <div className="w-full px-2 border-l-4 border-main mt-4 text-[.7em] font-medium">
                    {product.suma}
                </div>

                {product.cores && product.cores[0] ? (
                    <span className="flex flex-row gap-3">
                        {cor()}
                    </span>
                ) : null}

                <span className="w-full flex flex-row justify-between h-10 mt-10">

                    <span className="flex flex-row">
                        <div className="h-full w-10 flex justify-center items-center border-solid border-[.1em] border-black">
                            {qtd}
                        </div>

                        <div className="h-full w-5 border-solid border-y-[.1em] border-r-[.1em] border-black">
                            <div className="h-1/2 flex justify-center items-center cursor-pointer" onClick={() => { setQtd(qtd + 1) }}>
                                &and;
                            </div>

                            <div className="h-1/2 cursor-pointer flex justify-center items-center border-solid border-t-[.1em] border-black" onClick={qtd < 2 ? null : () => { setQtd(qtd - 1) }}>
                                &or;
                            </div>
                        </div>

                    </span>

                    <button className="h-full px-2 bg-black text-white font-semibold text-[.8em]" onClick={() => { animationCardForAddItem(product) }}>
                        ADICIONAR AO CARRINHO
                    </button>

                </span>

            </div>

        </span>
    );
}