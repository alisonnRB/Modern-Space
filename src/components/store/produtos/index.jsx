import './index.css';

import CardProduto from '@/components/card_produto';
import produtos from '@/script/produtos.js';

export default function Menu({ food }) {

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
        <section className="w-full flex justify-center py-[10%]">
            <main className="w-[80%] menuGrid gap-x-[14.5%] gap-y-[30%] pb-[30%]">
                {Produtos()}
            </main>
        </section >
    );
}