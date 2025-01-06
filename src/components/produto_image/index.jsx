'use client';

import { useState } from "react";
import Image from "next/image";

export default function Pimage({ product }) {

    const [imagens, setImagens] = useState(1);

    return (
        <span className="h-full w-[40%] relative z-20 ml-10 flex flex-row ">

            <div className="w-40 h-full flex flex-col justify-center items-center gap-8">
                <div className={`w-[40%] cursor-pointer ${imagens == 1 ? "opacity-100" : "opacity-30"}`} onClick={() => { setImagens(1) }}>
                    <Image
                        src={product.src}
                        alt=""
                        objectFit="contain"
                        quality={100}
                        className="max-h-[90%]"
                    />
                </div>

                <div className={`w-[40%] cursor-pointer ${imagens == 2 ? "opacity-100" : "opacity-30"}`} onClick={() => { setImagens(2) }}>
                    <Image
                        src={product.src}
                        alt=""
                        objectFit="contain"
                        quality={100}
                        className="max-h-[90%]"
                    />
                </div>

                <div className={`w-[40%] ${imagens == 3 ? "opacity-100" : "opacity-30"}`} onClick={() => { setImagens(3) }}>
                    <Image
                        src={product.src}
                        alt=""
                        objectFit="contain"
                        quality={100}
                        className="max-h-[90%]"
                    />
                </div>
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center">

                <Image
                    src={product.src}
                    alt=""
                    objectFit="contain"
                    quality={100}
                    className="scale-125"
                />

            </div>

        </span>
    )
}