import './index.css';

import CardProduto from '@/components/card_produto';
import produtos from '@/script/produtos.js';

export default function Menu({ slug }) {

    const Produtos = () => {
        const list = []

        for (let i = 0; i < produtos.produtos.length; i++) {
            let item = produtos.produtos[i]
            let card = <CardProduto item={item} key={i} />
            list.push(card);
        }

        return list
    };

    return (
        <section className="w-full flex justify-center pb-[10%] bg-bg">
            <main className="menuGrid px-[7%] w-[90%] gap-x-[10%] gap-y-[8%]">
                {Produtos()}
            </main>
        </section >
    );
}