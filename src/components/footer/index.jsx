import "./index.css";
import Link from "next/link";
import Image from "next/image";

import Facebook from "@/assets/footer/facebook.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Linkedin from "@/assets/footer/linkedin.svg";

export default function Footer() {
    return (
        <footer className="bg-dark w-full flex justify-between p-[5%]">
            <div className="flex flex-col w-[30%] gap-[1.5rem]">
                <Link href="/" className="font-extrabold text-bg foot-title">
                    ATELIER
                </Link>

                <p className="text-bg foot-text font-light p-[1%] text-justify">Explore nossa linha de móveis planejados, projetados para trazer elegância e eficiência ao seu lar. Com design moderno e sob medida, nossas peças otimizam cada espaço, oferecendo funcionalidade e estilo incomparáveis. Personalize seu ambiente e viva o melhor do conforto e sofisticação!</p>

                <nav className="flex gap-[5%]">

                    <Link href="">
                        <Image
                            src={Facebook}
                            alt=""
                            objectFit="contain"
                            quality={100}
                            className="w-[80%]"
                        />
                    </Link>

                    <Link href="">
                        <Image
                            src={Instagram}
                            alt=""
                            objectFit="contain"
                            quality={100}
                            className="w-[80%]"
                        />
                    </Link>

                    <Link href="">
                        <Image
                            src={Linkedin}
                            alt=""
                            objectFit="contain"
                            quality={100}
                            className="w-[80%]"
                        />
                    </Link>
                </nav>
            </div>

            <div className="flex w-[60%] justify-evenly">

                <span className="flex flex-col gap-[1.5rem]">
                    <h1 className="font-extrabold text-bg foot-title">PÁGINAS</h1>

                    <nav className="flex flex-col gap-[.45rem]">

                        <Link href="" className="text-bg foot-link">
                            Home
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Loja
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            About
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Contatos
                        </Link>

                    </nav>
                </span>

                <span className="flex flex-col gap-[1.5rem]">
                    <h1 className="font-extrabold text-bg foot-title">SUPORTE</h1>

                    <nav className="flex flex-col gap-[.45rem]">

                        <Link href="" className="text-bg foot-link">
                            Cart
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Login
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Privacy
                        </Link>

                    </nav>
                </span>

                <span className="flex flex-col gap-[1.5rem]">
                    <h1 className="font-extrabold text-bg foot-title">CATEGORIAS</h1>

                    <nav className="flex flex-col gap-[.45rem]">

                        <Link href="" className="text-bg foot-link">
                            Quarto
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Cozinha
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Escritório
                        </Link>

                        <Link href="" className="text-bg foot-link">
                            Sala de estar
                        </Link>

                    </nav>
                </span>
            </div>
        </footer>
    )
}