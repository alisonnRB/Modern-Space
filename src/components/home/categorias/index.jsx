import "./index.css"

import Image from "next/image";
import Link from "next/link";

import Cozinha from "@/assets/home/categoriaCozinha.png";
import Escritorio from "@/assets/home/categoriaEscritorio.png";
import Quarto from "@/assets/home/categoriaQuarto.png";
import Sala from "@/assets/home/categoriaSala.png";

export default function Categorias() {
    return (
        <section className="w-full flex justify-center items-center mt-[15%] px-[6%]">

            <div className="flex flex-col">

                <span className="px-[1%]">
                    <h1 className="categorie-legend text-dark font-medium">CATEGORIAS</h1>
                </span>

                <nav className="categorias text-white">

                    <Link href="">
                        <Image
                            src={Quarto}
                            objectFit="contain"
                            quality={100}
                        />

                        <h2 className="categorie-title relative bottom-[25%] left-[-38%] font-bold">QUARTO</h2>
                    </Link>

                    <Link href="">
                        <Image
                            src={Cozinha}
                            objectFit="contain"
                            quality={100}
                        />

                        <h2 className="categorie-title relative bottom-[25%] left-[-38%] font-bold">COZINHA</h2>
                    </Link>

                    <Link href="">
                        <Image
                            src={Escritorio}
                            objectFit="contain"
                            quality={100}
                        />

                        <h2 className="categorie-title relative bottom-[25%] left-[-38%] font-bold">ESCRITÓRIO</h2>
                    </Link>

                    <Link href="">
                        <Image
                            src={Sala}
                            objectFit="contain"
                            quality={100}
                        />

                        <h2 className="categorie-title relative bottom-[25%] left-[-38%] font-bold">SALA DE ESTAR</h2>
                    </Link>

                </nav>
            </div>

        </section>
    );
}