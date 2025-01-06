'use client';

import { notFound } from 'next/navigation';
import produtos from '@/script/produtos';

import Pimage from '@/components/produto_image';
import Info_product from '@/components/card_info_produto';

export default function Menu({ params }) {
    const { slug } = params;
    const decodedNome = decodeURIComponent(slug);

    const product = produtos.produtos.find(produto => produto.nome === decodedNome);

    if (!product) {
        notFound();
    }

    return (
        <main className="flex flex-col bg-bg">

            <div className='relative h-[90vh] w-[100vw] mt-20 mb-20'>
                <div className='text-motion absolute h-[100%] w-[100%] flex justify-center items-center overflow-clip z-0'>
                    <h1 className='text-[35em] font-extrabold'>ATELIER</h1>
                </div>

                <span className='flex flex-row z-10 w-full h-full justify-around'>
                    <Pimage product={product} />
                    <Info_product product={product} />
                </span>
            </div>

        </main>
    );
}
