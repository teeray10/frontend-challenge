import Breadcrumbs from '@/app/shoes/_components/breadcrumbs';
import Carousel from '@/app/shoes/_components/carousel';
import ProductDetail from '@/app/shoes/_components/productDetail';
import AddToCart from '@/app/shoes/_components/addToCart';
import RelatedProducts from '@/app/shoes/_components/relatedProducts';

const productImages = [
  {
    src: '/products/shoe.png',
    alt: 'Shoe 1',
  },
  {
    src: '/products/shoe2.png',
    alt: 'Shoe 2',
  },
  {
    src: '/products/shoe3.png',
    alt: 'Shoe 3',
  },
  {
    src: '/products/shoe4.png',
    alt: 'Shoe 4',
  },
  {
    src: '/products/shoe5.png',
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
    <main className="mt-5 lg:my-12 lg:mx-7 2xl:mx-40">
      <Breadcrumbs />
      <section className="grid mt-5 gap-5 lg:gap-7 md:grid-cols-2">
        <Carousel items={productImages}/>
        <aside className="flex flex-col gap-5">
          <ProductDetail product={product}/>
          <AddToCart />
        </aside>
        <RelatedProducts />
      </section>
    </main>
  );
}
