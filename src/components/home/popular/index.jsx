import "./index.css";

import CardProduto from "@/components/card_produto";
import products from '@/script/produtos';

export default function Popular() {
    const popularProducts = () => {
        const list = []
        for (let i = 0; i < 3; i++) {
            let item = products.produtos[i]
            let card = <CardProduto item={item} key={i} />
            list.push(card);
        }

        return list
    }

    return (

        <section className="mt-[15%] mb-[15%] flex flex-col items-center">
            <h1 className="popular-title font-medium flex justify-center mb-[5%]">POPULARES</h1>

            <span className="container-products px-[7%] w-[90%] gap-x-[10%] gap-y-[8%]">

                {popularProducts()}

            </span>

        </section>
    );
}