import "./index.css"

import Image from "next/image"
import Link from "next/link"

export default function CardProduto({ item }) {
    return (
        <div className="flex flex-col container-card gap-[3%]">

            <div className="bg-motion motion relative">
                <Image
                    src={item.src}
                    alt=""
                    objectFit="contain"
                    quality={100}
                    className="absolute bottom-2"
                />
            </div>

            <div className="flex flex-col gap-[1%]">
                <p className="product-name font-medium text-main">{item.nome}</p>

                <span className="flex gap-[5%]">
                    <p className="product-name font-bold text-dark">R$ {" " + ((item.price - (item.price * item.desconto)).toFixed(2)).replace('.', ',')}</p>
                    {item.desconto != 0 ? <p className="product-name font-medium text-main line-through ">R$ {" " + ((item.price).toFixed(2)).replace('.', ',')}</p> : null}
                </span>

                <Link href="">
                    <button className="w-full border-solid border-dark border-[1px] inter py-[3%] px-[1%] product-name text-nowrap">
                        ADICIONAR AO CARRINHO
                    </button>
                </Link>
            </div>

        </div>
    )
}