'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import './index.css';

export default function Filter() {
    const searchParams = useSearchParams();

    const search = searchParams.get('Search') ? searchParams.get('Search') : "";
    const type = searchParams.get('type') ? searchParams.get('type') : "all";

    return (
        <section className="flex w-full py-[5%] justify-center bg-bg">

            <div className="w-[80%] flex flex-col">

                <h1 className="font-bold pb-[3%] title-store">PRODUTOS</h1>

                <span className='flex gap-[3%]'>

                    <Link href={`/store/produtos?Search=${search}&type=all`} className={`option ${type == "all" ? "text-dark" : "text-main"}`} scroll={false}>
                        TODOS
                    </Link>

                    <Link href={`/store/produtos?Search=${search}&type=quarto`} className={`option ${type == "quarto" ? "text-dark" : "text-main"}`} scroll={false}>
                        Quarto
                    </Link>

                    <Link href={`/store/produtos?Search=${search}&type=cozinha`} className={`option ${type == "cozinha" ? "text-dark" : "text-main"}`} scroll={false}>
                        Cozinha
                    </Link>

                    <Link href={`/store/produtos?Search=${search}&type=escritorio`} className={`option ${type == "escritorio" ? "text-dark" : "text-main"}`} scroll={false}>
                        Escritório
                    </Link>

                    <Link href={`/store/produtos?Search=${search}&type=sala`} className={`option text-nowrap ${type == "sala" ? "text-dark" : "text-main"}`} scroll={false}>
                        Sala de estar
                    </Link>

                </span>
            </div>

        </section>
    );
}