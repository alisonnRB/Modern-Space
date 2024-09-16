import './index.css';

import CardProduto from '@/components/card_produto';
import produtos from '@/script/produtos.js';

export default function Menu({ food }) {

    const Produtos = () => {

    };

    return (
        <section className="w-full flex justify-center">
            <main className="w-[80%] menuGrid gap-x-[5%]">
                {Produtos()}
            </main>
        </section>
    );
}