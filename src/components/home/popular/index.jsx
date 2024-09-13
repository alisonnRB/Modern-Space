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

        <section className="mt-[15%] mb-[15%]">
            <h1 className="popular-title font-medium flex justify-center mb-[20%]">POPULARES</h1>

            <span className="container-products px-[7%]">

                {popularProducts()}

            </span>

        </section>
    );
}