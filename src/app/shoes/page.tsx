import Breadcrumbs from '@/app/shoes/_components/breadcrumbs';
import Carousel from '@/app/shoes/_components/carousel';
import shoe1 from '@/app/_assets/products/shoe.png';
import shoe2 from '@/app/_assets/products/shoe2.png';
import shoe3 from '@/app/_assets/products/shoe3.png';
import shoe4 from '@/app/_assets/products/shoe4.png';
import shoe5 from '@/app/_assets/products/shoe5.png';
import ProductDetail from '@/app/shoes/_components/productDetail';

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

const product = {
  name: 'Dylan Hiker Boot',
  vendor: 'Superbalist',
  fabrication: 'Faux Leather',
  colour: 'Brown',
  brand: 'Superbalist',
  details: ['Hiking boot', 'Speed laces', 'Lace-up design', 'Rubber sole'],
  price: 599,
  salePrice: 359
}

export default function Shoes() {
  return (
    <main className="p-2 lg:py-0 lg:px-10 lg:mt-10">
      <Breadcrumbs />
      <section className="grid lg:grid-cols-2">
        <Carousel items={productImages}/>
        <ProductDetail product={product}/>
      </section>
    </main>
  );
}
