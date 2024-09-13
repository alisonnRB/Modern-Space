import "./index.css";
import Image from "next/image";

import Link from "next/link";
import cadeira from "@/assets/produtos/cadeira_promocional.png";

export default function Promotion() {
    return (
        <section className="flex mt-[15%]">

            <h1 className="bg-dark text-bg font-bold title-promo py-[2%] px-[1%] inter flex justify-center items-center">
                PROMOÇÃO
            </h1>

            <div className="flex flex-col justify-between ml-[3%]">

                <h1 className="promo-name font-bold text-dark inter">
                    CADEIRA <br /> DECORATIVA
                </h1>

                <span>

                    <h3 className="promo-name font-bold text-main line-through inter">
                        R$ 500,00
                    </h3>

                    <h2 className="promo-price font-bold text-dark inter">
                        R$ 400,00
                    </h2>

                    <Link href="">
                        <button className="min-w-full border-solid border-dark border-[1px] inter py-[5%] px-[5%] sub-title text-nowrap">
                            ADICIONAR AO CARRINHO
                        </button>
                    </Link>

                </span>
            </div>

            <div className="ml-auto mr-[5%] w-1/3">
                <Image
                    src={cadeira}
                    alt=""
                    objectFit="contain"
                    quality={100}
                    className="h-[100%]"
                />
            </div>

        </section>
    );
}