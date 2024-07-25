import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShop} from '@fortawesome/free-solid-svg-icons/faShop';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';

export default function ProductDetail({product}: any) {
  const discountPercentage = Math.round((product.price - product.salePrice) / product.price * 100);
  return (
    <section className="border-blue border-[6px] p-5 text-grey lg:ml-8">
      <h4 className="font-suez text-xl uppercase text-black">{product.name}</h4>
      <div className="flex items-center gap-1 text-light_grey text-xs uppercase">
        <FontAwesomeIcon icon={faShop} className="w-3 h-3"/>
        <p>{product.vendor}</p>
      </div>
      <div className="grid grid-cols-2 py-5 w-2/3 ml-5">
        <p>Fabrication</p>
        <p className="text-black font-bold">{product.fabrication}</p>
        <p>Colour</p>
        <p className="text-black font-bold">{product.colour}</p>
        <p>Brand</p>
        <p className="text-black font-bold">{product.brand}</p>
      </div>

      <div className="h-[1px] w-11/12 bg-light_grey"></div>

      <div className="mt-3 ml-5">
        <p className="text-xs">PRODUCT DETAILS</p>

        <ul className="text-sm">
          {product.details?.map((detail: any, index: number) => <li className="ml-4 list-disc" key={index}>{detail}</li>)}
        </ul>
      </div>

      <div className="flex justify-end items-end gap-5">
        <span className="flex items-center w-fit h-fit bg-blue text-white rounded-md py-1 px-2 italic font-bold">
          <FontAwesomeIcon icon={faTag} className="w-5 h-5 mr-1" />{discountPercentage}% Off
        </span>
        <div className="flex flex-col items-end">
          <p className="font-suez text-sm text-grey relative">R{product.price}</p>
          <div className="h-0.5 w-10 bg-grey -rotate-12 -mt-3"></div>
          <p className="font-suez text-black text-3xl">R {product.salePrice}</p>
        </div>
      </div>

    </section>
  )
}