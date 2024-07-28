import ProductThumbnail from '@/app/shoes/_components/productThumbnail';

export default function RelatedProducts() {
  const products = [
    {
      src: '/products/boots1.png',
      name: 'Hargrave Ankle Boot',
      vendor: 'Superbalist',
      price: 833.33333,
      salePrice: 500
    },
    {
      src: '/products/boots2.png',
      name: 'Cameron Leather',
      vendor: 'Superbalist',
      price: 539,
      lowStock: true
    },
    {
      src: '/products/boots3.png',
      name: 'Grayson Brogue',
      vendor: 'Superbalist',
      price: 700,
      salePrice: 420,
      lowStock: true
    },
    {
      src: '/products/boots4.png',
      name: 'Orca',
      vendor: 'Jack and Jones',
      price: 833.33333,
      salePrice: 500,
      lowStock: true
    },
    {
      src: '/products/boots5.png',
      name: 'Jean Hiker Boots',
      vendor: 'Superbalist',
      price: 600,
    },
  ]

  return (
    <section className="col-span-full">
      <div className="flex items-center gap-2 mb-5">
        <h4 className="font-suez text-nowrap">MORE FROM <span className="text-blue">BOOTS</span></h4>
        <div className="h-0.5 w-full bg-grey"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 items-stretch lg:gap-10 md:grid-cols-3">
        {
          products?.map((product: any, index: number) => <ProductThumbnail product={product} key={index} />)
        }
      </div>
    </section>
  )
}