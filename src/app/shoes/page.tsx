import Breadcrumbs from '@/app/shoes/_components/breadcrumbs';
import Carousel from '@/app/shoes/_components/carousel';
import shoe1 from '@/app/_assets/products/shoe.png';
import shoe2 from '@/app/_assets/products/shoe2.png';
import shoe3 from '@/app/_assets/products/shoe3.png';
import shoe4 from '@/app/_assets/products/shoe4.png';
import shoe5 from '@/app/_assets/products/shoe5.png';

const productImages = [
  {
    src: shoe1,
    alt: 'Shoe 1',
  },
  {
    src: shoe2,
    alt: 'Shoe 2',
  },
  {
    src: shoe3,
    alt: 'Shoe 3',
  },
  {
    src: shoe4,
    alt: 'Shoe 4',
  },
  {
    src: shoe5,
    alt: 'Shoe 5',
  }
]

export default function Shoes() {
  return (
    <main className="">
      <Breadcrumbs />
      <section className="grid grid-cols-2">
        <Carousel items={productImages}/>
      </section>
    </main>
  );
}
