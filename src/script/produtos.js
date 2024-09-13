import Promotion from "@/assets/produtos/cadeira_promotional.png";

import cadeira from "@/assets/produtos/cadeira.png";
import mesa from "@/assets/produtos/mesa.png";
import poltrona from "@/assets/poltrona.png";

const produtos = {
    produtos: [

        { nome: "POLTRONA", price: 600, desconto: 20, alt: "", src: poltrona, suma: "Esta cadeira moderna combina elegância e funcionalidade com seu design minimalista e materiais de alta qualidade. Com linhas limpas e uma estrutura leve, é perfeita para qualquer ambiente contemporâneo, proporcionando conforto ergonômico e um toque de sofisticação.", descricao: "Descrição Detalhada da Poltrona Nossa poltrona é a escolha ideal para quem busca conforto e estilo em um só produto. Com um design elegante e contemporâneo, ela se encaixa perfeitamente em qualquer ambiente, seja na sala de estar, no escritório ou no quarto. Características Principais: Estofado Confortável: A poltrona possui um estofado macio e de alta densidade, garantindo um conforto excepcional para longas horas de uso. Materiais de Qualidade: Feita com uma estrutura robusta de madeira maciça, assegurando durabilidade e resistência. Acabamento Sofisticado: O tecido de revestimento é de alta qualidade, disponível em diversas cores para combinar com a decoração do seu espaço. Design Ergonômico: O design ergonômico proporciona suporte adequado para as costas e braços", dimensoes: "", especificacoes: "", href: "" },
        { nome: "MESA DE CENTRO", price: 200, desconto: 0, alt: "", src: mesa, suma: "", descricao: "", dimensoes: "", especificacoes: "" },
        { nome: "CADEIRA DE VARANDA", price: 400, desconto: 10, alt: "", src: cadeira, suma: "", descricao: "", dimensoes: "", especificacoes: "" },
        { nome: "CADEIRA DECORATIVA", price: 500, desconto: 20, alt: "", src: Promotion, suma: "", descricao: "", dimensoes: "", especificacoes: "" },
    ]
}


export default produtos;