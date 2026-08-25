'use client';

import './index.css';

import CardProduto from '@/components/card_produto';
import produtos from '@/script/produtos.js';

import { useSearchParams } from 'next/navigation';

export default function Menu() {
    const searchParams = useSearchParams();

    const search = searchParams.get('Search') ? searchParams.get('Search') : "";
    const type = searchParams.get('type') ? searchParams.get('type') : "all";

    const Produtos = () => {
        const list = []

        for (let i = 0; i < produtos.produtos.length; i++) {
            let item = produtos.produtos[i]
            if (((item.nome).toLowerCase()).includes((search).toLowerCase())) {
                if (type == "all") {
                    let card = <CardProduto item={item} key={i} />
                    list.push(card);
                } else {
                    if (item.categoria == type) {
                        let card = <CardProduto item={item} key={i} />
                        list.push(card);
                    }
                }
            }
        }

        if (list.length === 0) {
            return <h1>DON&apos;T HAVE MORE</h1>
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