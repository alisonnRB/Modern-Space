import Link from 'next/link';

import './index.css';

export default function Filter({ slug }) {

    return (
        <section className="flex w-full py-[5%] justify-center">

            <div className="w-[80%] flex flex-col">

                <h1 className="font-bold pb-[3%]">PRODUTOS</h1>

                <span className='flex gap-[3%]'>

                    <Link href={''} className='option  text-main'>
                        TODOS
                    </Link>

                    <Link href={''} className='option  text-main'>
                        Quarto
                    </Link>

                    <Link href={''} className='option  text-main'>
                        Cozinha
                    </Link>

                    <Link href={''} className='option  text-main'>
                        Escritório
                    </Link>

                    <Link href={''} className='option  text-main text-nowrap'>
                        Sala de estar
                    </Link>

                </span>
            </div>

        </section>
    );
}