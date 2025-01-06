import trash from '@/assets/cart_card/Trash.png'
import Image from 'next/image';
import { useCart } from "@/script/cartContext";

export default function Card_cart({ item }) {
    const { addItemToCart, removeItemFromCart, removeItemAllFromCart } = useCart();

    return (
        <div className='bg-white px-3 pb-3 pt-2 w-full relative'>
            <span className='flex flex-row justify-end items-center h-3 w-full'>
                <Image
                    src={trash}
                    alt=""
                    objectFit="contain"
                    quality={100}
                    className='h-3 w-3'
                    onClick={() => { removeItemAllFromCart(item) }}
                />
            </span>

            <div className='flex flex-row gap-8 pb-4 border-b-4 border-solid border-main'>
                <div className='h-20 w-20 p-1 bg-motion'>
                    <Image
                        src={item.src}
                        alt=""
                        objectFit="contain"
                        quality={100}
                        className='h-full w-full'
                    />
                </div>

                <div>
                    <h1 className='text-[1.2em]'>{item.nome}</h1>
                </div>
            </div>

            <div className='flex flex-row justify-between mt-4'>

                <div className='flex felx-row bg-motion'>
                    <div className='px-3 py-2 cursor-pointer' onClick={() => { removeItemFromCart(item) }}>-</div>
                    <div className='px-5 py-2'>{item.quantity}</div>
                    <div className='px-3 py-2 cursor-pointer' onClick={() => { addItemToCart(item) }}>+</div>
                </div>

                <h1 className='text-[1.5em]'>R$ {" " + (((parseFloat(item.price) - (parseFloat(item.desconto) * parseFloat(item.price))) * item.quantity).toFixed(2)).replace('.', ',')}</h1>

            </div>

        </div>
    );
}