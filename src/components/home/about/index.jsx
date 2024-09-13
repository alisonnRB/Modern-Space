import './index.css';

export default function About() {
    return (
        <section className="flex px-[3%]">

            <h1 className="font-extrabold title flex justify-end items-center">
                ATELIER
            </h1>

            <div className="flex w-full justify-around">

                <span className="flex flex-col w-[14vw] max-w-[20em]">

                    <div className="bg-main flex px-[5%] pt-[50%] ">
                        <h2 className="font-bold text-bg sub-title">MÓVEIS<br />PLANEJADOS</h2>
                    </div>

                    <div className="px-[5%] py-1">
                        <p className="font-bold text-dark explain max-w-[15em]">Explore nossa linha de móveis planejados, projetados para trazer elegância e eficiência ao seu lar. Com design moderno e sob medida, nossas peças otimizam cada espaço, oferecendo funcionalidade e estilo incomparáveis. Personalize seu ambiente e viva o melhor do conforto e sofisticação!</p>
                    </div>
                </span>

                <span className="flex flex-col w-[28vw] max-w-[35em]">

                    <div className="flex px-[5%] pt-[25%]">
                        <h2 className="font-bold text-dark sub-title">MÓVEIS<br />MODULADOS</h2>
                    </div>

                    <div className="bg-main px-[5%] py-1">
                        <p className="font-bold text-bg explain w-[11vw] max-w-[15em]">Descubra nossos móveis modulados, perfeitos para otimizar seu espaço com estilo e funcionalidade. Com design moderno e versátil, nossas peças se adaptam às suas necessidades, criando ambientes personalizados e organizados. Transforme sua casa com soluções inteligentes e elegantes!</p>
                    </div>
                </span>

            </div>



        </section>
    );
}