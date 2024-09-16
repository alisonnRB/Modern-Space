import Image from "next/image";
import HomeCapa from '../../../assets/store/capa.png';

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

            <h1 className="absolute text-center text-bg HomeTitle py-2 px-6 bg-custom-rgba">ATELIER</h1>
        </section>
    );
}