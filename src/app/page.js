import Capa from '@/components/home/capa';
import About from '@/components/home/about';
import Categorias from '@/components/home/categorias';
import Promotion from '@/components/home/promotion';

export default function Home() {
  return (
    <main className="">
      <Capa />
      <About />
      <Categorias />
      <Promotion />
    </main>
  );
}
