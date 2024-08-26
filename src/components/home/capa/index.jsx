import Image from "next/image";
import HomeCapa from '../../../assets/home/capa.png';

import './index.css';

export default function Capa() {
    return (
        <section className="flex flex-col justify-center items-center relative ">
            <Image
                src={HomeCapa}
                alt="Imagem de um café com pão feito pela WorkCoffe"
                objectFit="contain"
                className="w-full max-w-screen relative"
                quality={100}
                draggable={false}
            />

            <h1 className="absolute text-center text-bg HomeTitle">DESIGN <br /> MODERNO</h1>
        </section>
    );
}