import './index.css';

export default function About() {
    return (
        <section className="flex pr-8 justify-between">

            <h1 className="font-extrabold title flex justify-center items-center">
                ATELIER
            </h1>

            <span className="flex flex-col w-1/3">

                <div className="bg-main pt-[20%]">
                    <h2 className="font-bold text-bg">MÓVEIS<br />PLANEJADOS</h2>
                </div>

                <div>
                    <p className="font-bold text-dark">Explore nossa linha de móveis planejados, projetados para trazer elegância e eficiência ao seu lar. Com design moderno e sob medida, nossas peças otimizam cada espaço, oferecendo funcionalidade e estilo incomparáveis. Personalize seu ambiente e viva o melhor do conforto e sofisticação!</p>
                </div>
            </span>

            <span className="flex flex-col w-1/3">

                <div>
                    <h2 className="font-bold text-dark">MÓVEIS<br />MODULADOS</h2>
                </div>

                <div className="bg-main">
                    <p className="font-bold text-bg">Descubra nossos móveis modulados, perfeitos para otimizar seu espaço com estilo e funcionalidade. Com design moderno e versátil, nossas peças se adaptam às suas necessidades, criando ambientes personalizados e organizados. Transforme sua casa com soluções inteligentes e elegantes!</p>
                </div>
            </span>


        </section>
    );
}