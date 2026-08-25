# 🪑 Modern Space

**Modern Space** é um site de apresentação para uma loja de móveis planejados e modulados, com foco em design moderno e elegante. O projeto exibe uma linha de produtos sofisticados, categorias e promoções, oferecendo uma experiência visual imersiva para os amantes de decoração e móveis de alta qualidade.

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)

## 🚀 Demonstração

Acesse o site em produção: [https://modern-space-zeta.vercel.app/](https://modern-space-zeta.vercel.app/)

## ✨ Sobre o Projeto

O Modern Space foi criado para ser a vitrine digital de uma loja de móveis que combina elegância, funcionalidade e design contemporâneo. O site apresenta de forma clara e atraente as linhas de móveis planejados e modulados, destacando promoções e produtos populares.

### Navegação e Seções

- **Hero:** Apresentação visual impactante com a chamada "Design Moderno".
- **Produtos:** Destaque para as linhas de móveis planejados e modulados, com descrições que enfatizam personalização e otimização de espaços.
- **Categorias:** Área para navegação por tipos de produtos.
- **Promoção:** Destaque para ofertas especiais, como a "Cadeira Decorativa" com desconto.
- **Populares:** Exibição de produtos em destaque com preços.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[Next.js 14](https://nextjs.org/):** Framework React para renderização e estruturação do site.
- **[React](https://reactjs.org/):** Biblioteca para construção da interface do usuário.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utilitário para estilização rápida e responsiva.
- **[Vercel](https://vercel.com/):** Plataforma para deploy e hospedagem.

## 📦 Estrutura de Pastas

A estrutura principal do projeto é:

Modern-Space/\
├── public/ # Arquivos estáticos (imagens, ícones, etc.)\
├── src/\
│ └── app/ # Diretório principal da aplicação Next.js (App Router)\
│ ├── globals.css # Estilos globais e configurações do Tailwind\
│ ├── layout.js # Layout raiz da aplicação\
│ └── page.js # Página inicial\
├── .eslintrc.json # Configuração do ESLint\
├── .gitignore # Arquivos ignorados pelo Git\
├── jsconfig.json # Configuração do caminho base para importações\
├── next.config.mjs # Configuração do Next.js\
├── package.json # Dependências e scripts do projeto\
├── postcss.config.mjs # Configuração do PostCSS para o Tailwind\
└── tailwind.config.js # Configuração do Tailwind CSS\


## 💻 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn, pnpm) instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/alisonnRB/Modern-Space.git
    cd Modern-Space
    ``

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3. **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```
    
4. Abra o navegador:
    Acesse http://localhost:3000 para ver o resultado.

## 🧠 Aprendizados e Melhorias Futuras

Este projeto foi uma excelente oportunidade para praticar a criação de um site institucional com foco em design e apresentação de produtos. Para o futuro, algumas melhorias podem ser implementadas:

    Catálogo Dinâmico: Conectar a um CMS para gerenciar produtos, categorias e promoções.

    Carrinho de Compras: Adicionar funcionalidade de carrinho para simular compras.

    Filtros: Implementar filtros por categoria, preço e material.

    Página de Produto: Criar páginas individuais para cada produto com mais detalhes.

    Integração com API: Buscar dados de produtos de uma API para maior escalabilidade.
