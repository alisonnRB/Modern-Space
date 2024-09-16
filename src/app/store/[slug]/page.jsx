import Capa from "@/components/store/capa/";
import Filter from "@/components/store/filter";
import Produtos from "@/components/store/produtos";
import { notFound } from 'next/navigation';

export default function Menu({ params }) {
    const slug = params.slug;
    const validSlugs = ["produtos", "search"]

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return (
        <main className="flex flex-col bg-white">
            <Capa />
            <Filter />
            <Produtos />
        </main>
    )
}